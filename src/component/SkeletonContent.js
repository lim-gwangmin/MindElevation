import SkeletonLoader from "expo-skeleton-loader";
import { SafeAreaView, View } from "react-native";
// style sheet 
import { background, flex, listItemStyle, SkeletonStyle } from '../styledComponent/layout';
import { fontSize, fontColor, dropDown, padding, margin, NavBtn, imageSize } from '../styledComponent/common';


// 스케치북 리스트 스켈레톤 로더 컴포넌트 
export const SkeletonListComponent = () => {

   // 더미 데이터
   const dummyArr = [{},{},{},{},{},{},{},{},{},{}];

   return (
      <SafeAreaView style={{backgroundColor:'#fff', flex:1 }}>
         <View style={{paddingVertical:10, paddingHorizontal:10}}>
            <SkeletonLoader 
               highlightColor={'#cfcfcf'}
               boneColor={"#e6e6e6"}
               duration={500}
            >
               {
                  dummyArr.map((arg, index) => (
                     <SkeletonLoader.Container key={index} style={[flex.row, flex.alignCenter, margin.bottom_10]}>
                        <SkeletonLoader.Container style={margin.right_20}>
                           <SkeletonLoader.Item style={SkeletonStyle.img}/>
                        </SkeletonLoader.Container>
                        <SkeletonLoader.Container style={{flex:1}}>
                           <SkeletonLoader.Item style={SkeletonStyle.stateTxt}/>
                           <SkeletonLoader.Item style={SkeletonStyle.dataTxt}/>
                           <SkeletonLoader.Item style={SkeletonStyle.dataTxt}/>
                        </SkeletonLoader.Container>
                     </SkeletonLoader.Container>
                  ))
               }
            </SkeletonLoader>
         </View>
    </SafeAreaView>
   )
};

// 스케치북 상세보기 이미지 스켈레톤 로더 컴포넌트
export const SekletonImageComponent = () => {
   // 더미 데이터
   const dummyArr = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];

   return (
      <SafeAreaView style={{backgroundColor:'#fff', flex:1 }}>
         <View style={{paddingVertical:10, paddingHorizontal:10}}>
            <SkeletonLoader 
               highlightColor={'#cfcfcf'}
               boneColor={"#e6e6e6"}
               duration={500}
            >
               <SkeletonLoader.Container style={[flex.row, {flexWrap:'wrap'}]}>
                  {
                     dummyArr.map((arg, index) => (
                        
                        <SkeletonLoader.Container key={index} style={flex.col_3()}>
                           <SkeletonLoader.Item style={SkeletonStyle.img}/>
                        </SkeletonLoader.Container>
                     ))
                  }
               </SkeletonLoader.Container>
            </SkeletonLoader>
         </View>
      </SafeAreaView>
   )
};