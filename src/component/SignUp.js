import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, View, TextInput, Text, TouchableOpacity, Keyboard, Modal } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useQuery } from 'react-query';
// style sheet
import { background, flex, signup } from '../styledComponent/layout';
import { input, button, padding, margin, fontSize, fontColor, calWidth, text } from '../styledComponent/common';
// font
import { font } from '../../App';
// navigation path
import { navPath } from '../navigationPath/NavigationPath';
// function
import { checkSpace, checkSpecial, checkPasswordPattern, checkEmail } from '../function/RegExp';
// api
import { fetch_signUp } from '../route/api';
// custom hook
import { useInputForm, inputField } from '../hook/CustomHooks';
// component
import ScrollKeyBoardView from './ScrollKeyBoardView';
// modal component
import { AlertDataModal } from '../modal/Modal';
import { TermsUseModal, PrivacyNoticeModal } from '../modal/ScrollModal';
// loading component
import { Loading } from './Loading';




export const SignUp = ({ navigation }) => {
   // input auto focus를 위한 DOM 요소 조작
   const inputsRef = useRef([]);
   // 로딩
   const [ loading, setLoading ] = useState(false);
   // 아아디
   const [ id, onIdChange, onIdFocusIn, onIdFocusOut, onIdNotPass, onIdPass ] = useInputForm(inputField);
   // 이름
   const [ name, onNameChange, onNameFocusIn, onNameFocusOut, onNameNotPass, onNamePass ] = useInputForm(inputField);
   // 이메일
   const [ mail, onMailChange, onMailFocusIn, onMailFocusOut, onMailNotPass, onMailPass ] = useInputForm(inputField);
   // 비밀번호
   const [ password, onPasswordChange, onPasswordFocusIn, onPasswordFocusOut, onPasswordNotPass, onPasswordPass ] = useInputForm(inputField);
   // 비밀번호 확인
   const [ passwordChecked, onPasswordCheckedChange, onPasswordCheckedFocusIn, onPasswordCheckedFocusOut, onPasswordCheckedNotPass, onPasswordCheckedPass ] = useInputForm(inputField);
   // 약관동의
   const [ terms, setTerms ] = useState({
      all: false,
      use: false,
      privacy: false,
      mail: false,
   });
   // 이용약관 모달
   const [ modalTermsUse, setModalTermsUse ] = useState(false);
   // 개인정보 취급방침 모달
   const [ modalPrivacyNotice, setModalPrivacyNotice ] = useState(false);
   // 필수입력 경고 모달
   const [ alert, setAlert ] = useState({isOpen: false, comment:'', path:''});

   // 약관동의 체크박스
   const CheckBoxOnChange = type => {
      setTerms({
         ...terms,
         [type]: !terms[type],
      });
   };
   // 약관동의 전체동의 체크박스 
   const allCheck = () => {
      setTerms({
         ...terms,
         all: !terms.all,
         use: !terms.all,
         privacy: !terms.all,
         mail: !terms.all,
      });
   };
   // input 공백, 특수문자 체크
   const checkPattern = (text, currentRefIndex, nextRefIndex, type, event, onNotPassChecked, onPassChecked, focusOut) => {
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
         case 'passwordCheck':
            if(password.text !== passwordChecked.text) {
               patternCheck = false;
               setAlert({isOpen: true, comment:'비밀번호가 다릅니다.'});
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


      if(event === 'onSubmitEditing') {
         // 다음 포커스가 갈 요소가 있으면 다음 요소로 포커스 이동
         if(nextRefIndex) return inputsRef[nextRefIndex].focus();
      }
      
   };
   // 회원가입 요청 
   const submitSignUp = async () => {

      // 파라미터 데이터
      let form = {
         mb_id: id.text,
         mb_password: password.text,
         mb_name: name.text,
         mb_email: mail.text,
      };

      // 이메일 수신동의 시 파라미터 데이터
      if (terms.mail) {
         form = {
            ...form,
            mb_dm_email:'1',
         }
      }

      try{
         setLoading(true);

         await fetch_signUp(form)
            .then(res=>{
               if(res.status === 1) {
                  setAlert({isOpen: true, comment:'회원가입에 성공했습니다!', path:`${navPath.login}`});
               } else {
                  setAlert({isOpen: true, comment:`${res.msg}`});
               }
            })
      } catch(err) {
         console.log(err)
      }
      
      setLoading(false);
   };

   //회원가입 버튼 활성 상태
   const btnDisabled = (id.checked && name.checked && mail.checked && password.checked && passwordChecked.checked && terms.use && terms.privacy) ? false : true

   return (
      <SafeAreaView style={[flex.safeAreaView, background.white, flex.rowCenter]}> 
            <ScrollKeyBoardView extraHeight={250}>
               <ScrollView style={[background.padding, padding.bottom_0]}>
                  <View style={[flex.colCenter]}>
                     {/* title */}
                     <Text style={[font.medium, fontSize.size24, fontColor.hex_333, margin.bottom_50, margin.top_40]}>
                        회원가입
                     </Text>
                     {/* 아이디 */}
                     <View style={[margin.bottom_30, calWidth.w100]}>
                        <Text style={[font.medium, fontSize.size18, fontColor.hex_333, margin.bottom_10]}>
                           아이디
                        </Text>
                        <TextInput
                           ref={props => inputsRef[0] = props}
                           value={id.text}
                           placeholder='사용할 아이디를 입력하세요.'
                           autoCapitalize="none"
                           spellCheck={false}
                           enablesReturnKeyAutomatically={true}
                           returnKeyType='next'
                           style={
                              (id.checked === null && id.focus) 
                              ?
                              [input.default, font.regular, input.typePass, 
                              !(id.checked === null || id.checked) && input.focusRedLine]
                              :
                              [input.default, font.regular, input.typePass, 
                              !(id.checked === null || id.checked) && input.focusRedLine]
                           }
                           onChange={onIdChange}
                           onFocus={onIdFocusIn}
                           onBlur={() => checkPattern(id.text, 0, 1, 'id', null, onIdNotPass, onIdPass, onIdFocusOut)}
                           onSubmitEditing={() => checkPattern(id.text, 0, 1, 'id', 'onSubmitEditing', onIdNotPass, onIdPass, onIdFocusOut)}
                           blurOnSubmit={false}
                        />
                     </View>
                     {/* 이름 */}
                     <View style={[margin.bottom_30, calWidth.w100]}>
                        <Text style={[font.medium, fontSize.size18, fontColor.hex_333, margin.bottom_10]}>
                           이름
                        </Text>
                        <TextInput
                           ref={props => inputsRef[1] = props}
                           value={name.text}
                           placeholder='이름을 입력하세요.'
                           autoCapitalize="none"
                           spellCheck={false}
                           enablesReturnKeyAutomatically={true}
                           returnKeyType='next'
                           style={
                              (name.checked === null && name.focus) 
                              ?
                              // [input.default, font.regular, name.checked ? input.focusBlackLine : input.focusRedLine]
                              [input.default, font.regular, input.typePass, 
                              !(name.checked === null || name.checked) && input.focusRedLine]
                              :
                              // [input.default, font.regular, name.checked ? input.typeTxt : input.focusRedLine]
                              [input.default, font.regular, input.typePass, 
                              !(name.checked === null || name.checked) && input.focusRedLine]
                           }
                           onChange={onNameChange}
                           onFocus={onNameFocusIn}
                           onBlur={() => checkPattern(name.text, 1, 2, 'name', null, onNameNotPass, onNamePass, onNameFocusOut)}
                           onSubmitEditing={() => checkPattern(name.text, 1, 2, 'name', 'onSubmitEditing', onNameNotPass, onNamePass, onNameFocusOut)}
                           blurOnSubmit={false}
                        />
                     </View>
                     {/* 이메일 */}
                     <View style={[margin.bottom_30, calWidth.w100]}>
                        <Text style={[font.medium, fontSize.size18, fontColor.hex_333, margin.bottom_10]}>
                           이메일
                        </Text>
                        <TextInput
                           ref={props => inputsRef[2] = props}
                           value={mail.text}
                           placeholder='이메일을 입력하세요.'
                           autoCapitalize="none"
                           spellCheck={false}
                           enablesReturnKeyAutomatically={true}
                           returnKeyType='next'
                           style={
                              (mail.checked === null && mail.focus) 
                              ?
                              // [input.default, font.regular, mail.checked ? input.focusBlackLine : input.focusRedLine]
                              [input.default, font.regular, input.typePass, 
                              !(mail.checked === null || mail.checked) && input.focusRedLine]
                              :
                              // [input.default, font.regular, mail.checked ? input.typeTxt : input.focusRedLine]
                              [input.default, font.regular, input.typePass,
                              !(mail.checked === null || mail.checked) && input.focusRedLine]
                           }
                           onChange={onMailChange}
                           onFocus={onMailFocusIn}
                           onBlur={() => checkPattern(mail.text, 2, 3, 'mail', null, onMailNotPass, onMailPass, onMailFocusOut)}
                           onSubmitEditing={() => checkPattern(mail.text, 2, 3, 'mail', 'onSubmitEditing', onMailNotPass, onMailPass, onMailFocusOut)}
                           blurOnSubmit={false}
                        />
                     </View>
                     {/* 비밀번호 */}
                     <View style={[margin.bottom_30, calWidth.w100]}>
                        <Text style={[font.medium, fontSize.size18, fontColor.hex_333, margin.bottom_10]}>
                           비밀번호
                        </Text>
                        <Text style={[font.regular, fontSize.size14, fontColor.hex_818181, margin.bottom_10]}>
                           영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
                        </Text>
                        <TextInput
                           ref={props => inputsRef[3] = props}
                           value={password.text}
                           placeholder='비밀번호를 입력하세요.'
                           autoCapitalize="none"
                           spellCheck={false}
                           enablesReturnKeyAutomatically={true}
                           returnKeyType='next'
                           secureTextEntry={true}
                           style={
                              (password.checked === null && password.focus) 
                              ?
                              // [input.default, font.regular, password.checked ? input.focusBlackLine : input.focusRedLine]
                              [input.default, font.regular, input.typePass, 
                              !(password.checked === null || password.checked) && input.focusRedLine]
                              :
                              // [input.default, font.regular, password.checked ? input.typeTxt : input.focusRedLine]
                              [input.default, font.regular, input.typePass,
                              !(password.checked === null || password.checked) && input.focusRedLine]
                           }
                           onChange={onPasswordChange}
                           onFocus={onPasswordFocusIn}
                           onBlur={() => checkPattern(password.text, 3, 4, 'password', null, onPasswordNotPass, onPasswordPass, onPasswordFocusOut)}
                           onSubmitEditing={() => checkPattern(password.text, 3, 4, 'password', 'onSubmitEditing', onPasswordNotPass, onPasswordPass, onPasswordFocusOut)}
                           blurOnSubmit={false}
                        />
                        {
                           !(password.checked === null || password.checked)
                           && 
                           <Text style={[font.regular, fontSize.size14, fontColor.hex_F55858, margin.top_10, margin.left_10]}>
                              비밀번호는 영문,숫자를 포함하여 8자 이상이어야 합니다.
                           </Text>
                        }
                     </View>
                     {/* 비밀번호 확인*/}
                     <View style={[margin.bottom_30, calWidth.w100]}>
                        <Text style={[font.medium, fontSize.size18, fontColor.hex_333, margin.bottom_10]}>
                           비밀번호 확인
                        </Text>
                        <TextInput
                           ref={props => inputsRef[4] = props}
                           value={passwordChecked.text}
                           placeholder='비밀번호 확인'
                           autoCapitalize="none"
                           spellCheck={false}
                           enablesReturnKeyAutomatically={true}
                           returnKeyType='done'
                           secureTextEntry={true}
                           style={
                              (passwordChecked.checked === null && passwordChecked.focus) 
                              ?
                              // [input.default, font.regular, passwordChecked.checked ? input.focusBlackLine : input.focusRedLine]
                              [input.default, font.regular, input.typePass, 
                              !(passwordChecked.checked === null || passwordChecked.checked) && input.focusRedLine]
                              :
                              // [input.default, font.regular, passwordChecked.checked ? input.typeTxt : input.focusRedLine]
                              [input.default, font.regular, input.typePass,
                              !(passwordChecked.checked === null || passwordChecked.checked) && input.focusRedLine]
                           }
                           onChange={onPasswordCheckedChange}
                           onFocus={onPasswordCheckedFocusIn}
                           onBlur={() => checkPattern(passwordChecked.text, null, null, 'passwordCheck', 'onSubmitEditing', onPasswordCheckedNotPass, onPasswordCheckedPass, onPasswordCheckedFocusOut)}
                           onSubmitEditing={() => checkPattern(passwordChecked.text, null, null, 'passwordCheck', 'onSubmitEditing', onPasswordCheckedNotPass, onPasswordCheckedPass, onPasswordCheckedFocusOut)}
                        />
                     </View>
                     {/* 약관동의 */}
                     <View style={[calWidth.w100, margin.bottom_50]}>
                        <Text style={[font.medium, fontSize.size18, fontColor.hex_333, margin.bottom_10]}>
                           약관동의
                        </Text>
                        <View style={[signup.checkBoxWrap, padding.horizontal_20, padding.vertical_20]}>
                           <BouncyCheckbox
                              size={21}
                              isChecked={
                                 terms.use && terms.privacy && terms.mail 
                                 ? 
                                 true
                                 :
                                 false
                              }
                              disableBuiltInState={true}
                              fillColor="#5277F6"
                              unfillColor="#FFFFFF"
                              text="전체동의"
                              style={[margin.bottom_20, padding.bottom_20, signup.checkBoxTop]}
                              textStyle={[fontSize.size18, fontColor.hex_333, font.medium, text.decoration_none]}
                              iconStyle={{ borderColor: "#5277F6", borderRadius: 0,}}
                              onPress={() => allCheck()}
                           />
                           <View style={[margin.bottom_20, flex.row, flex.alignCenter]}>
                              <BouncyCheckbox
                                 size={21}
                                 isChecked={terms.use}
                                 disableBuiltInState={true}
                                 fillColor="#5277F6"
                                 unfillColor="#FFFFFF"
                                 text="이용약관"
                                 textStyle={[fontSize.size16, fontColor.hex_333, font.regular, text.decoration_underline]}
                                 iconStyle={{ borderColor: "#5277F6", borderRadius: 0,}}
                                 onPress={() => {
                                    CheckBoxOnChange('use');
                                    if (!terms.use) {
                                       setModalTermsUse(true);
                                    }
                                 }}
                              />
                              <Text style={[fontColor.hex_5277F6,  text.decoration_underline]}>
                                 (필수)
                              </Text>
                           </View>
                           <View style={[margin.bottom_20, flex.row, flex.align_center]}>
                              <BouncyCheckbox
                                 size={21}
                                 isChecked={terms.privacy}
                                 disableBuiltInState={true}
                                 fillColor="#5277F6"
                                 unfillColor="#FFFFFF"
                                 text="개인정보 수집 동의서"
                                 textStyle={[fontSize.size16, fontColor.hex_333, font.regular, text.decoration_underline]}
                                 iconStyle={{ borderColor: "#5277F6", borderRadius:0,}}
                                 onPress={() => {
                                    CheckBoxOnChange('privacy');
                                    if (!terms.privacy) {
                                       setModalPrivacyNotice(true);
                                    }
                                 }}
                              />
                              <Text style={[fontColor.hex_5277F6, text.decoration_underline]}>
                                 (필수)
                              </Text>
                           </View>
                           <View style={[margin.bottom_20, flex.row, flex.alignCenter]}>
                              <BouncyCheckbox
                                 size={21}
                                 isChecked={terms.mail}
                                 disableBuiltInState={true}
                                 fillColor="#5277F6"
                                 unfillColor="#FFFFFF"
                                 text="이메일 수신 동의"
                                 textStyle={[fontSize.size16, fontColor.hex_333, font.regular, text.decoration_none]}
                                 iconStyle={{ borderColor: "#5277F6", borderRadius: 0}}
                                 onPress={() => CheckBoxOnChange('mail')}
                              />
                              <Text>
                                 (선택)
                              </Text>
                           </View>
                        </View>
                     </View>
                     {/* 버튼 */}
                     <View style={[calWidth.w100, padding.vertical_10]}>
                        <TouchableOpacity 
                           disabled={btnDisabled} 
                           style={
                              btnDisabled
                              ?
                              [margin.bottom_10, button.default, button.disabled]
                              :
                              [margin.bottom_10, button.default, button.colorBlue]

                           }
                              onPress={submitSignUp}
                        >
                              <Text style={[button.txtDefault, button.txtWhite]}>회원가입</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                           style={[button.default, button.colorSilver]}
                           onPress={() => navigation.goBack()}
                        >
                           <Text style={[button.txtDefault, button.txtSilver]}>닫기</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </ScrollView>
            </ScrollKeyBoardView>
         {/* 이용약관 모달 */}
         <TermsUseModal visible={modalTermsUse} hide={setModalTermsUse}/>
         {/* 개인정보 취급방침 모달 */}
         <PrivacyNoticeModal visible={modalPrivacyNotice} hide={setModalPrivacyNotice}/>
         {/* 필수입력사항 미 입력 모달 */}
         <AlertDataModal 
            visible={alert.isOpen} 
            hide={setAlert} 
            comment={alert.comment}
            navigate={navigation.navigate}
            path={alert.path}
         />
         {/* 로딩 */}
         {loading && <Loading visible={loading}/>}
      </SafeAreaView>
   )
}