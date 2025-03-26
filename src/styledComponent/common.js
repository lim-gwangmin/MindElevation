import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
import { create } from 'react-native-pixel-perfect';

// 디자인 캔버스 사이즈
const designResolution = {
   width: 480,
   height: 987,
};
// dp -> px 사이즈 변환
export const perfectSize = create(designResolution);

// andriod status bar height
export const statusBarHeight = StatusBar.currentHeight;
// andriod bottom tab area
const DimensionsWindow = Dimensions.get('window').height;
const DimensionsScreen = Dimensions.get('screen').height;
export const StatusBottomHeight = DimensionsScreen - DimensionsWindow;

// position 
export const position = StyleSheet.create({
   relative: {
      position: 'relative',
   }, 
   absolute: {
      position: 'absolute',
   }, 
});
// input
export const input = StyleSheet.create({
   default: {
      fontSize: perfectSize(16),
      letterSpacing: -0.3,
      width: '100%',
      height: perfectSize(56),
      borderWidth: perfectSize(1),
      borderStyle: 'solid',
      borderRadius: perfectSize(2),
      paddingHorizontal: perfectSize(12),
      paddingVertical: perfectSize(10),
   },
   focusBlackLine: {
      borderColor: '#000',
   },
   focusRedLine: {
      borderColor: '#F55858',
   },
   typeTxt: {
      color: '#000',
      borderColor: '#EAEAEA',
   },
   typePass: {
      color: '#000',
      borderColor: '#EAEAEA',
   },
   placeholder: {
      color:'#818181',
   }, 
});
// button 
export const button = StyleSheet.create({
   default: {
      height: perfectSize(64),
      borderWidth: perfectSize(1),
      borderStyle: 'solid',
      borderRadius: perfectSize(4),
      padding: perfectSize(10),
      alignItems: 'center',
      justifyContent: 'center',
   },
   disabled: {
      borderColor: 'rgba(24,24,24,.1)',
      backgroundColor: 'rgba(24,24,24,.2)',
   },
   colorBlue: {
      backgroundColor: '#5277F6',
      borderColor: '#5277F6',
      textAlign: 'center',
   },
   colorSilver: {
      backgroundColor: '#EFEFEF',
      borderColor: '#EFEFEF',
   }, 
   colorWhite: {
      borderColor: '#5277F6',
      backgroundColor: '#fff',
   },
   txtDefault: {
      fontSize: perfectSize(18),
   },
   txtWhite: {
      color: '#fff',
   },
   txtBlue: {
      color: '#5277F6',
   },
   txtSilver: {
      color: '#4F4F4F',
   },
});
// width setting
export const calWidth = StyleSheet.create({
   w100: {
      width: '100%',
   },
   w50: {
      width: '50%',
   },
});
// padding
export const padding = StyleSheet.create({
   horizontal_5: {
      paddingHorizontal: perfectSize(5),
   },
   horizontal_10: {
      paddingHorizontal: perfectSize(10),
   },
   horizontal_15: {
      paddingHorizontal: perfectSize(15),
   },
   horizontal_20: {
      paddingHorizontal: perfectSize(20),
   },
   horizontal_25: {
      paddingHorizontal: perfectSize(25),
   },
   horizontal_30: {
      paddingHorizontal: perfectSize(30),
   },
   horizontal_35: {
      paddingHorizontal: perfectSize(35),
   },
   horizontal_40: {
      paddingHorizontal: perfectSize(40),
   },
   horizontal_45: {
      paddingHorizontal: perfectSize(45),
   },
   horizontal_50: {
      paddingHorizontal: perfectSize(50),
   },
   left_5: {
      paddingLeft: perfectSize(5),
   },
   left_10: {
      paddingLeft: perfectSize(10),
   },
   left_15: {
      paddingLeft: perfectSize(15),
   },
   left_20: {
      paddingLeft: perfectSize(20),
   },
   left_25: {
      paddingLeft: perfectSize(25),
   },
   left_30: {
      paddingLeft: perfectSize(30),
   },
   left_35: {
      paddingLeft: perfectSize(35),
   },
   left_40: {
      paddingLeft: perfectSize(40),
   },
   right_5: {
      paddingRight: perfectSize(5),
   },
   right_10: {
      paddingRight: perfectSize(10),
   },
   right_15: {
      paddingRight: perfectSize(15),
   },
   right_20: {
      paddingRight: perfectSize(20),
   },
   right_25: {
      paddingRight: perfectSize(25),
   },
   right_30: {
      paddingRight: perfectSize(30),
   },
   right_35: {
      paddingRight: perfectSize(35),
   },
   right_40: {
      paddingRight: perfectSize(40),
   },
   vertical_5: {
      paddingVertical: perfectSize(5),
   },
   vertical_10: {
      paddingVertical: perfectSize(10),
   },
   vertical_15: {
      paddingVertical: perfectSize(15),
   },
   vertical_20: {
      paddingVertical: perfectSize(20),
   },
   vertical_25: {
      paddingVertical: perfectSize(25),
   },
   vertical_30: {
      paddingVertical: perfectSize(30),
   },
   vertical_35: {
      paddingVertical: perfectSize(35),
   },
   vertical_40: {
      paddingVertical: perfectSize(40),
   },
   hvertical45: {
      paddingVertical: perfectSize(45),
   },
   vertical_50: {
      paddingVertical: perfectSize(50),
   },
   top_5: {
      paddingTop: perfectSize(5),
   },
   top_10: {
      paddingTop: perfectSize(10),
   },
   top_15: {
      paddingTop: perfectSize(15),
   },
   top_20: {
      paddingTop: perfectSize(20),
   },
   top_25: {
      paddingTop: perfectSize(25),
   },
   top_30: {
      paddingTop: perfectSize(30),
   },
   top_35: {
      paddingTop: perfectSize(35),
   },
   top_40: {
      paddingTop: perfectSize(40),
   },
   bottom_0: {
      paddingBottom: 0,
   },
   bottom_5: {
      paddingBottom: perfectSize(5),
   },
   bottom_10: {
      paddingBottom: perfectSize(10),
   },
   bottom_15: {
      paddingBottom: perfectSize(15),
   },
   bottom_20: {
      paddingBottom: perfectSize(20),
   },
   bottom_25: {
      paddingBottom: perfectSize(25),
   },
   bottom_30: {
      paddingBottom: perfectSize(30),
   },
   bottom_35: {
      paddingBottom: perfectSize(35),
   },
   bottom_40: {
      paddingBottom: perfectSize(40),
   },
});
// margin
export const margin = StyleSheet.create({
   horizontal_5: {
      marginHorizontal: perfectSize(5),
   },
   horizontal_10: {
      marginHorizontal: perfectSize(10),
   },
   horizontal_15: {
      marginHorizontal: perfectSize(15),
   },
   horizontal_20: {
      marginHorizontal: perfectSize(20),
   },
   horizontal_25: {
      marginHorizontal: perfectSize(25),
   },
   horizontal_30: {
      marginHorizontal: perfectSize(30),
   },
   horizontal_35: {
      marginHorizontal: perfectSize(35),
   },
   horizontal_40: {
      marginHorizontal: perfectSize(40),
   },
   horizontal_45: {
      marginHorizontal: perfectSize(45),
   },
   horizontal_50: {
      marginHorizontal: perfectSize(50),
   },
   left_5: {
      marginLeft: perfectSize(5),
   },
   left_10: {
      marginLeft: perfectSize(10),
   },
   left_15: {
      marginLeft: perfectSize(15),
   },
   left_20: {
      marginLeft: perfectSize(20),
   },
   left_25: {
      marginLeft: perfectSize(25),
   },
   left_30: {
      marginLeft: perfectSize(30),
   },
   left_35: {
      marginLeft: perfectSize(35),
   },
   left_40: {
      marginLeft: perfectSize(40),
   },
   right_5: {
      marginRight: perfectSize(5),
   },
   right_10: {
      marginRight: perfectSize(10),
   },
   right_15: {
      marginRight: perfectSize(15),
   },
   right_20: {
      marginRight: perfectSize(20),
   },
   right_25: {
      marginRight: perfectSize(25),
   },
   right_30: {
      marginRight: perfectSize(30),
   },
   right_35: {
      marginRight: perfectSize(35),
   },
   right_40: {
      marginRight: perfectSize(40),
   },
   vertical_5: {
      marginVertical: perfectSize(5),
   },
   vertical_10: {
      marginVertical: perfectSize(10),
   },
   vertical_15: {
      marginVertical: perfectSize(15),
   },
   vertical_20: {
      marginVertical: perfectSize(20),
   },
   vertical_25: {
      marginVertical: perfectSize(25),
   },
   vertical_30: {
      marginVertical: perfectSize(30),
   },
   vertical_35: {
      marginVertical: perfectSize(35),
   },
   vertical_40: {
      marginVertical: perfectSize(40),
   },
   hvertical45: {
      marginVertical: perfectSize(45),
   },
   vertical_50: {
      marginVertical: perfectSize(50),
   },
   top_5: {
      marginTop: perfectSize(5),
   },
   top_10: {
      marginTop: perfectSize(10),
   },
   top_15: {
      marginTop: perfectSize(15),
   },
   top_20: {
      marginTop: perfectSize(20),
   },
   top_25: {
      marginTop: perfectSize(25),
   },
   top_30: {
      marginTop: perfectSize(30),
   },
   top_35: {
      marginTop: perfectSize(35),
   },
   top_40: {
      marginTop: perfectSize(40),
   },
   top_50: {
      marginTop: perfectSize(50),
   },
   bottom_5: {
      marginBottom: perfectSize(5),
   },
   bottom_10: {
      marginBottom: perfectSize(10),
   },
   bottom_15: {
      marginBottom: perfectSize(15),
   },
   bottom_20: {
      marginBottom: perfectSize(20),
   },
   bottom_25: {
      marginBottom: perfectSize(25),
   },
   bottom_30: {
      marginBottom: perfectSize(30),
   },
   bottom_35: {
      marginBottom: perfectSize(35),
   },
   bottom_40: {
      marginBottom: perfectSize(40),
   },
   bottom_45: {
      marginBottom: perfectSize(45),
   },
   bottom_50: {
      marginBottom: perfectSize(50),
   },
});
//font size
export const fontSize = StyleSheet.create({
   size13: {
      fontSize: perfectSize(13),
   },
   size14: {
      fontSize: perfectSize(14),
   },
   size16: {
      fontSize: perfectSize(16),
   },
   size17: {
      fontSize: perfectSize(17),
   },
   size18: {
      fontSize: perfectSize(18),
   },
   size19: {
      fontSize: perfectSize(19),
   },
   size20: {
      fontSize: perfectSize(20),
   },
   size22: {
      fontSize: perfectSize(22),
   },
   size24: {
      fontSize: perfectSize(24),
   },
   size32 : {
      fontSize: perfectSize(32),
   }, 
   size36 : {
      fontSize: perfectSize(36),
   }, 
});
//font color
export const fontColor = StyleSheet.create({
   hex_333: {
      color: '#333',
   },
   hex_000: {
      color: '#000',
   }, 
   hex_fff: {
      color: '#fff',
   }, 
   hex_818181: {
      color: '#818181',
   },
   hex_5277F6: {
      color: '#5277F6',
   },
   hex_C4C4C4: {
      color: '#C4C4C4',
   },
   hex_F55858: {
      color: '#F55858',
   },
   hex_DC4A33: {
      color: '#DC4A33',
   }
});
// line height 
export const lineHeight = StyleSheet.create({
   area_25: {
      lineHeight:  perfectSize(25),
   },
   area_36: {
      lineHeight:  perfectSize(36),
   },
});
// list style 
export const listStyle = StyleSheet.create({
   dotWrapper: {
      marginBottom: perfectSize(15),
      lineHeight: perfectSize(23),
   },
   dot: {
      position: 'absolute',
      left: perfectSize(6),
      top: perfectSize(-1),
   },
   bigDot: {
      position: 'absolute',
      left: perfectSize(0),
      top: perfectSize(-11),
   },

})
// text align
export const text = StyleSheet.create({
   align_left: {
      textAlign: 'left',
   },
   align_center: {
      textAlign: 'center',
   },
   align_right: {
      textAlign: 'right',
   },
   decoration_none : {
      textDecorationLine: 'none',
   },
   decoration_underline: {
      textDecorationLine: 'underline',
   },
   decoration_solid : {
      textDecorationStyle: 'solid',
   },
});
// loading
export const loadingStyle = StyleSheet.create({
   fullView:{
      position: 'absolute',
      width:'100%',
      height:'100%',
      top:0,
      right:0,
      bottom:0,
      left: 0,
      backgroundColor:'rgba(0,0,0,1)',
      zIndex:9999,
   },
   logo: {
      width: perfectSize(250),
      height: perfectSize(41),
   },
   centerView: {
      position: 'absolute',
      width:'100%',
      height:'100%',
   },
})
// select dropDown
export const dropDown = StyleSheet.create({
   boxContainer: {
      width: perfectSize(145),
      height:perfectSize(40),
      padding:0,
      borderColor: '#EAEAEA',
      borderRadius:2,
      position: 'relative',
      zIndex: 10,
      elevation: 10,
   },
   labelContainer: {
      width: perfectSize(145),
      borderRadius:2,
      borderColor: '#EAEAEA',
      position: 'absolute',
      zIndex: 10,
      elevation: 10,
   },
   labelStyle: {
   }, 
});
// photoShoot button
export const NavBtn = StyleSheet.create({
   photoShoot: {
      position: 'absolute',
      right: perfectSize(20),
      bottom: perfectSize(20),
      width: perfectSize(72),
      height: perfectSize(72),
      borderRadius:80,
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
   }, 
});
// image size
export const imageSize = StyleSheet.create({
   movreBtnWrapper: {
      width:perfectSize(25),
      height:'100%',
      alignItems:'flex-end', 
      justifyContent:'center',
   },
   movreBtn: {
      width: perfectSize(4),
      height: perfectSize(18),
   },
   hamburgerBtnWrapper: {
      width:perfectSize(70),
      height:'100%',
   },
   hamburgerBtn: {
      width: perfectSize(21),
      height: perfectSize(14),
   }, 
   slideImg: {
      width: '100%',
      height: '100%',
   },
   deleteBtnWrapper: {
      width:perfectSize(70),
      height:'100%',
      alignItems:'flex-end', 
      justifyContent:'center',
   },
   deleteBtn: {
      width: perfectSize(16.5),
      height: perfectSize(21),
   },
   photoShootBtn: {
      width: perfectSize(27),
      height: perfectSize(24),
   },
   goBackWrapper: {
      width:perfectSize(70),
      height:'100%',
   }, 
   goBack: {
      width:perfectSize(11),
      height:perfectSize(17),
   }, 
   backArrowBtnWrapper: {
      width:perfectSize(70),
      height:'100%',
   },
   backArrowBtn: {
      width: perfectSize(19),
      height: perfectSize(19),
   },
   saveBtnWrapper: {
      width:perfectSize(70),
      height:'100%',
      alignItems:'flex-end', 
      justifyContent:'center',
   },
   saveBtn: {
      width: perfectSize(17),
      height: perfectSize(20),
   },
   thumnailDeleteBtn: {
      width: perfectSize(9),
      height: perfectSize(9),
   }, 
   imagePickerBtnWrapper: {
      width: perfectSize(25),
      marginHorizontal:perfectSize(12.5),
      height:'100%',
      justifyContent:'center',
   }, 
   imagePickerBtn: {
      width: perfectSize(23),
      height: perfectSize(23),
   }
});
// modal 
export const modal = StyleSheet.create({
   width_440: {
      maxWidth:perfectSize(440),
   },
   backDrop: {
      width:'100%',
      height: '100%',
      backgroundColor:'rgba(0,0,0,.5)',
   },
   container: {
      width:'90%',
      borderRadius: perfectSize(4),
      maxWidth:perfectSize(440),
      maxHeight:'70%',
   }, 
   lineHeightArea: {
      lineHeight: perfectSize(22),
   },
   hyperlinkText: {
      justifyContent:'flex-end',
      marginTop: perfectSize(-3),
      marginHorizontal:perfectSize(2),
   },
   modalWrapper: {
      width:'100%',
      zIndex:1000,
      borderRadius:0,
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'rgba(0,0,0,.25)'
   },
   modalContainer: {
      maxWidth:'100%',
      zIndex:1000,
      width:perfectSize(440),
      backgroundColor:'#fff',
   },
   modalFooter: {
      borderTopWidth: 1,
      borderStyle:'solid',
      borderColor: '#EAEAEA',
      maxWidth:'100%',
      zIndex:1000,
      width:perfectSize(440),
      backgroundColor:'#fff',
   },
   modalFooterBtnCol1: {
      paddingVertical: perfectSize(20),
      flex:1,
   },
   modalFooterBtnCol2: {
      flex:.5, 
      paddingVertical: perfectSize(20),
   },
   modalFooterRightBtn:{
      borderLeftWidth: 1,
      borderStyle:'solid',
      borderColor: '#EAEAEA',
   },
   closeBtnWrapper: {
      position:'absolute',
      width: perfectSize(32),
      height: perfectSize(32),
      right: perfectSize(20),
      top: perfectSize(20),
      zIndex:2,
   }, 
   closeBtn: {
      width: perfectSize(16),
      height: perfectSize(16),
   }, 
   imageDeleteBtnImg: {
      width: perfectSize(80),
      height: perfectSize(80),
   },
   sketchbookDeleteBtnImg: {
      width: perfectSize(26),
      height: perfectSize(24),
   },
});