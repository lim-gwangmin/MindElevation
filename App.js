import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, StatusBar } from '@react-navigation/native';
import { ModalPortal } from 'react-native-modals';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from 'react-query';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
//reducer
import userReducer from './src/store/userSlice';
// component
import { StackNavigator } from './src/component/StackNavigator';

// font 
export const font = {
   thin: {
      fontFamily: "SqoqaHanSansNeoThin",
   },
   light: {
      fontFamily: "SqoqaHanSansNeoLight",
   },
   regular: {
      fontFamily: "SqoqaHanSansNeoRegular",
   },
   medium: {
      fontFamily: "SqoqaHanSansNeoMedium",
   },
   Bold: {
      fontFamily: "SqoqaHanSansNeoBold",
   },
}
// react redux toolkit
const store = configureStore({reducer: userReducer});
// react query
const clientQuery = new QueryClient();

export default function App() {
   const [loaded] = useFonts({
      SqoqaHanSansNeoThin: require('./assets/fonts/SpoqaHanSansNeo-Thin.ttf'),
      SqoqaHanSansNeoLight: require('./assets/fonts/SpoqaHanSansNeo-Light.ttf'),
      SqoqaHanSansNeoRegular: require('./assets/fonts/SpoqaHanSansNeo-Regular.ttf'),
      SqoqaHanSansNeoMedium: require('./assets/fonts/SpoqaHanSansNeo-Medium.ttf'),
      SqoqaHanSansNeoBold: require('./assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
   });

   if(!loaded) {
      return null;
   }

   return (
         <Provider store={store}>
            <QueryClientProvider client={clientQuery}>
               <NavigationContainer>
                  <StackNavigator/>
                  <ModalPortal />
               </NavigationContainer>
            </QueryClientProvider>
         </Provider>
   );
}

