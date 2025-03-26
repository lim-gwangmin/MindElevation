import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Button, Text, TouchableOpacity, Switch, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// react query
import { useQuery } from 'react-query';
// icon
import { AntDesign } from '@expo/vector-icons'; 
// style sheet
import { background, flex, menu } from '../styledComponent/layout';
import { fontSize, fontColor, padding, margin } from '../styledComponent/common';
// api
import { reset_sketchBook, leave_member } from '../route/api';
// font
import { font } from '../../App';
// navigation path 
import { navPath } from '../navigationPath/NavigationPath';
// action
import { removeData, resetSketchbook } from '../store/userSlice';
// redux
import { useDispatch } from 'react-redux';
// store
import { userData, userToken } from './StackNavigator';
import { Loading } from './Loading';
import { AlertDataModal, LogOutModal, MemberLeaveModal, ResetSketchBookModal } from '../modal/Modal';

export default Menu = ({ navigation, setGuideModal }) => {
   const token = userToken();
   const dispatch = useDispatch();
   // switch 
   const [ alertSetting, setAlertSetting ] = useState(false);
   // 초기화 모달
   const [ resetModal, setResetModal ] = useState(false);
   // 스케치북 초기화 성공 및 실패 모달
   const [ resetStateModal, setResetStateModal ] = useState({isOpen:false, comment:'',})
   // 회원탈퇴 주의 모달
   const [ leaveModal, setLeaveModal ] = useState({isOpen:false, title:'', comment:'', type:false});
   // 로그아웃 모달 
   const [ logOutModal, setLogOutModal ] = useState(false);
   // 로딩
   const [ loading, setLoading ] = useState(false);

   // 스케치북 초기화
   const Reset_Sketchbook = useQuery('resetSketchBook', () => (
      reset_sketchBook(token).then(res => {
         if(res.status) {
            dispatch(resetSketchbook());
            setResetStateModal({isOpen:true, comment:res.msg});
         } else {
            setResetStateModal({isOpen:true, comment:res.msg});
         }
      })
   ), {enabled:false});

   //회원탈퇴
   const memberLeave = useQuery('memberLeave', () => (
      leave_member({
         mb_token: token,
      }).then(res => {
         if(res.status) {
            setLeaveModal({isOpen:true, title:'안내', comment:res.msg, type:true});
            AsyncStorage.removeItem('token');
            AsyncStorage.removeItem('guid');
         } else {
            setResetStateModal({isOpen:true, comment: res.msg});
         }
      })
   ),{enabled:false});

   const toggleSwitch = () => {
      setAlertSetting(previousState => !previousState);
   };

   // 로그아웃
   const logOut = async () => {
      // 로딩시작
      setLoading(true);

      try{
         await AsyncStorage.removeItem('token');
         await dispatch(removeData());
      } catch(err) {
         console.log(err)
      }

      // 로딩 끝
      setLoading(false);
   };

   return (
      <>
         <SafeAreaView style={[background.white, flex.safeAreaView, flex.spaceBetween]}>
            {/* user 이름, 이일*/}
            <ScrollView>
               <View style={{borderBottomWidth:4, borderBottomColor:'#F5F5F5', borderStyle:'solid'}}>
                  <TouchableOpacity 
                     style={[flex.row, flex.alignCenter, flex.spaceBetween, padding.horizontal_20, padding.vertical_25]}
                     onPress={() => navigation.navigate(navPath.userDataSetting)}
                  >
                     <View>
                        <Text style={[font.Bold, fontColor.hex_333, margin.bottom_5]}>
                           {/* 이름 */}
                           {userData().mb_name}
                        </Text>
                        <Text style={[font.regular, fontColor.hex_333]}>
                           {/* 이메일 */}
                           {userData().mb_email}
                        </Text>
                     </View>
                     <AntDesign name="right" size={17} color="#333" style={margin.left_5}/>
                  </TouchableOpacity>
               </View>
               {/* 바로가기 / 스케치북 스토어 */}
               <View style={[padding.top_30, padding.horizontal_20, menu.items]}>
                  <Text style={[fontSize.size14, font.medium, fontColor.hex_818181]}>
                     바로가기
                  </Text>
                  <TouchableOpacity 
                     style={[padding.top_30, padding.bottom_20]}
                     disabled={true}
                     onPress={() => navigation.navigate(navPath.certified)}
                  >
                     <Text 
                        style={[font.regular, fontColor.hex_333]}
                     >
                        스케치북 스토어(링크없음)
                     </Text>
                  </TouchableOpacity>
               </View>
               {/* 환경설정 / 알림설정 */}
               {/* <View style={[padding.top_30, padding.horizontal_20, menu.items]}> */}
               <View style={[padding.top_30, padding.bottom_10, padding.horizontal_20,]}>
                  <Text style={[fontSize.size14, font.medium, fontColor.hex_818181]}>
                     환경설정
                  </Text>
                  {/* <View style={[padding.top_30, padding.bottom_20, flex.row, flex.alignCenter, flex.spaceBetween]}>
                     <Text style={[font.regular, fontColor.hex_333]}>
                        알림설정
                     </Text>
                     <Switch
                        trackColor={{ false: "#767577", true: "#5277F6" }}
                        thumbColor="#fff"
                        ios_backgroundColor="#767577"
                        onValueChange={toggleSwitch}
                        value={alertSetting}
                     />
                  </View> */}
               </View>
               {/* 환경설정 / 스케치북 초기화 */}
               <View style={menu.items}>
                  <TouchableOpacity 
                     style={[padding.vertical_20, padding.horizontal_20 ]}
                     onPress={() => setResetModal(true)}
                  >
                     <Text style={[font.regular, fontColor.hex_333]}>
                        스케치북 초기화
                     </Text>
               </TouchableOpacity>
               </View>
               {/* 환경설정 / 튜토리얼 보기 */} 
               <View style={menu.items}>
                  <TouchableOpacity 
                     onPress={() => setGuideModal({isOpen:true, type:'menuOpen'})}
                     style={[padding.vertical_20, padding.horizontal_20 ]}
                  >
                     <Text style={[font.regular, fontColor.hex_333]}>
                        튜토리얼 보기
                     </Text>
                  </TouchableOpacity>
               </View>
               {/* 환경설정 / 후원명단 */}
               <View style={menu.items}>
                  <TouchableOpacity 
                     style={[padding.vertical_20, padding.horizontal_20 ]}
                     onPress={() => navigation.navigate(navPath.sponsorList)}
                  >
                     <Text style={[font.regular, fontColor.hex_333]}>
                        후원명단
                     </Text>
                  </TouchableOpacity>
               </View>
               {/* 환경설정 / 로그아웃 보기 */}
               <View style={menu.items}>
                  <TouchableOpacity 
                     style={[padding.vertical_20, padding.horizontal_20 ]}
                     onPress={() => setLogOutModal(true)}
                  >
                     <Text style={[font.regular, fontColor.hex_333]}>
                        로그아웃
                     </Text>
                  </TouchableOpacity>
               </View>
               {/* 환경설정 / 회원탈퇴 보기 */}
               <View style={menu.items}>
                  <TouchableOpacity 
                     style={[padding.vertical_20, padding.horizontal_20 ]}
                     onPress={() => setLeaveModal({isOpen:true, title:'주의', comment:'회원탈퇴 하시겠습니까? ', type:false}) }
                  >
                     <Text style={[font.regular, fontColor.hex_333]}>
                        회원탈퇴
                     </Text>
                  </TouchableOpacity>
               </View>
            </ScrollView>
            <View style={[flex.alignCenter, padding.vertical_10]}>
               <Text style={[font.regular, fontColor.hex_333]}>
                  현재 버전 1.1.2
               </Text>
            </View>
            {/* 스케치북 초기화 확인 모달 */}
            <ResetSketchBookModal
               visible={resetModal}
               hide={setResetModal}
               onSubmit={Reset_Sketchbook.refetch}
            />
            {/* 스케치북 초기화 요청 결과 모달 */}
            <AlertDataModal
               visible={resetStateModal.isOpen}
               hide={setResetStateModal}
               comment={resetStateModal.comment}
            />
            {/* 회원탈퇴 모달 */}
            <MemberLeaveModal
               visible={leaveModal.isOpen}
               hide={setLeaveModal}
               title={leaveModal.title}
               comment={leaveModal.comment}
               logout={logOut}
               onSubmit={memberLeave.refetch}
               type={leaveModal.type}
            />
            {/* 로그아웃 확인 모달 */}
            <LogOutModal
               visible={logOutModal}
               hide={setLogOutModal}
               onSubmit={logOut}
            />
         </SafeAreaView>
         {/* 로딩 */}
         {
            resetSketchbook.isLoading || loading
            &&
            <Loading visible={resetSketchbook.isLoading || loading}/>
         }
      </>
   )
}

