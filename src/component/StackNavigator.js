import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
// redux
import { useSelector, useDispatch } from "react-redux";
import { getToken, fetchData, filterSketchbook, removeData } from "../store/userSlice";
// navigation path
import { navPath } from '../navigationPath/NavigationPath';
// font
import { font } from '../../App';
// img
import menuBtn from '../images/menuBtn.png';
// api
import { member_login } from '../route/api';
// style sheet
import { background, flex, menu } from '../styledComponent/layout';
import { fontSize, fontColor, padding, text, imageSize } from '../styledComponent/common';
// device function 
// import { getPlatform, deviceID } from '../function/DeviceData';
import { getPlatform } from '../function/DeviceData';
// custom hook
import { useDeleteState } from '../hook/CustomHooks';
//loading component
import { Loading, LoginLoading } from './Loading';
// component
import { Main } from "./Main";
import { Login } from "./Login";
import Menu from './Menu';
import { SignUp } from "./SignUp";
import MenuHeader from "./MenuHeader";
import UserDataSetting from "./UserDataSetting";
import { CameraPictures } from "./CameraPictures";
import { ListItemDatil } from "./ListItemDetail";
import ImgSlide from "./ImgSlide";
import { FindId, FindPassword } from "./FindUserData";
import { GuideModal } from "../modal/Modal";
import Certified from "./Certified";
import SponsorList from './SponsorList';
import Permission from "./Permission";


// redux useSelector
export const userData = () => useSelector(state => state.userData); // 유저 정보
export const userToken = () => useSelector(state => state.token); // 토큰 값
export const userSketchbookList = () => useSelector(state => state.sketchbook.list); // 스케치북 리스트
export const userSketchbookDetail = () => useSelector(state => state.sketchbook.detail); 
export const userSketchbookSlideIndex = () => useSelector( state => state.sketchbook.slideIndex); // 스케치북 슬라이드 초기 인덱스값

// react navigation 호출
const Stack = createStackNavigator();


// main page Header
const Header = ({ navigator, title }) => (
   <SafeAreaView style={[background.white, menu.headerSafeArea]}>
      <View style={[flex.spaceBetween, menu.statusArea, menu.header, flex.row, flex.alignCenter]}>
         <TouchableOpacity 
            style={[flex.row, flex.alignCenter, padding.horizontal_20, imageSize.hamburgerBtnWrapper]} 
            onPress={() => navigator.navigate(navPath.menu)}
         >
            <Image source={menuBtn} style={imageSize.hamburgerBtn}/>
         </TouchableOpacity>
         <Text 
            style={[fontSize.size18, fontColor.hex_000, font.regular, text.align_center, flex.glow_1, menu.headerTitle]}>
               {title}
         </Text>
      </View>
   </SafeAreaView>
);
// 로그인 전
const BeforeLogin = () => (
   <Stack.Navigator>
      {/* 로그인 */}
      <Stack.Screen 
         name={navPath.login}
         // name='login'
         component={Login} 
         options={{
            headerShown:false,
         }}
      />
      {/* 회원가입 */}
      <Stack.Screen 
         name={navPath.signUp}
         options={{
            headerShown:false,
         }}
      >
         {props => <SignUp  navigation={props.navigation}/>}
      </Stack.Screen>
      {/* 아이디 찾기 */}
      <Stack.Screen
         name={navPath.findId}
         component={FindId}
         options={{
            title:'아이디 찾기',
            header: props => <MenuHeader navigator={props.navigation} title={props.options.title} routeName={props.route.name}/>,
         }}
      />
      {/* 비밀번호 찾기 */}
      <Stack.Screen
         name={navPath.findPassword}
         component={FindPassword}
         options={{
            title:'비밀번호 찾기',
            header: props => <MenuHeader navigator={props.navigation} title={props.options.title} routeName={props.route.name}/>,
         }}
      />
   </Stack.Navigator>
);
// 로그인 후
const AfterLogin = ({imgDelete, onPressDelete, onPressCancel }) => {
   // 가이드 모달 
   const [ guideModal, setGuideModal ] = useState({isOpen:false, type:''});

   useEffect(() => {
      checkUser();
   },[]);

   // 가이드 체크
   const checkUser = async () => {
      try{
         // 가이드 다시보지않기 값 확인
         await AsyncStorage.getItem('guide')
            .then( res => JSON.parse(res))
            .then( res => {
               setGuideModal({isOpen:res, type:'first'});
            });
      } catch(err) {
         console.log(err)
      };
   };
   return (
      <>
         <Stack.Navigator >
            {/* 메인 페이지 */}
            <Stack.Screen 
               name={navPath.main}
               component={Main} 
               options={{
                  headerTitle: '마음읽는 스케치북',
                  header: props => <Header navigator={props.navigation} title={props.options.headerTitle}/>
               }}
            />
            {/* 메뉴 */}
            <Stack.Screen 
               name={navPath.menu}
               options={{
                  headerStyle: {backgroundColor: '#fff'},
                  title: '',
                  header: props => <MenuHeader navigator={props.navigation} title={props.options.title}/>,
               }}
            >
               {props => <Menu navigation={props.navigation} setGuideModal={setGuideModal}/>}
            </Stack.Screen>
            {/* 정보수정 */}
            <Stack.Screen
               name={navPath.userDataSetting}
               component={UserDataSetting}
               options={{
                  headerStyle: {backgroundColor: '#fff'},
                  title: '정보수정',
                  header: props => <MenuHeader navigator={props.navigation} title={props.options.title}/>,
               }}
            />
            {/* 이미지 상세보기 */}
            <Stack.Screen 
               name={navPath.imgSlide}
               component={ImgSlide} 
               options={{
                  title:'스케치북 이미지',
                  header: props => <MenuHeader navigator={props.navigation} title={props.options.title} routeName={props.route.name} onPressCancel={onPressCancel}/>,
               }}
            />
            {/* 스케치북 미리보기 */}
            <Stack.Screen
               name={navPath.detailPage}
               // component={ListItemDatil}
               options={{
                  title:'스케치북 미리보기',
                  header: props => (
                     <MenuHeader
                        navigator={props.navigation}
                        title={props.options.title}
                        routeName={props.route.name}
                        imgDelete={imgDelete}
                        onPressDelete={onPressDelete}
                        onPressCancel={onPressCancel}
                     />
                  )
               }}
            >
               { props => <ListItemDatil navigation={props.navigation} imgDelete={imgDelete} onPressDelete={onPressDelete} onPressCancel={onPressCancel} route={props.route}/> }
            </Stack.Screen>
            {/* 카메라 모듈 */}
            <Stack.Screen 
               name={navPath.photoShoot}
               component={CameraPictures} 
               options={{
                  headerShown:false,
               }}
            />
            {/* 정품인증 */}
            <Stack.Screen 
               name={navPath.certified}
               component={Certified} 
               options={{
                  title:'정품인증',
                  header: props => <MenuHeader navigator={props.navigation} title={props.options.title} routeName={props.route.name}/>,
               }}
            />
            {/* 후원자 명단 */}
            <Stack.Screen 
               name={navPath.sponsorList}
               component={SponsorList} 
               options={{
                  title:'후원명단',
                  header: props => <MenuHeader navigator={props.navigation} title={props.options.title} routeName={props.route}/>,
               }}
            />
            {/* 권한 설정 */}
            <Stack.Screen
               name={navPath.permission}
               component={Permission} 
               options={{
                  headerShown:false,
                  //  header: props => <MenuHeader navigator={props.navigation} routeName={props.route}/>,
               }}
            />
         </Stack.Navigator>
         {/* 튜토리얼 모달 */}
         {guideModal && <GuideModal visible={guideModal} hide={setGuideModal}/>}
      </>
)};


export const StackNavigator = () => {
   const dispatch = useDispatch();
   const userLoginChecked = useSelector(state => state.loginCheck);
   // 이미지 삭제
   const [ imgDelete, onPressDelete, onPressCancel ] = useDeleteState(false);
   // 로딩
   const [ isLoading, setLoading ] = useState(false);

   useEffect(() => {
      checkUser();
   },[]);

   // token 값 체크
   const checkUser = async () => {

      // 로딩 시작
      setLoading(true);

      // 아이폰 : I , 안드로이드 : A
      const deviceCheck = getPlatform.OS === 'ios' ? 'I' : 'A';
      
      let form = {
         mb_token: '',
         // mb_deviceid: deviceID,
         mb_devicetype: deviceCheck, // I : 아이폰,  A : 안드로이드
      };

      try{

         // 스토리지 토큰 값 확인 
         await AsyncStorage.getItem('token')
            .then( res => JSON.parse(res))
            .then( res => {
               if(res) {
                  form.mb_token = res;
                  dispatch(getToken(res));
               };
            });
         //token login
         await member_login(form)
            .then( res => {
               if(res.status === 1) {
                  dispatch(fetchData(res.data));
               } else {
                  dispatch(removeData());
               }
            }).catch(err => console.log(err,'err'));
         
      } catch(err) {
         console.log(err)
      };

      // 로딩 끝
      setLoading(false);
   };

   // 로딩
   if(isLoading) return <LoginLoading/>

   return (
      <>
         {
            userLoginChecked
            ?
            <AfterLogin
               imgDelete={imgDelete}
               onPressDelete={onPressDelete}
               onPressCancel={onPressCancel}
            />
            :
            <BeforeLogin/>
         }
      </>
   )
};
