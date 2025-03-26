import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Image, Keyboard, ScrollView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
// custom hook
import { useInputForm, inputField } from '../hook/CustomHooks';
// navigation path
import { navPath } from '../navigationPath/NavigationPath';
// font
import { font } from '../../App';
// image
import serial from '../images/serialImg.png'
// api 
import { post_requestAnalysis } from '../route/api';
// store
import { userToken } from './StackNavigator';
// style sheet
import { background, flex, signup, certified } from '../styledComponent/layout';
import { margin, padding, fontSize, fontColor, calWidth, button, text, input, listStyle } from '../styledComponent/common';
// modal component
import { AlertDataModal, RegistrationAlertModal, RequestAnalysisModal } from '../modal/Modal';
// component
import ScrollKeyBoardView from './ScrollKeyBoardView';
import { Loading } from './Loading';


export default Certified = ({ navigation, route }) => {
   const token = userToken();
   const sb_id = route.params?.path;
   // 로딩
   const [ loading, setLoading ] = useState(false);
   // 주의 모달
   const [ modal, setModal ] = useState(true);
   // 시리얼 번호
   const [ serialNumber, onSerialChange, onSerialFocusIn, onSerialFocusOut ] = useInputForm(inputField);
   // 성별 
   const [ selectSex, setSelectSex ] = useState(0);  // 남자: 0 , 여자: 1
   // 나이
   const [ age, onAgeChange, onAgeFocusIn, onAgeFocusOut ] = useInputForm(inputField);   
   // 심리분석 요청 성공 모달
   const [ successModal, setSuccessModal ] = useState({isOpen: false, path: ''});
   // 심리분석 요청 실패 모달
   const [ failModal, setFailModal ] = useState({isOpen: false, comment:'', path: ''});
   // 심리분석 요청
   const onSubmit = async () => {
      const form = {
         mb_token: token,
         sb_id, // 스케치북 고유번호
         sl_code: serialNumber.text, //시리얼 번호
         sb_age: age.text, // 나이
         sb_gender: selectSex, // 성별
      };
      //로딩 시작
      setLoading(true);

      try {
         await post_requestAnalysis(form)
            .then(res =>  {
               if(res.status) {
                  setSuccessModal({
                     isOpen: true,
                     path: navPath.main,
                  })
               } else {
                  setFailModal({
                     isOpen:true,
                     comment: res.msg,
                  })
               }
            })
      } catch(err) {
         console.log(err);
      }

      // 로딩 끝
      setLoading(false);
   }
   
   // 버튼 활성 상태
   const btnDisabled = serialNumber.text && age.text ? false : true;

   return (
      <>
         <SafeAreaView style={[[flex.safeAreaView, background.white, flex.rowCenter]]}>
            <ScrollKeyBoardView extraHeight={200} >
               <ScrollView style={flex.fullFlex}>
                  <View style={[certified.serialImg, background.hex_F8FAFB, flex.centerCenter]}>
                        <Image source={serial} resizeMode='contain' style={{width:'100%'}}/>
                  </View>
                  <View style={[background.padding, padding.bottom_0, flex.fullFlex]}>
                     <View style={[flex.colCenter, flex.fullFlex]}>
                        {/* 시리얼번호 */}
                        <View style={[margin.bottom_30, calWidth.w100]}>
                           <Text style={[font.medium, fontSize.size18, fontColor.hex_333, margin.bottom_10]}>
                              시리얼번호
                           </Text>
                           <TextInput
                              value={serialNumber.text}
                              placeholder='시리얼 번호를 입력해 주세요.'
                              autoCapitalize="none"
                              spellCheck={false}
                              enablesReturnKeyAutomatically={true}
                              returnKeyType='done'
                              style={
                                 serialNumber.focus?
                                 [input.default, input.focusBlackLine, fontColor.hex_333,font.regular]
                                 :
                                 [input.default, input.typeTxt, fontColor.hex_333, font.regular]
                              }
                              onChange={onSerialChange}
                              onFocus={onSerialFocusIn}
                              onBlur={onSerialFocusOut}
                              onSubmitEditing={() => {
                                 onSerialFocusOut();
                                 Keyboard.dismiss();
                              }}
                              blurOnSubmit={false}
                           />
                        </View>
                        {/* 성별 */}
                        <View style={[calWidth.w100, margin.bottom_50]}>
                           <Text style={[font.medium, fontSize.size18, fontColor.hex_333, margin.bottom_20]}>
                              성별
                           </Text>
                           <View style={[flex.row]}>
                              <BouncyCheckbox
                                 size={21}
                                 isChecked={selectSex === 0 ? true : false}
                                 disableBuiltInState={true}
                                 fillColor="#5277F6"
                                 unfillColor="#FFFFFF"
                                 text="남"
                                 style={margin.right_20}
                                 textStyle={[fontSize.size18, fontColor.hex_333, font.medium, text.decoration_none, {marginLeft:-5}]}
                                 iconStyle={{ borderColor: "#5277F6", borderRadius:21}}
                                 onPress={() => setSelectSex(0)}
                              />
                              <BouncyCheckbox
                                 size={21}
                                 isChecked={selectSex === 1 ? true : false}
                                 disableBuiltInState={true}
                                 fillColor="#5277F6"
                                 unfillColor="#FFFFFF"
                                 text="여"
                                 textStyle={[fontSize.size18, fontColor.hex_333, font.medium, text.decoration_none, {marginLeft:-5}]}
                                 iconStyle={{ borderColor: "#5277F6", borderRadius:21 }}
                                 onPress={() => setSelectSex(1)}
                              />
                           </View>
                        </View>
                        {/* 나이 */}
                        <View style={[margin.bottom_30, calWidth.w100]}>
                           <Text style={[font.medium, fontSize.size18, fontColor.hex_333, margin.bottom_10]}>
                              나이
                           </Text>
                           <TextInput
                              value={age.text}
                              placeholder='나이를 입력해주세요.(숫자만 입력해주세요.)'
                              autoCapitalize="none"
                              spellCheck={false}
                              keyboardType='number-pad'
                              maxLength={3}
                              enablesReturnKeyAutomatically={true}
                              returnKeyType='done'
                              style={
                                 age.focus?
                                 [input.default, input.focusBlackLine, fontColor.hex_333, font.regular]
                                 :
                                 [input.default, input.typeTxt, fontColor.hex_333, font.regular]
                              }
                              onChange={onAgeChange}
                              onFocus={onAgeFocusIn}
                              onBlur={onAgeFocusOut}
                              onSubmitEditing={() => {
                                 onAgeFocusOut();
                                 Keyboard.dismiss();
                              }}
                           />
                        </View>
                        {/* 안내사항 */}
                        <View style={[calWidth.w100, text.align_left, margin.bottom_25]}>
                           <View style={padding.left_20}>
                              <Text style={[listStyle.dot, fontSize.size18, fontColor.hex_818181, ]}>
                                 {'\u2022'} 
                              </Text>
                              <Text style={[font.regular, fontSize.size16, fontColor.hex_818181, listStyle.dotWrapper]}>
                                 스케치북 사용설명 페이지 하단에 위치한 정품 시리얼 번호를 입력해주세요.
                              </Text>
                           </View>
                           <View style={padding.left_20}>
                              <Text style={[listStyle.dot, fontSize.size18, fontColor.hex_818181]}>
                                 {'\u2022'} 
                              </Text>
                              <Text style={[font.regular, fontSize.size16, fontColor.hex_818181, listStyle.dotWrapper]}>
                                 시리얼 코드 입력시 ‘-’는 제외하고 입력해주세요. {'\n'}
                                 예{'\u0029'} ABCD1234EFGH5678, abcd1234efgh4567{'\u0028'}대소문자 구분 안함{'\u0029'}
                              </Text>
                           </View>
                           <View style={padding.left_20}>
                              <Text style={[listStyle.dot, fontSize.size18, fontColor.hex_818181]}>
                                 {'\u2022'} 
                              </Text>
                              <Text style={[font.regular, fontSize.size16, fontColor.hex_818181, listStyle.dotWrapper]}>
                                 본 이미지 파일들은 인공지능의 분석 및 학습용으로 사용됩니다.{'\n'}
                                 {'\u0028'}개인정보는 일체 이용되지 않으며 나이, 성별 및 이미지만 사용됩니다.{'\u0029'}
                              </Text>
                           </View>
                        </View>
                     </View>
                  </View>
               </ScrollView>
               {/* 버튼 */}
               <View style={[padding.horizontal_20, padding.vertical_20, background.white, calWidth.w100]}>
                  <SafeAreaView style={[calWidth.w100, flex.row, flex.centerCenter]}>
                     <TouchableOpacity 
                        style={[button.default, button.colorSilver, flex.fullFlex, {maxWidth:'48%', marginRight:'2%'}]}
                        onPress={() => navigation.goBack()}
                     >
                        <Text style={[button.txtDefault, button.txtSilver]}>취소</Text>
                     </TouchableOpacity>
                     <TouchableOpacity 
                        disabled={btnDisabled}
                        style={[
                           button.default, flex.fullFlex, {maxWidth:'48%', marginLeft:'2%'},
                           btnDisabled ? button.colorSilver : button.colorBlue
                        ]}
                        onPress={onSubmit}
                     >
                        <Text style={[
                              button.txtDefault, 
                              btnDisabled ? button.txtSilver : button.txtWhite
                           ]}>동의 및 정품인증신청</Text>
                     </TouchableOpacity>
                  </SafeAreaView>
               </View>
               <RegistrationAlertModal visible={modal} hide={setModal}/>
            </ScrollKeyBoardView>
            {loading&&<Loading visible={loading} hide={setLoading}/>}
            {/* 심리분석 요청 성공 모달 */}
            <RequestAnalysisModal
               visible={successModal.isOpen}
               hide={setSuccessModal}
               navigate={navigation.navigate}
               path={successModal.path}
            />
            {/* 심리분석 요청 실패 모달 */}
            <AlertDataModal
               visible={failModal.isOpen}
               hide={setFailModal}
               comment={failModal.comment}
               navigate={navigation.navigate}
               path={failModal.path}
            />
         </SafeAreaView>
      </>
   )
};