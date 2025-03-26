import React, { useRef, useState } from 'react';
import { SafeAreaView, View, TextInput, Text, TouchableOpacity } from 'react-native';
// font
import { font } from '../../App';
// navigation path
import { navPath } from '../navigationPath/NavigationPath';
// react query
import { useQuery } from 'react-query';
// redux
import { useDispatch } from 'react-redux';
// api
import { update_member } from '../route/api';
// style sheet
import { background, flex } from '../styledComponent/layout';
import { input, button, padding, margin, fontColor, fontSize, text } from '../styledComponent/common';
// function
import { checkSpace, checkSpecial, checkPasswordPattern, checkEmail } from '../function/RegExp';
// custom hook
import { useInputForm, inputField } from '../hook/CustomHooks';
// store
import { userData, userToken } from './StackNavigator';
// action
import { updateMember } from '../store/userSlice';
//loading component
import { Loading } from './Loading';
// component
import ScrollKeyBoardView from './ScrollKeyBoardView';
import { AlertDataModal } from '../modal/Modal';


export default UserDataSetting = ({ navigation }) => {
   const token = userToken();
   const dispatch = useDispatch();
   const { mb_name, mb_email, mb_no } = userData();
   // 정보수정 알림 모달
   const [ alert, setAlert ] = useState({isOpen:false, comment:''});
   // 이름
   const [ name, onNameChange, onNameFocusIn, onNameFocusOut, onNameNotPass, onNamePass ] = useInputForm({
      ...inputField,
      text: mb_name,
   });
   // 이메일
   const [ mail, onMailChange, onMailFocusIn, onMailFocusOut, onMailNotPass, onMailPass ] = useInputForm({
      ...inputField,
      text: mb_email,
   });
   // 비밀번호
   const [ password, onPasswordChange, onPasswordFocusIn, onPasswordFocusOut, onPasswordNotPass, onPasswordPass ] = useInputForm(inputField);
   // 새로운 비밀번호 설정
   const [ passwordCheck, onPasswordCheckChange, onPasswordCheckFocusIn, onPasswordCheckFocusOut, onPasswordCheckNotPass, onPasswordCheckPass ] = useInputForm(inputField);
   // 회원정보 수정 요청 
   const { isLoading, refetch } = useQuery('updateMember', () => (
      update_member({
         mb_no,
         mb_name: name.text,
         mb_email: mail.text,
         mb_password: password.text,
         new_password: passwordCheck.text,
      }).then(res => {
         if(res.status) {
            setAlert({isOpen:true, comment: res.msg, path: navPath.menu});
            dispatch(updateMember({mb_name: name.text, mb_email: mail.text}));
         } else {
            setAlert({isOpen:true, comment: res.msg})
         }
      })
   ),{enabled:false});

   // 입력폼 체크
   const checkPattern = ( text, type, onNotPassChecked, onPassChecked ) => {
      let patternCheck = true;

      switch(type) {
         case 'mail':
            if(checkEmail(text)) {
               patternCheck = false;
               setAlert({isOpen: true, comment:'잘못된 이메일 형식입니다.'});
            }
            break;
         case 'password':
            if(checkPasswordPattern(text)) {
               patternCheck = false;
               setAlert({isOpen: true, comment:'비밀번호는 8자리 이상의 비밀번호를 문자, 숫자로 구성하여야 합니다.'});
            }
            break;
         default :
            // 공백 체크
            if(checkSpace(text)) {
               patternCheck = false;
               setAlert({isOpen: true, comment:'공백이 없어야 합니다.'});
            };
            // 특수문자 체크
            if(checkSpecial(text)) {
               patternCheck = false;
               setAlert({isOpen: true, comment:'특수문자가 들어있습니다.'})
            };
         };

          // 패턴체크 통과 유무 
         if (!text) return onNotPassChecked();

         patternCheck ? onPassChecked() : onNotPassChecked();
   };


   return (
      <>
         <ScrollKeyBoardView extraHeight={250}>
            <SafeAreaView style={[background.white, flex.safeAreaView, flex.spaceBetween, {position:'relative'}]}>
               <View style={[padding.vertical_30, padding.horizontal_20]}>
                  {/* 이름 */}
                  <View style={margin.bottom_30}>
                     <Text style={[font.medium, fontColor.hex_333, fontSize.size18, margin.bottom_10]}>
                        이름
                     </Text>
                     <TextInput
                        value={name.text}
                        autoCapitalize="none"
                        spellCheck={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='done'
                        style={[input.default, font.regular, input.typePass]}
                        onChange={onNameChange}
                        onFocus={onNameFocusIn}
                        onBlur={() => checkPattern(name.text,'name', onMailNotPass, onMailPass, onMailFocusOut)}
                        onSubmitEditing={() => checkPattern(name.text, 'name', onMailNotPass, onMailPass, onMailFocusOut)}
                        blurOnSubmit={false}
                     />
                  </View>
                  {/* 이메일 */}
                  <View style={margin.bottom_30}>
                     <Text style={[font.medium, fontColor.hex_333, fontSize.size18, margin.bottom_10]}>
                        이메일
                     </Text>
                     <TextInput
                        value={mail.text}
                        autoCapitalize="none"
                        spellCheck={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='done'
                        style={[input.default, font.regular, input.typePass]}
                        onChange={onMailChange}
                        onFocus={onMailFocusIn}
                        onBlur={() => checkPattern(mail.text, 'mail', onNameNotPass, onNamePass, onNameFocusOut)}
                        onSubmitEditing={() => checkPattern(mail.text, 'mail', onNameNotPass, onNamePass, onNameFocusOut)}
                        blurOnSubmit={false}
                     />
                  </View>
                  {/* 비밀번호 */}
                  <View style={margin.bottom_30}>
                     <Text style={[font.medium, fontColor.hex_333, fontSize.size18, margin.bottom_10]}>
                        비밀번호
                     </Text>
                     <TextInput
                        value={password.text}
                        autoCapitalize="none"
                        spellCheck={false}
                        secureTextEntry={true}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='done'
                        style={[input.default, font.regular, input.typePass]}
                        onChange={onPasswordChange}
                        onFocus={onPasswordFocusIn}
                        onBlur={() => checkPattern(password.text, 'password', onPasswordNotPass, onPasswordPass, onPasswordFocusOut)}
                        onSubmitEditing={() => checkPattern(password.text, 'password', onPasswordNotPass, onPasswordPass, onPasswordFocusOut)}
                        blurOnSubmit={false}
                     />
                  </View>
                  {/* 비밀번호 */}
                  <View style={margin.bottom_30}>
                     <Text style={[font.medium, fontColor.hex_333, fontSize.size18, margin.bottom_10]}>
                        새 비밀번호 설정
                     </Text>
                     <TextInput
                        value={passwordCheck.text}
                        autoCapitalize="none"
                        spellCheck={false}
                        secureTextEntry={true}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='done'
                        style={[input.default, font.regular, input.typePass]}
                        onChange={onPasswordCheckChange}
                        onFocus={onPasswordCheckFocusIn}
                        onBlur={() => checkPattern(password.text, 'password', onPasswordCheckNotPass, onPasswordCheckPass, onPasswordCheckFocusOut)}
                        onSubmitEditing={() => checkPattern(password.text, 'password', onPasswordCheckNotPass, onPasswordCheckPass, onPasswordCheckFocusOut)}
                        blurOnSubmit={false}
                     />
                  </View>
               </View>
            </SafeAreaView>
         </ScrollKeyBoardView>
         <SafeAreaView style={[{position:'absolute',width:'100%', bottom: 0}, padding.vertical_10]}>
            <TouchableOpacity 
               style={[button.default, button.colorBlue, margin.horizontal_20, flex.alignCenter]}
               onPress={refetch}
            >
               <Text style={[font.medium, fontSize.size18, fontColor.hex_fff]}>
                  완료
               </Text>
            </TouchableOpacity>
         </SafeAreaView>
         {/* 입력폼 경고 모달 */}
         <AlertDataModal
            visible={alert.isOpen} 
            hide={setAlert} 
            comment={alert.comment}
            navigate={navigation.navigate}
            path={alert.path}
         />
         {isLoading&&<Loading visible={isLoading}/>}
      </>
   )
};