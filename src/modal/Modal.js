import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Modal, SafeAreaView, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slick from 'react-native-slick';
import BouncyCheckbox from "react-native-bouncy-checkbox";

// redux 
import { useDispatch } from 'react-redux';

// action
import { deleteSketchbook } from '../store/userSlice';

// style sheet
import { background, flex, modalStyle } from '../styledComponent/layout';
import { padding, margin, fontSize, fontColor, text, modal, lineHeight, imageSize, position } from '../styledComponent/common';

// font
import { font } from '../../App';

// navigation path
import { navPath } from '../navigationPath/NavigationPath';

// image 
import guide1 from '../images/guide_1.png';
import guide2 from '../images/guide_2.png';
import guide3 from '../images/guide_3.png';
import guide4 from '../images/guide_4.png';
import guide5 from '../images/guide_5.png';
import guide6 from '../images/guide_6.png';
import guide7 from '../images/guide_7.png';
import guideCloseBtn from '../images/guideCloseBtn.png';
import modalCloseBtn from '../images/modalCloseBtn.png';
import imageDeleteBtn from '../images/deleteImageBtn.png';
import sketchbookDeleteBtn from '../images/deleteSketchbookBtn.png';

{/* 
   필수입력사항 미 입력
   아이디 전송 완료, 
   임시 비밀번호 전송, 
   회원정보 조회 불가능,
   ...
*/}
export const AlertDataModal = ({ visible, hide, comment, navigate, path }) => (
   <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={() => hide({isOpen:false})}
   >
      <View style={[modal.modalWrapper]} >
         <View style={modal.modalContainer}>
            <View style={[padding.vertical_20, padding.horizontal_20]}>
               <Text style={[margin.top_10, margin.bottom_10, font.medium, fontSize.size18, fontColor.hex_000, text.align_center]}>
                  안내
               </Text>
               <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, margin.bottom_5]}>
                  {comment}
               </Text>
            </View>
            <View style={[flex.centerCenter, flex.row, modal.modalFooter]}>
               <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="#c5c5c5c5"
                  style={[modal.modalFooterBtnCol1,]}
                  onPress={
                     navigate && path
                     ? 
                      () => {
                         navigate(path);
                         hide({isOpen:false});
                     } 
                     : () => {
                        hide({isOpen:false});
                     }
                  }
               >
                  <Text style={[text.align_center, fontColor.hex_5277F6, font.regular, fontSize.size18]}>
                     확인
                  </Text>
               </TouchableHighlight>
            </View>
         </View>
      </View>
   </Modal>
);
{/* 스케치북 등록 모달 */}
export const RegistrationSketchbookModal = ({ visible, hide, type, navigate, upload, path }) => (
   <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={() => {
         hide(false);         
      }}
   >
      <View style={[modal.modalWrapper]} >
         <View style={[modal.modalContainer]}>
            <View style={[padding.vertical_20, padding.horizontal_20]}>
               <Text style={[margin.top_10, margin.bottom_10, font.medium, fontSize.size18, fontColor.hex_000, text.align_center]}>
                  안내
               </Text>
               <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, margin.bottom_5]}>
                  {
                     type
                     ?
                     '이미지를 등록하시겠습니까?'
                     : 
                     '스케치북을 등록하시겠습니까?'
                  }
               </Text>
            </View>
            <View style={[flex.centerCenter, flex.row, modal.modalFooter]}>
               <TouchableHighlight 
                  activeOpacity={1}
                  underlayColor="#c5c5c5c5"
                  style={modal.modalFooterBtnCol2} 
                  onPress={() => hide(false)}
               >
                  <Text style={[text.align_center, fontColor.hex_F55858, font.regular, fontSize.size18]}>
                     취소
                  </Text>
               </TouchableHighlight>
               <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="#c5c5c5c5"
                  style={[modal.modalFooterBtnCol2, modal.modalFooterRightBtn]}
                  onPress={ async () => {
                     await upload();
                     await hide(false);
                  }}
               >
                  <Text style={[text.align_center, fontColor.hex_5277F6, font.regular, fontSize.size18]}>
                     확인
                  </Text>
               </TouchableHighlight>
            </View>
         </View>
      </View>
   </Modal>
);
{/* 특정 path 값으로 페이지 이동하는 모달 */}
export const AlertPathMoveModal = ({ visible, hide, comment, navigation }) => (
   <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={() => {
         hide({isOpen:false});         
      }}
   >
      <View style={[modal.modalWrapper]} >
         <View style={modal.modalContainer}>
            <View style={[padding.vertical_20, padding.horizontal_20]}>
               <Text style={[margin.top_10, margin.bottom_10, font.medium, fontSize.size18, fontColor.hex_000, text.align_center]}>
                  안내
               </Text>
               <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, margin.bottom_5]}>
                  {comment}
               </Text>
            </View>
            <View style={[flex.centerCenter, flex.row, modal.modalFooter]}>
               <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="#c5c5c5c5"
                  style={[modal.modalFooterBtnCol1]}
                  onPress={ () => {
                     navigation.goBack();
                     hide({isOpen:false})
                  }}
               >
                  <Text style={[text.align_center, fontColor.hex_5277F6, font.regular, fontSize.size18]}>
                     확인
                  </Text>
               </TouchableHighlight>
            </View>
         </View>
      </View>
   </Modal>
);
{/* 주의사항 모달 */}
export const RegistrationAlertModal = ({ visible, hide }) => (
   <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={() => {
         hide(false);         
      }}
   >
      <View style={[modal.modalWrapper]} >
         <View style={modal.modalContainer}>
            <View style={[padding.vertical_20, padding.horizontal_20]}>
               <Text style={[margin.top_20, margin.bottom_10, font.medium, fontSize.size18, fontColor.hex_000, text.align_center]}>
                  주의
               </Text>
               <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, margin.bottom_25, lineHeight.area_25]}>
                  체험행사 참여 고객님들은 시리얼 번호에{"\n"}
                  mindelevation을 입력하세요
               </Text>
               <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, margin.bottom_5, lineHeight.area_25]}>
                  ※ 스케치북 구매 고객님께서는 스케치북 맨 마지막{"\n"}
                  페이지에 있는 시리얼 번호를 입력하시면 됩니다.{"\n"}
                  ※ mindelevation은 체험전용 시리얼 번호입니다.
               </Text>
            </View>
         </View>
         <View style={[flex.centerCenter, flex.row, modal.modalFooter]}>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#c5c5c5c5"
               style={[modal.modalFooterBtnCol1]}
               onPress={ () =>  hide(false)}
            >
               <Text style={[text.align_center, fontColor.hex_5277F6, font.regular, fontSize.size18]}>
                  확인
               </Text>
            </TouchableHighlight>
         </View>
      </View>
   </Modal>
);
{/* 가이드 모달 */}
export const GuideModal = ({ visible, hide }) => {
   const [ checked, setChecked ] = useState(false);

   const guideData = () => {
      if(visible.type !== 'first') return;

      AsyncStorage.setItem('guide', JSON.stringify(!checked));

   };


   return (
      <Modal visible={visible.isOpen}>
       {/* <View style={[modalStyle.guide, {display: visible.isOpen? 'flex': 'none'}]}> */}
         <SafeAreaView style={[flex.fullFlex]}>
            <View style={flex.fullFlex}>
               <Slick 
                  loop={false} 
                  style={{zIndex:-1}}
                  paginationStyle={modalStyle.dotPosition}
                  dot={
                     <View
                       style={{
                         backgroundColor: '#D9D9D9',
                         width: 8,
                         height: 8,
                         borderRadius: 8,
                         marginLeft: 3,
                         marginRight: 3,
                         marginTop: 3,
                         marginBottom: 3
                       }}
                     />
                   }
                  // dotStyle
                  dotColor='#D9D9D9'
                  activeDotColor='#5277F6'
               >
                  {/* cover, contain, stretch, repeat, center  */}
                  <View style={[flex.centerCenter, flex.fullFlex, background.hex_5277F6]}>
                     <ImageBackground source={guide1} resizeMode='contain' style={imageSize.slideImg}/>
                  </View>
                  <View style={[flex.centerCenter, background.black]}>
                     <ImageBackground source={guide2} resizeMode='contain' style={imageSize.slideImg}/>
                  </View>
                  <View style={[flex.centerCenter, flex.fullFlex, background.black]}>
                     <ImageBackground source={guide3} resizeMode='contain'style={[imageSize.slideImg]}/>
                  </View>
                  <View style={[flex.centerCenter,  background.black]}>
                     <ImageBackground source={guide4} resizeMode='contain' style={imageSize.slideImg}/>
                  </View>
                  <View style={[flex.centerCenter, flex.fullFlex, background.black]}>
                     <ImageBackground source={guide5} resizeMode='contain'style={[imageSize.slideImg]}/>
                  </View>
                  <View style={[flex.centerCenter,  background.black]}>
                     <ImageBackground source={guide6} resizeMode='contain' style={imageSize.slideImg}/>
                  </View>
                  <View style={[flex.centerCenter,  background.black]}>
                     <ImageBackground source={guide7} resizeMode='contain' style={imageSize.slideImg}/>
                  </View>
               </Slick>
               <TouchableOpacity 
                  style={[modalStyle.closeBtn]}
                  // activeOpacity={.6}
                  onPress={() => {
                     hide(false);
                     guideData();
                  }}
               >
                  <ImageBackground source={guideCloseBtn} resizeMode='cover' style={imageSize.slideImg}/>
               </TouchableOpacity>
            </View>
         </SafeAreaView>
         {
            visible.type === 'first'
            &&
            <View style={[background.white, padding.vertical_20, padding.horizontal_20]}>
               <BouncyCheckbox
                  size={21}
                  isChecked={checked}
                  disableBuiltInState={true}
                  fillColor="#5277F6"
                  unfillColor="#FFFFFF"
                  text="다시보지않기"
                  textStyle={[fontSize.size16, fontColor.hex_333, font.regular,{textDecorationLine:'none'}]}
                  iconStyle={[{ borderColor: "#5277F6", borderRadius: 0,}]}
                  onPress={() => setChecked(!checked)}
               />
            </View>
         }
         
         <SafeAreaView style={background.white}></SafeAreaView>
      {/* </View> */}
      </Modal>
   )
};
{/* 심리분석 요청 성공 모달 */}
export const RequestAnalysisModal = ({ visible, hide, navigate, path }) => (
   <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={() => hide({isOpen:false}) }
   >
      <View style={[modal.modalWrapper]} >
         <View style={modal.modalContainer}>
            <View style={[padding.vertical_20, padding.horizontal_20]}>
               <Text style={[margin.top_5, margin.bottom_10, font.medium, fontSize.size18, fontColor.hex_000, text.align_center]}>
                  신청완료
               </Text>
               <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, lineHeight.area_25]}>
                  심리분석 신청이 되었습니다.
               </Text>
            </View>
         </View>
         <View style={[flex.centerCenter, flex.row, modal.modalFooter]}>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#c5c5c5c5"
               style={[modal.modalFooterBtnCol1]}
               onPress={ async () =>  {
                  await navigate(path);
                  await hide({isOpen:false});
               }}
            >
               <Text style={[text.align_center, fontColor.hex_5277F6, font.regular, fontSize.size18]}>
                  메인페이지로 이동
               </Text>
            </TouchableHighlight>
         </View>
      </View>
   </Modal>
);
{/* 스케치북 초기화 모달 */}
export const ResetSketchBookModal = ({ visible, hide, onSubmit }) => (
   <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={() => hide(false)}
   >
      <View style={[modal.modalWrapper]} >
         <View style={modal.modalContainer}>
            <View style={[padding.vertical_20, padding.horizontal_20]}>
               <Text style={[margin.top_5, margin.bottom_10, font.medium, fontSize.size18, fontColor.hex_000, text.align_center]}>
                  주의
               </Text>
               <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, margin.bottom_5]}>
                  스케치북을 초기화 하시겠습니까?
               </Text>
            </View>
         </View>
         <View style={[flex.centerCenter, flex.row, modal.modalFooter]}>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#c5c5c5c5"
               style={[modal.modalFooterBtnCol2]}
               onPress={() => hide(false)}
            >
               <Text style={[text.align_center, fontColor.hex_F55858, font.regular, fontSize.size18]}>
                  취소
               </Text>
            </TouchableHighlight>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#c5c5c5c5"
               style={[modal.modalFooterBtnCol2, modal.modalFooterRightBtn]}
               onPress={ async () => {
                  await onSubmit();
                  await hide(false);
               }}
            >
               <Text style={[text.align_center, fontColor.hex_5277F6, font.regular, fontSize.size18]}>
                  확인
               </Text>
            </TouchableHighlight>
         </View>
      </View>
   </Modal>
);
{/* 스케치북삭제 요청 성공 모달 */}
export const DeleteSketchBookModal = ({ visible, hide, form, navigate }) => {
   const dispatch = useDispatch();

   return (
      <Modal
         animationType='fade'
         transparent={true}
         visible={visible}
         onRequestClose={() => hide(false) }
      >
         <View style={modal.modalWrapper} >
            <View style={modal.modalContainer}>
               <View style={[padding.vertical_20, padding.horizontal_20]}>
                  <Text style={[margin.top_5, margin.bottom_10, font.medium, fontSize.size18, fontColor.hex_000, text.align_center]}>
                     삭제완료
                  </Text>
                  <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, lineHeight.area_25]}>
                     삭제되었습니다.
                  </Text>
               </View>
            </View>
            <View style={[flex.centerCenter, flex.row, modal.modalFooter]}>
               <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="#c5c5c5c5"
                  style={[modal.modalFooterBtnCol1]}
                  onPress={ async () => {
                     await dispatch(deleteSketchbook(form));
                     await navigate(navPath.main);
                     await hide(false);
                  }}
               >
                  <Text style={[text.align_center, fontColor.hex_5277F6, font.regular, fontSize.size18]}>
                     확인
                  </Text>
               </TouchableHighlight>
            </View>
         </View>
      </Modal>
   )
};
{/* 스케치북 이미지 삭제 경고 모달 */}
export const DeleteSketchBookImagesModal = ({ visible, hide, comment, refetch }) => (
   <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={() => hide({isOpen:false}) }
   >
      <View style={[modal.modalWrapper]} >
         <View style={modal.modalContainer}>
            <View style={[padding.vertical_20, padding.horizontal_20]}>
               <Text style={[margin.top_5, margin.bottom_10, font.medium, fontSize.size18, fontColor.hex_000, text.align_center]}>
                  안내
               </Text>
               <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, margin.bottom_5]}>
                  {comment}
               </Text>
            </View>
         </View>
         <View style={[flex.centerCenter, flex.row, modal.modalFooter]}>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#c5c5c5c5"
               style={[modal.modalFooterBtnCol2, modal.modalFooterRightBtn]}
               onPress={() => hide({isOpen: false})}
            >
               <Text style={[text.align_center, fontColor.hex_F55858, font.regular, fontSize.size18]}>
                  취소
               </Text>
            </TouchableHighlight>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#c5c5c5c5"
               style={[modal.modalFooterBtnCol2, modal.modalFooterRightBtn]}
               onPress={ async () => {
                  await refetch();
                  await hide({isOpen: false});
               }}
            >
               <Text style={[text.align_center, fontColor.hex_5277F6, font.regular, fontSize.size18]}>
                  확인
               </Text>
            </TouchableHighlight>
         </View>
      </View>
   </Modal>
);
{/* 스케치북 이미지 삭제 요청 성공, 실패 모달 */}
export const DeleteSketchBookImagesResultModal = ({ visible, hide, comment, deleteChange }) => (
   <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={() => hide({isOpen:false}) }
   >
      <View style={[modal.modalWrapper]} >
         <View style={modal.modalContainer}>
            <View style={[padding.vertical_20, padding.horizontal_20]}>
               <Text style={[margin.top_5, margin.bottom_10, font.medium, fontSize.size18, fontColor.hex_000, text.align_center]}>
                  안내
               </Text>
               <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, lineHeight.area_25]}>
                  {comment}
               </Text>
            </View>
         </View>
         <View style={[flex.centerCenter, flex.row, modal.modalFooter]}>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#c5c5c5c5"
               style={modal.modalFooterBtnCol1}
               onPress={ async () => {
                  await deleteChange();
                  await hide({isOpen:false});
               }}
            >
               <Text style={[text.align_center, fontColor.hex_5277F6, font.regular, fontSize.size18]}>
                  확인
               </Text>
            </TouchableHighlight>
         </View>
      </View>
   </Modal>
);
{/* 회원탈퇴 모달 */}
export const MemberLeaveModal = ({ visible, hide, title, comment, type, logout, onSubmit }) => (
   <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={() => hide({isOpen:false})}
   >
      <View style={[modal.modalWrapper]} >
         <View style={modal.modalContainer}>
            <View style={[padding.vertical_20, padding.horizontal_20]}>
               <Text style={[margin.top_5, margin.bottom_10, font.medium, fontSize.size18, fontColor.hex_000, text.align_center]}>
                  {title}
               </Text>
               <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, margin.bottom_5]}>
                  {comment}
               </Text>
            </View>
         </View>
         <View style={[flex.centerCenter, flex.row, modal.modalFooter]}>
            {
               type
               ?
               <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="#c5c5c5c5"
                  style={modal.modalFooterBtnCol1}
                  onPress={ async () => {
                     await logout();
                     await hide({isOpen:false});
                  }}
               >
                  <Text style={[text.align_center, fontColor.hex_5277F6, font.regular, fontSize.size18]}>
                     확인
                  </Text>
               </TouchableHighlight>
               :
               <>
                  <TouchableHighlight
                     activeOpacity={1}
                     underlayColor="#c5c5c5c5"
                     style={[modal.modalFooterBtnCol2, modal.modalFooterRightBtn]}
                     onPress={() => hide({isOpen:false})}
                  >
                     <Text style={[text.align_center, fontColor.hex_F55858, font.regular, fontSize.size18]}>
                        취소
                     </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                     activeOpacity={1}
                     underlayColor="#c5c5c5c5"
                     style={[modal.modalFooterBtnCol2, modal.modalFooterRightBtn]}
                     onPress={ async () => {
                        await onSubmit();
                        await hide({isOpen:false});
                     }}
                  >
                     <Text style={[text.align_center, fontColor.hex_5277F6, font.regular, fontSize.size18]}>
                        확인
                     </Text>
                  </TouchableHighlight>
               </>
            }
         </View>
      </View>
   </Modal>
);
{/* 이미지, 스케치북 삭제 선택 모달 */}
export const DeleteSelectModal = ({ visible, hide, onPressDelete, setCheckDeleteModal }) => (
   <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={() => hide(!visible)}
   >
      <View style={[modal.modalWrapper]} >
         <View style={[modal.modalContainer, padding.vertical_30, padding.horizontal_30]}>
            <TouchableOpacity
               style={[modal.closeBtnWrapper, flex.centerCenter]}
               onPress={() => hide(!visible)}
            >
               <Image source={modalCloseBtn} style={modal.closeBtn}/>
            </TouchableOpacity>
            <View>
               <Text style={[margin.vertical_10, font.medium, fontSize.size18, fontColor.hex_000, text.align_center]}>
                  삭제
               </Text>
               <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, margin.bottom_5]}>
                  이미지 삭제 또는 스케치북 삭제를 선택하세요.
               </Text>
            </View>
            <View style={[flex.row, flex.centerCenter, margin.top_20, padding.bottom_10]}>
               <View style={margin.right_40}>
                  <TouchableOpacity
                     onPress={() => {
                        hide(!visible);
                        onPressDelete();
                     }}
                  >
                     <Image source={imageDeleteBtn} style={modal.imageDeleteBtnImg}/>
                  </TouchableOpacity>
                  <Text style={[text.align_center, fontSize.size16, fontColor.hex_000, margin.top_15]}>
                     이미지 삭제
                  </Text>
               </View>
               <View style={margin.left_40}>
                  <TouchableOpacity
                     onPress={ async () => {
                        await setCheckDeleteModal(true);
                        await hide(!visible);
                     }}
                  >
                        <Image source={sketchbookDeleteBtn} style={modal.imageDeleteBtnImg}/>
                  </TouchableOpacity>
                  <Text style={[text.align_center, fontSize.size16, fontColor.hex_000, margin.top_15]}>
                     스케치북 삭제
                  </Text>
               </View>
            </View>
         </View>
      </View>
   </Modal>
);
{/* 스케치북 삭제 확인 모달 */}
export const CheckDeleteModal = ({ visible, hide, refetch }) => (
   <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={() => hide(false)}
   >
      <View style={[modal.modalWrapper]} >
         <View style={modal.modalContainer}>
            <View style={[padding.vertical_20, padding.horizontal_20]}>
               <Text style={[margin.top_5, margin.bottom_10, font.medium, fontSize.size18, fontColor.hex_000, text.align_center]}>
                  주의
               </Text>
               <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, margin.bottom_5]}>
                  스케치북을 삭제하시겠습니까?
               </Text>
            </View>
         </View>
         <View style={[flex.centerCenter, flex.row, modal.modalFooter]}>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#c5c5c5c5"
               style={[modal.modalFooterBtnCol2, modal.modalFooterRightBtn]}
               onPress={() => hide(false)}
            >
               <Text style={[text.align_center, fontColor.hex_F55858, font.regular, fontSize.size18]}>
                  취소
               </Text>
            </TouchableHighlight>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#c5c5c5c5"
               style={[modal.modalFooterBtnCol2, modal.modalFooterRightBtn]}
               onPress={ async () => {
                  await refetch();
                  await hide(false);
               }}
            >
               <Text style={[text.align_center, fontColor.hex_5277F6, font.regular, fontSize.size18]}>
                  삭제
               </Text>
            </TouchableHighlight>
         </View>
      </View>
   </Modal>
)
{/* 로그아웃 확인 모달 */}
export const LogOutModal = ({ visible, hide, onSubmit }) => (
   <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      // onRequestClose={() => hide(false)}
   >
      <View style={[modal.modalWrapper]} >
         <View style={[modal.modalContainer]}>
            <View style={[padding.vertical_20, padding.horizontal_20]}>
               <Text style={[margin.top_5, margin.bottom_10, font.medium, fontSize.size18, fontColor.hex_000, text.align_center]}>
                  안내
               </Text>
               <Text style={[text.align_center, font.regular, fontSize.size16, fontColor.hex_818181, margin.bottom_5]}>
                  로그아웃 하시겠습니까?
               </Text>
            </View>
         </View>
         <View style={[flex.row, modal.modalFooter]}>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#c5c5c5c5"
               style={[modal.modalFooterBtnCol2, modal.modalFooterRightBtn]}
               onPress={() => hide(false)}
            >
               <Text style={[text.align_center, fontColor.hex_F55858, font.regular, fontSize.size18]}>
                  취소
               </Text>
            </TouchableHighlight>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#c5c5c5c5"
               style={[modal.modalFooterBtnCol2, modal.modalFooterRightBtn]}
               onPress={ async () => {
                  await onSubmit();
                  await hide(false);
               }}
            >
               <Text style={[text.align_center, fontColor.hex_5277F6, font.regular, fontSize.size18]}>
                  확인
               </Text>
            </TouchableHighlight>
         </View>
      </View>
   </Modal>
);
