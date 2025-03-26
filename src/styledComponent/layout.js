import { StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { perfectSize, statusBarHeight } from './common';

// google status header bar 높이값이 달라 따로 분류
// const manufacturer = Platform.__constants.Manufacturer === 'Google';
const platformHeader = Platform.OS === "android";
// backgroundColor setting
export const background = StyleSheet.create({
   padding: {
      paddingVertical: perfectSize(20),
      paddingHorizontal: perfectSize(20),
   },
   white: {
      backgroundColor: '#fff',
   },
   black: {
      backgroundColor: '#191919',
   },
   hex_F55858: {
      backgroundColor: '#F55858',
   },
   hex_F8FAFB: {
      backgroundColor: '#F8FAFB',
   },
   hex_5277F6: {
      backgroundColor: '#5277F6',
   },
});
// 중앙정렬 
export const flex = StyleSheet.create({
   rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
   },
   colCenter: {
      alignItems: 'center',
   },
   safeAreaView: {
      flex: 1,
   },
   fullFlex : {
      flex: 1,
   },
   glow_1: {
      flexGrow: 1,
   },
   col_3: function () {
      let style = {
         flexGrow: 1,
         flexShrink: 1,
         height: perfectSize(133),
      }
      if (useWindowDimensions().width < 600) {
         style = {
            ...style,
            width: '30%',
            maxWidth: '30%',
            marginHorizontal: '1.5%',
            marginVertical: '1.5%',
         }
      } else {
         style = {
            ...style,
            width: '23%',
            maxWidth: '23%',
            marginHorizontal: '1%',
            marginVertical: '1%',
         }
      }
      return style;
   },
   row: {
      flexDirection: 'row',
   },
   alignCenter: {
      alignItems: 'center',
   },
   spaceBetween: {
      justifyContent: 'space-between',
   },
   flexWrap: {
      flexWrap: 'wrap',
   }, 
   centerCenter: {
      alignItems: 'center',
      justifyContent:'center',
   }
});
// 로그인 레이아웃
export const login = StyleSheet.create({
   layout: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   logo: {
      width: perfectSize(250),
      height: perfectSize(41),
      marginBottom: perfectSize(45),
   },
   inputWrap: {
      width:'100%',
      maxWidth: perfectSize(440),
      marginBottom: perfectSize(20),
   },
   inputs: {
      width: '100%',
      marginBottom: perfectSize(20),
   },
   buttonWrap: {
      marginBottom: perfectSize(115),
   },
   
});
// 회원가입 레이아웃
export const signup = StyleSheet.create({
   checkBoxWrap: {
       borderWidth: 1,
       borderRadius: 2,
       borderColor:'#EAEAEA',
   },
   checkBoxTop: {
      borderBottomWidth: 1,
      borderColor:'#EAEAEA',
   }
});
// 메뉴 레이아웃
export const menu = StyleSheet.create({
   headerSafeArea: {
      borderBottomWidth: 1, 
      borderBottomColor:'#EAEAEA', 
      borderStyle: 'solid',
   }, 
   statusArea: {
      // paddingTop: platformHeader ? statusBarHeight : 0,
      paddingTop: 0,
   },
   header: {
   //   height: platformHeader ? perfectSize(71) + statusBarHeight : perfectSize(71),
      height: perfectSize(71),
   },
   items: {
      borderBottomWidth: perfectSize(1),
      borderColor: '#F5F5F5',
      borderStyle: 'solid',
   },
   headerTitle: {
      position: 'absolute',
      left: 0,
      right: 0,
      // top: platformHeader ? perfectSize(25) + statusBarHeight : perfectSize(25),
      top: perfectSize(27),
      zIndex: -1,
   }
});
// 카메라 레이아웃
export const cameraStyle = StyleSheet.create({
   bottomArea : {
      paddingVertical: perfectSize(20),
      paddingHorizontal: perfectSize(15),
   }, 
   ThumnailWrap: {
      position: 'relative',
      marginHorizontal: perfectSize(5),
   },
   ThumnailImg: {
      width: perfectSize(90),
      height: perfectSize(90),
   },
   ThumnailArea: {
      height: perfectSize(90),
   },
   delBtn: {
      position: 'absolute',
      width: perfectSize(24),
      height: perfectSize(24),
      right: perfectSize(4),
      top: perfectSize(4),
      backgroundColor: '#F55858',
      borderRadius: 24,
      zIndex:2,
   },
   photoShootBtn: {
      width: perfectSize(72),
      height: perfectSize(72),
      borderRadius: 72,
      backgroundColor: '#5277F6',
   },
});
// 리스트 아이템 레이아웃
export const listItemStyle = StyleSheet.create({
   container: {
      borderBottomWidth: perfectSize(1),
      borderBottomColor: '#F5F5F5',
      borderStyle: 'solid',
   },
   imgWrapper: {
      width: perfectSize(133),
      height: perfectSize(133),
      overflow: 'hidden',
      position:'relative',
      borderWidth:1,
      borderStyle:'solid',
      borderColor:'rgba(24,24,24,.1)',
   },
   backgroundImg: {
      width: '100%',
      height: '100%',
   },
   stateTxt: {
      width:perfectSize(100),
      textAlign:'center',
      borderRadius: perfectSize(15),
      overflow: 'hidden',
      borderWidth: perfectSize(1),
      paddingHorizontal: perfectSize(10),
      paddingVertical: perfectSize(3.5),
      borderStyle: 'solid',
   },
   addImgWrap: {
      borderColor: '#E4E4E7',
      borderWidth: perfectSize(1),
      borderStyle: 'solid',
   }, 
   addImg: {
      width: perfectSize(19),
      height: perfectSize(19),
   },
   checkedWrap: {
      borderWidth: perfectSize(2), 
      borderStyle:'solid', 
      borderColor:'#5277F6'
   },
   checkImg: {
      width:perfectSize(26),
      height:perfectSize(26),
      right: perfectSize(10),
      bottom: perfectSize(10),
   },
   // 신청대기
   stateType1: {
      borderColor:'rgba(150, 90, 227, 0.15)',
      color: '#965AE3',
      backgroundColor: 'rgba(150, 90, 227, 0.1)',
   },
   // 분석대기
   stateType2: {
      borderColor:'rgba(29, 177, 119, 0.3)',
      color: '#1DB177',
      backgroundColor: 'rgba(29, 177, 119, 0.08)',
   },
   // 분석중
   stateType3: {
      borderColor:'rgba(63, 133, 255, 0.15)',
      color: '#3F85FF',
      backgroundColor: 'rgba(63, 133, 255, 0.1)',
   },
   // 분석완료
   stateType4: {
      borderColor:'rgba(232, 150, 54, 0.3)',
      color: '#E89636',
      backgroundColor: 'rgba(232, 150, 54, 0.1)',
   },
});
// 목록 드롭박스 레이아웃
export const moreDropBox = StyleSheet.create({
   wrapper: {
      width: perfectSize(150),
      position:'absolute',
      right: perfectSize(15),
      // top:perfectSize(50),
      bottom: perfectSize(0),
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      zIndex: 100,
      elevation: platformHeader ? 100 : 0,
   },
});
// 모달
export const modalStyle = StyleSheet.create({
   guide: {
      position:'absolute',
      left:0,
      top:0,
      width:'100%',
      height:'100%',
   }, 
   closeBtn: {
      position: 'absolute',
      right: perfectSize(26),
      top: platformHeader ? perfectSize(5) + statusBarHeight : perfectSize(35),
      width: perfectSize(39),
      height: perfectSize(39),
      paddingVertical: perfectSize(10),
      paddingHorizontal: perfectSize(10),
      zIndex:100,
      elevation:3,
   }, 
   bottomArea: {
      height: perfectSize(48),
      paddingHorizontal: perfectSize(24),
      paddingTop:perfectSize(18),
   },
   dotPosition: {
      bottom: perfectSize(20),
   },
   footer: {
      borderTopColor:'#EAEAEA', 
      borderTopWidth:1, 
      borderStyle:'solid',
   },

});
// 정품인증
export const certified = StyleSheet.create({
   serialImg: {
      paddingVertical: perfectSize(50),
      paddingHorizontal: perfectSize(50), 
   }
});
// 후원명단
export const sponsorStyle = StyleSheet.create({
   txt: {
      letterSpacing: perfectSize(-0.03),
   },
   listWrapper: {
      borderWidth: perfectSize(1),
      borderStyle: 'solid',
      borderRadius: perfectSize(8),
      borderColor: '#F5F5F5',
      paddingVertical: perfectSize(25),
      paddingHorizontal: perfectSize(15),
   },
   logoSize: {
      width: perfectSize(200),
      height: perfectSize(33),
   }, 
});
// 권한설정 
export const permissionStyle = StyleSheet.create({
   iconImageWrapper: {
      width: perfectSize(50),
      height: perfectSize(50),
      borderRadius: 100,
      backgroundColor: '#5277F6',
   }, 
   iconImage: {
      width: perfectSize(23),
      height: perfectSize(21),
   },
   listDopWrapper: {
      paddingLeft: perfectSize(20),
   }, 
   listDotPosition: {

   },
});
// 스켈레톤 로더 컴포넌트
export const SkeletonStyle = StyleSheet.create({
   img: {
      width: perfectSize(133),
      height: perfectSize(133),
   },
   stateTxt: {
      width: perfectSize(100),
      height: perfectSize(20),
      marginBottom: perfectSize(5),
   },
   dataTxt: {
      width: '100%',
      height: perfectSize(20),
      marginBottom: perfectSize(5),
   },
});