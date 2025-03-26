import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   camera: {
     flex: 1,
   },
   buttonContainer: {
     flex: 1,
     position: 'relative',
     backgroundColor: 'transparent',
     flexDirection:'column',
   },
   button: {
     flex: 0.1,
     alignSelf:'flex-end',
     alignItems:'center',
   },
   text: {
     fontSize: 18,
   //   color: 'white',
     position: 'absolute',
     left: '8%',
     bottom: 35,
   },
   picture: {
      fontSize:13,
      width:70,
      height:70,
      borderRadius:100,
      position: 'absolute',
      bottom:20,
      left:'40%',
   }
});
export const loadingStyle = StyleSheet.create({
   loading:{
      position: 'absolute',
      top:0,
      right:0,
      bottom:0,
      left: 0,
      backgroundColor:'rgba(0,0,0,0.5)',
      zIndex:9999,
   }
});