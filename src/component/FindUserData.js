import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, TextInput, Keyboard } from 'react-native';
// font 
import { font } from '../../App';
// navigation path
import { navPath } from '../navigationPath/NavigationPath';
//style sheet
import { background, flex } from '../styledComponent/layout';
import { input, button, padding, margin, fontSize, fontColor, text, calWidth, lineHeight } from '../styledComponent/common';
// API
import { find_ID, find_PASSWORD } from '../route/api';
// function 
import { checkEmail } from '../function/RegExp';
//custom hook
import { useInputForm, inputField } from '../hook/CustomHooks';
// modal component
import { AlertDataModal } from '../modal/Modal';
// loading component
import { Loading } from './Loading';

// 아이디 찾기 컴포넌트
export const FindId = ({ navigation }) => {
   // 이메일
   const [ { text, focus, checked }, onChange, onFocusIn, onFocusOut, onNotPassChecked, onPassChecked ] = useInputForm(inputField);
   // 경고 모달
   const [ alert, setAlert ] = useState({isOpen: false, comment:'', path:''})
   // 로딩
   const [ loading, setLoading ] = useState(false);


   // 정규식 패턴 체크
   const checkPattern = ( text , eventType ) => {
      // 이벤트 체크
      if (eventType === 'onSubmitEditing') {
         // onSubmitEditing 이벤트일때만 이메일 체크.
         if(checkEmail(text)) {  // 이메일 형식 체크
            onNotPassChecked();
            setAlert({isOpen: true, comment:'잘못된 이메일 형식입니다.'});
            return;
         };
      };


      // 빈 문자열 체크 
      if (!text) return onNotPassChecked();


      onPassChecked();
      
      // setAlert({isOpen: true, comment:'회원가입에 성공했습니다!', path:`${navPath.login}`});
   }

   // 아이디 찾기 요청
   const submitFindId = async () => {

      try{
         setLoading(true);

         await find_ID(text)
            .then(res=>{
               if(res.status === 1) {
                  setAlert({isOpen: true, comment:`${res.msg}`, path:`${navPath.login}`});
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
   const btnDisabled = checked ? false : true;

   return (
      <SafeAreaView style={[background.white, flex.fullFlex]}>
         <View style={[flex.fullFlex, background.padding]}>
            <Text style={[font.medium, fontSize.size22, fontColor.hex_000, lineHeight.area_36]}>
               아이디는 가입시 등록한{"\n"}메일 주소로 알려드립니다. 
            </Text>
            <View style={[margin.top_50, flex.fullFlex, flex.spaceBetween]}>
               <View>
                     {/* 아이디 */}
                     <View style={[margin.bottom_30, calWidth.w100]}>
                        <Text style={[font.medium, fontSize.size18, fontColor.hex_333, margin.bottom_10]}>
                           이메일
                        </Text>
                        <TextInput
                           placeholder='이메일을 입력하세요.'
                           value={text}
                           autoCapitalize="none"
                           spellCheck={false}
                           enablesReturnKeyAutomatically={true}
                           returnKeyType='done'
                           style={
                              (checked === null || checked) 
                              ?
                              // [input.default, input.focusBlackLine, font.regular]
                              [input.default, font.regular, input.typePass]
                              :
                              // [input.default, input.typeTxt, font.regular]
                              [input.default, font.regular, input.typePass,input.focusRedLine]
                           }
                           onChange={onChange}
                           onFocus={onFocusIn}
                           onBlur={() => checkPattern(text, 'onBlur')}
                           onSubmitEditing={() => {
                              checkPattern(text, 'onSubmitEditing')
                              Keyboard.dismiss();
                           }}
                           blurOnSubmit={false}
                        />
                     </View>
               </View>
               {/* 버튼 */}
               <View style={[calWidth.w100, ]}>
                  <TouchableOpacity 
                     disabled={btnDisabled}
                     style={
                        btnDisabled
                        ?
                        [button.default, button.disabled]
                        :
                        [button.default, button.colorBlue]
                     }
                     onPress={submitFindId}
                  >
                     <Text style={[button.txtDefault, button.txtWhite]}>확인</Text>
                  </TouchableOpacity>
               </View>
            </View>
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
         </View>
      </SafeAreaView>
   )
};
// 비밀번호 찾기 컴포넌트
export const FindPassword = ({ navigation }) => {
   // 이메일
   const [ { text, focus, checked }, onChange, onFocusIn, onFocusOut, onNotPassChecked, onPassChecked ] = useInputForm(inputField);
   // 경고 모달
   const [ alert, setAlert ] = useState({isOpen: false, comment:'', path:''})
   // 로딩
   const [ loading, setLoading ] = useState(false);

   // 정규식 패턴 체크
   const checkPattern = ( text , eventType ) => {

      // 이메일 형식 체크
      // 이벤트 체크
      if (eventType === 'onSubmitEditing') {
         // onSubmitEditing 이벤트일때만 이메일 체크.
         if(checkEmail(text)) {  // 이메일 형식 체크
            onNotPassChecked();
            setAlert({isOpen: true, comment:'잘못된 이메일 형식입니다.'});
            return;
         };
      };

      // 빈 문자열 체크 
      if (!text) return onNotPassChecked();


      onPassChecked();
      
      // setAlert({isOpen: true, comment:'회원가입에 성공했습니다!', path:`${navPath.login}`});
   }

   // 비밀번호 찾기 요청
   const submitFindId = async () => {

      try{
         setLoading(true);

         await find_PASSWORD(text)
            .then(res=>{
               if(res.status === 1) {
                  setAlert({isOpen: true, comment:`${res.msg}`, path:`${navPath.login}`});
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
   const btnDisabled = checked ? false : true;

   return (
      <SafeAreaView style={[background.white, flex.fullFlex]}>
      <View style={[flex.fullFlex, background.padding]}>
         <Text style={[font.medium, fontSize.size22, fontColor.hex_000, lineHeight.area_36]}>
         가입시 등록한 메일 주소로 {"\n"}임시 비밀번호를 보내드립니다.
         </Text>
         <View style={[margin.top_50, flex.fullFlex, flex.spaceBetween]}>
            <View>
                  {/* 아이디 */}
                  <View style={[margin.bottom_30, calWidth.w100]}>
                     <Text style={[font.medium, fontSize.size18, fontColor.hex_333, margin.bottom_10]}>
                        이메일
                     </Text>
                     <TextInput
                        placeholder='이메일을 입력하세요.'
                        value={text}
                        autoCapitalize="none"
                        spellCheck={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='done'
                        style={
                           (checked === null || checked) 
                           ?
                           // [input.default, input.focusBlackLine, font.regular]
                           [input.default, font.regular, input.typePass]
                           :
                           // [input.default, input.typeTxt, font.regular]
                           [input.default, font.regular, input.typePass,input.focusRedLine]
                        }
                        onChange={onChange}
                        onFocus={onFocusIn}
                        onBlur={() => checkPattern(text, 'onBlur')}
                        onSubmitEditing={() => {
                           checkPattern(text, 'onSubmitEditing')
                           Keyboard.dismiss();
                        }}
                        blurOnSubmit={false}
                     />
                  </View>
            </View>
            {/* 버튼 */}
            <View style={[calWidth.w100]}>
               <TouchableOpacity 
                  disabled={btnDisabled}
                  style={
                     btnDisabled
                     ?
                     [button.default, button.disabled]
                     :
                     [button.default, button.colorBlue]
                  }
                  onPress={submitFindId}
               >
                  <Text style={[button.txtDefault, button.txtWhite]}>확인</Text>
               </TouchableOpacity>
            </View>
         </View>
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
      </View>
   </SafeAreaView>
   )
};

