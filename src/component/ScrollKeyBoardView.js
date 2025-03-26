import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// style sheet
import { background } from '../styledComponent/layout';

export default ScrollKeyBoardView = ({ extraHeight, children }) => {
   return (
      <KeyboardAwareScrollView
         style={background.white}
         extraHeight={extraHeight}
         enableOnAndroid={true}
         // enableAutomaticScroll={Platform.OS === 'ios'}
         contentContainerStyle={{ height: -90, flexGrow:1}}
         // resetScrollToCoords={{ x: 0, y: 0 }}
         scrollEnabled={true} 
         enableAutomaticScroll={true}
         showsHorizontalScrollIndicator={false}
      >
         {children}
      </KeyboardAwareScrollView>
   )  
}