import React, { useState, useEffect, Fragment } from 'react';
import { Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView, Linking } from 'react-native';
// api 
import { get_sketchBookDetail } from '../route/api';
// react query
import { useQuery } from 'react-query';
// navigation path
import { navPath } from '../navigationPath/NavigationPath'; 
// redux
import { useDispatch } from 'react-redux';
// action 
import { fetchSketchbookDetail, checkSkertchbookImage, removeCheckSkertchbookImage, slideImageIndex } from '../store/userSlice';
// font
import { font } from '../../App';
// image 
import plus from '../images/plusIcon.png';
import checkIcon from '../images/imgDelCheckIcon.png';
// style sheet 
import { background, flex, listItemStyle } from '../styledComponent/layout';
import { fontSize, fontColor, padding, margin, button, position, calWidth } from '../styledComponent/common';
// store 
import { userSketchbookDetail, userToken } from './StackNavigator';
// component
import { SekletonImageComponent } from './SkeletonContent';

// 사진 리스트 컴포넌트
const ListItem = ({ navigation, imgDelete }) => {
   const dispatch = useDispatch();
   const { files } = userSketchbookDetail();
   // check value 추가
   const colStyleHook = [flex.col_3(), listItemStyle.addImgWrap];

   useEffect(() => {
      dispatch(removeCheckSkertchbookImage())
   },[]);

   return (
      <>     
         {
            files
            &&
            files.map((arg, index) => (
               <View key={index} style={colStyleHook}>
                  {
                     !imgDelete
                     ?
                     <TouchableOpacity 
                        activeOpacity={.6}
                        style={[flex.fullFlex, position.relative]}
                        onPress={() => {
                           dispatch(slideImageIndex(index));
                           navigation.navigate(navPath.imgSlide);
                        }}
                     >
                        <ImageBackground source={{uri: arg.sf_saveurl + arg.sf_savename}} resizeMode='cover' style={listItemStyle.backgroundImg}/>
                     </TouchableOpacity>
                     :
                     <TouchableOpacity 
                        activeOpacity={.6}
                        style={[
                           arg.checked && listItemStyle.checkedWrap,
                           flex.fullFlex, position.relative
                        ]}
                        onPress={() => dispatch(checkSkertchbookImage(arg.sf_no))}
                     >
                        <ImageBackground source={{uri: arg.sf_saveurl + arg.sf_savename}} resizeMode='cover' style={listItemStyle.backgroundImg}/>
                        {
                           arg.checked
                           && 
                           <Image source={checkIcon} style={[position.absolute, listItemStyle.checkImg]}/>
                        }
                     </TouchableOpacity>
                  }  
            </View>
            ))
         }
      </>
   )
};
// 사진 추가 컴포넌트
const AddItem = ({ sb_no, imgDelete, navigation }) => {
   if(!imgDelete) {
      return (
         <View style={[flex.col_3(),listItemStyle.addImgWrap]}>
            <TouchableOpacity 
               style={[flex.fullFlex, flex.centerCenter,{backgroundColor:'#fff'}]}
               onPress={() => navigation.navigate(navPath.photoShoot, { path: sb_no })}
            >
               <Image source={plus} style={listItemStyle.addImg}/>
               <Text style={[font.regular, fontSize.size16, fontColor.hex_C4C4C4, margin.top_15]}>이미지 추가</Text>
            </TouchableOpacity>
         </View>
      )
   };
   return null;
};

export const ListItemDatil = ({ navigation, imgDelete, onPressDelete, route }) => {
   const token = userToken();
   const dispatch = useDispatch();
   const { path } = route.params; // params
   const { files, sb_name, sb_no, sb_id, sb_analysis_step } = userSketchbookDetail(); // 스케치북 상세 데이터

   const { isLoading, data } = useQuery('sketchbookDetails', () => (
      get_sketchBookDetail(token, path).then(res => {
         dispatch(fetchSketchbookDetail(res.data));
         return res.data;
      })
   ));

   /**
    * ! 스케치북 미리보기 컴포넌트 진입 시, 이전 스케치북 이미지들이 남아 있어 깜빡거리는 이슈
    * ? 스케치북 미리보기 컴포넌트를 벗어나면 store에 있는 기존 이미지들 제거
    **/ 
   useEffect(() => {
      return () => dispatch(fetchSketchbookDetail({files:[]})); 
   },[])

   // 스케치북 분석 요청 상태에 따른 텍스트 변환   
   const { disabledText, disabledValue, result } = ((status) => {
      switch(status) {
         case '0':
            return {disabledText: '심리분석 신청', disabledValue: false, result: true};
         case '1':
            return {disabledText: '심리분석 신청', disabledValue: true, result: true};
         case '2':
            return {disabledText: '분석 중', disabledValue: true, result: true};
         case '3':
            return {disabledText: '분석 완료', disabledValue: true, reuslt: false};
         default:
            return {disabledText: '심리분석 신청',  disabledValue: false, result: true};
      };
   })(sb_analysis_step);

   // 로딩 
   if(isLoading) return <SekletonImageComponent/>

   return (
      <>
         <SafeAreaView style={[flex.fullFlex, background.hex_F8FAFB]}>
            <View style={[padding.vertical_20, flex.fullFlex]}>
               <View style={[flex.row, flex.spaceBetween, flex.alignCenter, padding.horizontal_20, margin.bottom_20]}>
                  <Text style={[font.regular, fontSize.size16, fontColor.hex_818181]}>총 {files.length}건</Text>
                  <Text style={[font.regular, fontSize.size16, fontColor.hex_818181]}> 
                     {sb_name}
                  </Text>
               </View>
               <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={[flex.row, flex.flexWrap, padding.horizontal_20]}>
                     <ListItem 
                        navigation={navigation} 
                        imgDelete={imgDelete} 
                        onPressDelete={onPressDelete}
                     />
                     <AddItem 
                        imgDelete={imgDelete} 
                        navigation={navigation}
                        sb_no={sb_no}
                     />
                  </View>
               </ScrollView>
            </View>
         </SafeAreaView>
         {
            !imgDelete
            &&
            <SafeAreaView style={[padding.vertical_20, background.hex_F8FAFB, calWidth.w100]}>
               <View style={[calWidth.w100,flex.row, padding.horizontal_20, flex.centerCenter]}>
                  <TouchableOpacity 
                     disabled={disabledValue}
                     style={[
                        button.default, flex.fullFlex, {maxWidth:'48%', marginRight:'2%'},
                        disabledValue ? button.disabled : button.colorBlue
                     ]}
                     onPress={() => navigation.navigate(navPath.certified, { path: sb_no })}
                  >
                     <Text style={[font.medium, fontSize.size18, fontColor.hex_fff]}>
                        {disabledText}
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                     disabled={result}
                     style={[
                           button.default, flex.fullFlex, {maxWidth:'48%', marginLeft:'2%'},
                           result ? button.disabled : button.colorBlue
                        ]}
                     onPress={() => Linking.openURL(`https://mindelevation.codexbridge.com/sketchbook/view_print/${sb_id}`)}
                  >
                     <Text style={[font.medium, fontSize.size18, fontColor.hex_fff]}>
                        심리분석 결과보기
                     </Text>
                  </TouchableOpacity>
               </View>
            </SafeAreaView>
         }
      </>
);
}

 
