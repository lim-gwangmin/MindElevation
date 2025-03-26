import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
// image 
import cameraIcon from '../images/permissionCameraIcon.png';
// font
import { font } from '../../App';
// style sheet
import { input, button, margin, padding, fontSize, fontColor, lineHeight, listStyle } from '../styledComponent/common';
import { background, login, flex, permissionStyle } from '../styledComponent/layout';
// component
import MenuHeader from './MenuHeader';

export default Permission = ({ navigation }) => {

   const test = async () => {
      const permission = await Camera.requestCameraPermissionsAsync()
      console.log(permission,'permission')
   }

   return (
      <>
         {/* header */}
         <MenuHeader navigator={navigation}/>
         {/* body */}
         <SafeAreaView style={[flex.fullFlex, background.white, padding.horizontal_20, padding.vertical_30]}>
            <View style={[background.padding, flex.fullFlex, flex.spaceBetween]}>
               {/* <View>
                  <Text style={[font.medium, fontSize.size22, lineHeight.area_36, margin.bottom_50]}>
                     마인드 엘리베이션 사용을 위해 {"\n"}
                     권한을 허용해주세요
                  </Text>
                  <View style={[flex.row, flex.colCenter]}>
                     <View style={[permissionStyle.iconImageWrapper, flex.centerCenter, margin.right_20]}>
                        <Image source={cameraIcon} style={permissionStyle.iconImage}/>
                     </View>
                     <View>
                        <Text style={[font.medium, fontSize.size18, fontColor.hex_333, margin.bottom_10]}>
                           카메라
                           <Text style={[font.regular, fontSize.size16, fontColor.hex_818181]}>
                              (필수)
                           </Text>
                        </Text>
                        <Text style={[font.regular, fontSize.size16, fontColor.hex_818181]}>
                           스케치북 촬영
                        </Text>
                     </View>
                  </View>
               </View>
               <View style={[listStyle.dotWrapper, permissionStyle.listDopWrapper, margin.top_40]}>
                  <Text style={[listStyle.dot, fontColor.hex_818181]}>{'\u2022'}</Text>
                  <Text style={[font.regular, fontSize.size16, fontColor.hex_818181]}>
                     휴대폰 '설정 <Text>{"\uFE65"}</Text>마인드엘리베이션<Text>{"\uFE65"}</Text>권한'에서 접근 권한 변경을 하실 수 있습니다.
                  </Text>
               </View>
               <TouchableOpacity onPress={test }>
                  <Text>alsd,la,sd</Text>
               </TouchableOpacity> */}
             
            </View>
      </SafeAreaView>
      </>
   )
}

