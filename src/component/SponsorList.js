import { SafeAreaView, View, Text, Image,ImageBackground } from 'react-native';

// font
import { font } from '../../App';
// style sheet
import { fontSize, fontColor, margin, text, listStyle } from '../styledComponent/common';
import { flex, background, sponsorStyle } from '../styledComponent/layout';
// image
import cloud from '../images/background_cloudx.png';
import logo from '../images/logo.png';

// 후원자 명단 리스트 컴포넌트
const List = () => {
   const sponsorArr = [
      '강하나',
      '김혜정',
      '김호우',
      '박소영',
      '박혜수',
      '방금빈',
      '석명주',
      '신경민',
      '이강덕',
      '이기영',
      '이다솜',
      '이다혜',
      '이지연',
      '이지홍',
      '이현아',
      '주예지',
      '지여을',
      '채수빈',
      '황지현',
   ];
   
   const renderSponsor = sponsorArr.map((arg, index) => (
      <View key={index} style={[listStyle.dotWrapper, margin.horizontal_15, margin.vertical_10, {paddingLeft:'5.5%'}]}>
         <Text style={[listStyle.bigDot, fontColor.hex_5277F6, fontSize.size32]}>{'\u2022'}</Text>
         <Text style={[font.medium, font.size16, fontColor.hex_333]}>
            {arg}
         </Text>
      </View>
   ));

   return (
      <View style={[flex.row, flex.flexWrap]}>
         {renderSponsor}
      </View>
   );
};

export default SponsorList = () => (
   <SafeAreaView style={[flex.fullFlex, background.white]}>
      <View style={[background.padding, background.white, flex.fullFlex]}>
         <View style={{flex:.5}}>
            <ImageBackground source={cloud} resizeMode='cover' style={[flex.fullFlex, flex.centerCenter]}>
               <Text style={[font.medium, fontSize.size16, fontColor.hex_818181, margin.bottom_10, sponsorStyle.txt]}>
                  심리학! 내<Text style={fontColor.hex_F55858}>마음</Text>이 궁금해
               </Text>
               <Text style={[font.Bold, fontSize.size36, fontColor.hex_DC4A33]}>
                  마음읽는
               </Text>
               <Text style={[font.Bold, fontSize.size36, fontColor.hex_5277F6]}>
                  스케치북
               </Text>
            </ImageBackground>
         </View>
         <View style={[flex.fullFlex, flex.spaceBetween]}>
            <View style={margin.top_10}>
               <Text style={[text.align_center, fontColor.hex_818181, font.medium, fontSize.size16]}>
                  후원해주신 모든 여러분 감사합니다.
               </Text>
               <View style={[sponsorStyle.listWrapper, margin.top_20]}>
                  <View style={[flex.row, flex.flexWrap]}>
                     <List/>
                  </View>
               </View>
            </View>
            <View style={flex.centerCenter}>
               <Image source={logo} resizeMode='contain' style={sponsorStyle.logoSize}/>
            </View>
         </View>
      </View>
   </SafeAreaView>
);
