import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import Slick from 'react-native-slick';
// font
import { font } from '../../App';
// style sheet
import { fontColor, fontSize, imageSize, margin, padding } from '../styledComponent/common';
import { background, flex } from '../styledComponent/layout';
// store 
import { userSketchbookDetail, userSketchbookSlideIndex } from './StackNavigator';


const renderPagination = (index, total) => {
   return (
     <View style={[flex.colCenter, margin.vertical_20]}>
       <Text style={[font.medium, fontSize.size16, fontColor.hex_fff]}>
         <Text>{index + 1}</Text>/{total}
       </Text>
     </View>
   )
 };

const ImgSlide = ({route}) => {
   const { files } = userSketchbookDetail();
   const slideIndex = userSketchbookSlideIndex();

   return (
      <SafeAreaView style={[flex.fullFlex, flex.centerCenter, background.black]}>
         <View style={[flex.centerCenter]}>
            <View style={{flex:.9}}>
               <Slick 
                  renderPagination={renderPagination}
                  loop={false}
                  index={slideIndex}
               >
                  {
                     files 
                     &&
                     files.map((arg, index) => (
                        <View key={index} style={flex.centerCenter}>
                           <ImageBackground source={{uri:arg.sf_saveurl+arg.sf_savename}} resizeMode='cover' style={imageSize.slideImg}/>
                        </View>
                     ))
                  }
               </Slick>
            </View>
         </View>
      </SafeAreaView>
   )
}

export default ImgSlide;
