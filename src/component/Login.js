import React, { useState, useEffect, useRef } from 'react';
import {  SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, Keyboard, Platform,PlatformColor, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage';
// style sheet
import { input, button, margin, fontSize, fontColor } from '../styledComponent/common';
import { background, login, flex } from '../styledComponent/layout';
// navigation path
import { navPath } from '../navigationPath/NavigationPath';
// image 
import logo from '../images/logo.png';
// icon
import { AntDesign } from '@expo/vector-icons'; 
// font
import { font } from '../../App';
// api
import { member_login } from '../route/api';
// device function 
// import { getPlatform, deviceID } from '../function/DeviceData';
import { getPlatform } from '../function/DeviceData';
// custom hook
import { useInputForm, inputField } from '../hook/CustomHooks';
// loading component
import { Loading } from '../component/Loading';
// modal component
import { AlertDataModal } from '../modal/Modal';
//component
import { fetchData } from '../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Login = ({ navigation }) => {
   const dispatch = useDispatch();
   // 비밀번호 input DOM 컨트롤
   const passwordRef = useRef();
   // 아아디 입력 폼
   const [ idForm, onIdChange, onIdFocusIn, onIdFocusOut ] = useInputForm(inputField);
   // 비밀번호 입력 폼
   const [ passwordForm, onPasswordChange, onPasswordFocusIn, onPasswordFocusOut ] = useInputForm(inputField);
   // 모달 
   const [ alert, setAlert ] = useState({isOpen: false, comment:'', path: ''});
   // loading 
   const [ loading, setLoading ] = useState(false);


   // 로그인 요청
   const submitLogin = async () => {
      // 아이폰 : I , 안드로이드 : A
      const deviceCheck = getPlatform.OS === 'ios' ? 'I' : 'A';

      // 로그인에 필요한 폼
      const form = {
         mb_id: idForm.text,
         mb_password: passwordForm.text,
         // mb_deviceid: deviceID,
         mb_devicetype: deviceCheck, // I : 아이폰,  A : 안드로이드
      }

      // API 요청
      try {
         // 로딩시작
         setLoading(true);

         // 로그인 
         await member_login(form)
            .then( async res => {
               if(res.status === 1) {
                  const token = res.data.mb_token;

                  await AsyncStorage.setItem('token', JSON.stringify(token));

                  // 가이드 다시보지않기 체크 및 설정
                  await AsyncStorage.getItem('guide')
                     .then( res => JSON.parse(res))
                     .then(res => {
                        if(res === null) {
                           AsyncStorage.setItem('guide', JSON.stringify(true));
                        } else {
                           AsyncStorage.setItem('guide', JSON.stringify(res));
                        }
                     });
                     
                  dispatch(fetchData(res.data));
               } else { 
                  setAlert({isOpen: true, comment:`${res.msg}`});
               }
            });
      } catch(err) {
         console.log(err);
      } finally {
         // 로딩 끝
         setLoading(false);
      }
   };

   return (
      <>
      <StatusBar/>
      <KeyboardAwareScrollView 
         style={[background.white]}
         extraHeight={150}
         enableOnAndroid={true}
         // enableAutomaticScroll={Platform.OS === 'ios'}
         contentContainerStyle={{ height: -90, flexGrow:1}}
         resetScrollToCoords={{ x: 0, y: 0 }}
         scrollEnabled={true} 
         enableAutomaticScroll={true}
         showsHorizontalScrollIndicator={false}
      >
         <SafeAreaView style={[flex.rowCenter, flex.fullFlex]}>
            <View style={[background.padding, flex.fullFlex, flex.colCenter,]}>
               <Image source={logo} style={login.logo}/>
               <View style={login.inputWrap}>
                  <View>
                     <TextInput
                        placeholder='아이디'
                        placeholderTextColor={fontColor.hex_818181}
                        value={idForm.text}
                        style={[input.default, input.typeTxt, login.inputs, font.regular]}
                        autoCapitalize="none"
                        spellCheck={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='next'
                        onChange={onIdChange}
                        onFocus={onIdFocusIn}
                        onBlur={onIdFocusOut}
                        onSubmitEditing={() => {
                           onIdFocusOut;
                           passwordRef.current.focus();
                        }}
                     />   
                     <TextInput
                        ref={passwordRef}
                        placeholder='비밀번호'
                        placeholderTextColor={fontColor.hex_818181}
                        value={passwordForm.text}
                        style={[input.default, input.typePass, login.inputs, font.regular]}
                        autoCapitalize="none"
                        spellCheck={false}
                        secureTextEntry={true}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='join'
                        onChange={onPasswordChange}
                        onFocus={onPasswordFocusIn}
                        onSubmitEditing={() => {
                           Keyboard.dismiss();
                           submitLogin();
                        }}
                        onBlur={onPasswordFocusOut}
                     />
                  </View>
                  <View style={login.buttonWrap}>
                     <TouchableOpacity 
                        style={[margin.bottom_10, button.default, button.colorBlue]}
                        onPress={submitLogin}
                     >
                        <Text 
                           style={[button.txtDefault, button.txtWhite]}
                           onPress={submitLogin}
                        >로그인</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={[button.default, button.colorSilver]} onPress={() => navigation.navigate(navPath.signUp)}>
                        <Text style={[button.txtDefault, button.txtSilver]}>회원가입</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={flex.rowCenter}>
                     <TouchableOpacity 
                        style={[flex.rowCenter, margin.horizontal_20]}
                        onPress={() => navigation.navigate(navPath.findId)}
                     >
                        <Text style={[font.regular, fontSize.size18, fontColor.hex_333]}>아이디 찾기</Text>
                        <AntDesign name="right" size={14} color="#333" style={margin.left_5}/>
                     </TouchableOpacity>
                     <TouchableOpacity 
                        style={[flex.rowCenter, margin.horizontal_20]}
                        onPress={() => navigation.navigate(navPath.findPassword)}
                     >
                        <Text  Text style={[font.regular, fontSize.size18, fontColor.hex_333]}>비밀번호 찾기</Text>
                        <AntDesign name="right" size={14} color="#333" style={margin.left_5}/>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         </SafeAreaView>
         {/* 모달 */}
         <AlertDataModal 
            visible={alert.isOpen}
            hide={setAlert}
            comment={alert.comment}
            navigate={navigation.navigate}
            path={alert.path}
         />
         {/* 로딩 */}
         {loading&&<Loading visible={loading}/>}
      </KeyboardAwareScrollView>
      </>
   )
}
