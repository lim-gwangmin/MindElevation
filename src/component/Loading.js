import { View, Image, ActivityIndicator } from 'react-native';
// loading animation parts
import Spinner from 'react-native-loading-spinner-overlay';
// styled component
import { loadingStyle, margin } from '../styledComponent/common';
import { flex, background } from '../styledComponent/layout';
// image
import logo from '../images/logo.png';


export const Loading = ({ visible }) => (
   <Spinner visible={visible}  style={loadingStyle.fullView}/>
);
export const MainLoading = ({ visible }) => (
   <Spinner 
      visible={visible}
      animation='fade'
      color='#5277F6'
      overlayColor='rgba(255,255,255,0)'
      style={loadingStyle.centerView}
   />
);
export const LoginLoading = () => (
   <View style={[flex.centerCenter, flex.fullFlex, background.white]}>
      <Image source={logo} style={[loadingStyle.logo, margin.bottom_30]}/>
      <ActivityIndicator size='large' color='#5277F6'/>
   </View>
);