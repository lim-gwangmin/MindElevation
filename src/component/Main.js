import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, StatusBar, ImageBackground, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// navigation path
import { navPath } from '../navigationPath/NavigationPath'; 
import { useIsFocused } from '@react-navigation/native';
// redux hook
import { useDispatch } from 'react-redux';
// font
import { font } from '../../App';
// image 
import photoShoot from '../images/photoShootBtn.png';
import noImage from '../images/noImage.png';
// api
import { get_sketchBook } from '../route/api';
// store
import { userToken, userSketchbookList } from './StackNavigator';
// reducer
import { fetchSketchbook, refreshSketchbook } from '../store/userSlice';
// style sheet 
import { background, flex, listItemStyle } from '../styledComponent/layout';
import { fontSize, fontColor, dropDown, padding, margin, NavBtn, imageSize } from '../styledComponent/common';
// component
import { SkeletonListComponent } from './SkeletonContent';
// loading component
import { MainLoading } from './Loading';

 // 스케치북 상태 표시 component
const FilterState = ({ state }) => {
   // text component
   const stateTextComponent = ( style, text ) => (
      <Text style={[font.regular, fontSize.size14, listItemStyle.stateTxt, style, margin.bottom_10]}>
         {text}
      </Text>
   );

   switch(state) {
      case '0':
         return stateTextComponent(listItemStyle.stateType1, '신청대기');
      case '1':
         return stateTextComponent(listItemStyle.stateType2, '분석대기');
      case '2':
         return stateTextComponent(listItemStyle.stateType3, '분석 중');
      case '3':
         return stateTextComponent(listItemStyle.stateType4, '분석완료');
      default: 
         return stateTextComponent(listItemStyle.stateType1, '신청대기');
   };
};
// list item component
const ListItem = ({ sb_no, thumbnail, sb_regdate, sb_analysis_step, sf_count, navigation }) => {
   return (
      <TouchableOpacity onPress={() => navigation.navigate(navPath.detailPage, { path: sb_no })}>
         <View style={[flex.row, flex.alignCenter, listItemStyle.container, padding.horizontal_20, padding.bottom_20, margin.bottom_20]}>
            <View style={listItemStyle.imgWrapper}>
               {
                  thumbnail
                  ?
                  <ImageBackground source={{uri:thumbnail}} resizeMode='cover' style={listItemStyle.backgroundImg}/>
                  :
                  <ImageBackground source={noImage} resizeMode='cover' style={listItemStyle.backgroundImg}/>
               }
            </View>
            <View style={margin.left_20}>
               <FilterState state={sb_analysis_step}/>
               <Text style={[font.regular, fontSize.size16, fontColor.hex_333, margin.bottom_5]}>
                  폴더내 파일 수 : {sf_count}
               </Text>
               <Text style={[font.regular, fontSize.size16, fontColor.hex_333]}>
                  {sb_regdate}
               </Text>
            </View>
         </View>
      </TouchableOpacity>
   );
};

export const Main = ({ navigation }) => {
   const token = userToken();
   const dispatch = useDispatch();
   const isFocused = useIsFocused();
   const [open, setOpen] = useState(false);
   // 리스트 필터 값
   const [value, setValue] = useState(0);
   // 스케치북 리스트
   const sketchbookList = userSketchbookList();
   // scroll page
   const [ pages, setPages ] = useState({currentPage: 0, totalPage: 2});
   // 스케치북 리스트 로딩
   const [ fetchLoading, setFetchLoading ] = useState(false);
   // 스케치북 필터 로딩
   const [ filterhLoading, setFilterLoading ] = useState(false);
   // drop box 
   const [items, setItems] = useState([
      {label: '신청대기', value: 0}, 
      {label: '분석대기', value: 1},
      {label: '분석중', value: 2},
      {label: '분석완료', value: 3},
   ]);


   useEffect(() => {
      fetchSketchbookList.getSketchBookFilter('add', value, 1);
      
   },[isFocused]);

   // 스케치북 비동기 메소드
   const fetchSketchbookList = {
      // 로딩 스타일
      loadingType: (eventType) => {
         switch(eventType) {
            case 'fetch': // 스케치북 리스트 
               setFetchLoading(true)
               break;
            case 'filter': // 스케치북 필터 
               setFilterLoading(true)
               break;
            default :
               setFetchLoading(false);
               setFilterLoading(false);
            return             
         }
      },
      // 인피니티 스크롤 비동기 작업
      getSketchBookInfinite: async eventType => {
         if (pages.currentPage >= pages.totalPage) return;

         try {
            fetchSketchbookList.loadingType(eventType);
            await get_sketchBook({
               mb_token: token,
               status: value,
               page: pages.currentPage + 1,
            }).then(res => {
               if(res.status) {
                  const currentPage = JSON.parse(res.currentPage);
                  const totalPage = JSON.parse(res.totalPage);
                  setPages({currentPage: currentPage, totalPage});
                  dispatch(fetchSketchbook(res.data));
               }
            })
         } catch (err){
            console.log(err);
         }

         fetchSketchbookList.loadingType(null);
      },
      // 리스트 필터 비동기 작업
      getSketchBookFilter: async (eventType, value, page) => {
         try {
            // 로딩 시작
            fetchSketchbookList.loadingType(eventType);

            await get_sketchBook({
               mb_token: token, 
               status: value,
               page,
            }).then(res => {
               const currentPage = JSON.parse(res.currentPage);
               const totalPage = JSON.parse(res.totalPage);
               if(res.status) {
                  setPages({currentPage, totalPage});
                  dispatch(refreshSketchbook(res.data));
               }
            })
         } catch (err){
            console.log(err);
         }

         // 로딩 끝
         fetchSketchbookList.loadingType(null);
      },
      // 스크롤 탑 리프레시 비동기 작업
      // scrollTopRefersh: () => fetchSketchbookList.getSketchBookFilter('add', value, 1),
      // 스케치북 리스트 필터 비동기 작업
      selectChangeRefersh: async type => {
         await setValue(type);
         await fetchSketchbookList.getSketchBookFilter('filter', type, 1);
      },
   };


   // selectbox active color change
   const changeSelectBoxColor = () => open ? [fontSize.size16, fontColor.hex_818181, dropDown.labelStyle] : [fontSize.size16, dropDown.labelStyle];
   
   // 로딩
   if(fetchLoading) return <SkeletonListComponent/>

   return (
      <>
         <StatusBar/>
         <SafeAreaView style={[flex.fullFlex, background.hex_F8FAFB]}>
            {/* 
               native 렌더링 순서에 맞물려 셀렉트 박스보다 스케치북 리스트가 z-index 값이 더 높은 현상이 발생함 
               position absolute, zIndex 값을 설정해도 똑같은 이슈가 발생함.
               렌더링 순서를 셀렉트 박스를 리스트보다 후에 렌더링 시키고 레이아웃을 반대로 위치 시킴.  
            */}
            <View style={[padding.vertical_20, flex.fullFlex, {flexDirection:'column-reverse'}]}>
               {/* 스케치북 리스트 */}
               <View style={flex.fullFlex}>
                  <FlatList
                     style={padding.vertical_20}
                     showsVerticalScrollIndicator={false}
                     data={sketchbookList}
                     keyExtractor={(item, index) => index.toString()}
                     // onRefresh={refetch}
                     refreshing={false}
                     onEndReached={() => fetchSketchbookList.getSketchBookInfinite('add', value, pages.currentPage)}
                     onEndReachedThreshold={0.5}
                     renderItem={({item, index}) => (
                        <ListItem 
                           key={index} 
                           thumbnail={item.thumbnail}
                           sb_no={item.sb_no} // 스케치북 고유 아이디
                           sb_name={item.sb_name} // 스케치북 이름
                           sb_regdate={item.sb_regdate} // 업로드 년,월,일,시간,분,초
                           sb_analysis_step={item.sb_analysis_step} // 스케치북 처리 상태
                           sf_count={item.sf_count} // 스케치북 이미지 갯수
                           navigation={navigation}
                        />
                     )}
                  />
               </View>
               {/* select box */}
               <View style={[flex.row, flex.spaceBetween, flex.alignCenter, padding.horizontal_20, margin.bottom_20]}>
                  <Text style={[font.regular, fontSize.size16, fontColor.hex_818181]}>총 {sketchbookList.length}건</Text>
                  <View>
                     <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setItems={setItems}
                        textStyle={[font.regular, fontSize.size16]}
                        setValue={ async value => {
                           setValue(value());
                           fetchSketchbookList.selectChangeRefersh(value());
                        }}
                        tickIconContainerStyle={{marginBottom: 7}}
                        style={[dropDown.boxContainer, {zIndex:10}]}

                        containerStyle={{maxHeight:50}}

                        dropDownContainerStyle={[dropDown.labelContainer, {zIndex:10}]}
                        labelStyle={changeSelectBoxColor()}
                        placeholderStyle={changeSelectBoxColor()}
                        placeholder={items[0].label}
                        zIndex={2000}
                     />
                  </View>
               </View>
               {/* 카메라 모듈 이동 */}
               <TouchableOpacity 
                  style={[NavBtn.photoShoot, background.hex_5277F6, flex.rowCenter]}
                  onPress={() => navigation.navigate(navPath.photoShoot)}
               >
                  <Image source={photoShoot} style={[imageSize.photoShootBtn,{marginBottom:2}]}/>
            </TouchableOpacity>
            </View>
            {/* 스케치북 리스트 필터 로딩 */}
            {filterhLoading && <MainLoading visible={filterhLoading}/>}
         </SafeAreaView>
      </>
   );
};

 
