import React, { useState, Fragment } from 'react';
import { SafeAreaView, TouchableOpacity, Text, Image, View } from 'react-native';
// font
import { font } from '../../App';
// img 
import backGo from '../images/backGoBtn.png';
import moreBtn from '../images/moreBtn.png';
import deleteBtn from '../images/deletBtn.png';
// react query
import { useQuery } from 'react-query';
// api
import { delete_sketchBook, delete_sketchBookImages } from '../route/api';
// navigation path
import { navPath } from '../navigationPath/NavigationPath';
// redux
import { useDispatch } from 'react-redux';
// store 
import { userToken, userSketchbookDetail } from './StackNavigator';
// action
import { deleteSketchbook, deleteSketchbookImage } from '../store/userSlice';
// style sheet
import { background, flex, menu, moreDropBox } from '../styledComponent/layout';
import { fontSize, fontColor, padding, text, imageSize } from '../styledComponent/common';
// loading component
import { Loading } from './Loading';
// modal component
import { AlertDataModal, AlertPathMoveModal, DeleteSketchBookModal, DeleteSketchBookImagesResultModal, DeleteSketchBookImagesModal, DeleteSelectModal, CheckDeleteModal } from '../modal/Modal';


// 드롭박스 버튼 컴포넌트
const DropBoxBtn = ({ navigator, dropBoxToggle, setDropBoxToggle, onPressDelete }) => {
   const token = userToken();
   const { sb_id } = userSketchbookDetail();
   const deleteform = {mb_token:token, sb_id,};
   // 스케치북 삭제 요청 성공 모달
   const [ deleteModal, setDeleteModal ] = useState({isOpen:false, form:''});
   // 스케치북 삭제 요청 실패 모달
   const [ deleteSuces, setDeleteSuces ] = useState({isOpen:false, comment:'', path:''});
   // 스케치북 삭제 확인 모달 
   const [ checkDeleteModal, setCheckDeleteModal ] = useState(false)
   // 스케치북 삭제
   const { isLoading, refetch, data, isRefetching } = useQuery('deleteSketchBook', async () => (
      await delete_sketchBook(deleteform).then(res => {
         if(res.status) {
            setDeleteModal({isOpen:true, form: sb_id});
         } else {
            setDeleteSuces({isOpen:true, comment: res.msg, path: navPath.main});
         }
         return res.data;
      })
   ) ,{enabled:false});

   return (
      <View>
         <TouchableOpacity 
            style={[padding.horizontal_20, imageSize.movreBtnWrapper]}
            onPress={() => setDropBoxToggle(!dropBoxToggle)}
         >
            <Image source={moreBtn} style={[imageSize.movreBtn]}/>
         </TouchableOpacity>
         {/* 이미지, 스케치북 삭제 선택 모달 */}
         <DeleteSelectModal
            visible={dropBoxToggle}
            hide={setDropBoxToggle}
            onPressDelete={onPressDelete}
            setCheckDeleteModal={setCheckDeleteModal}
         />
         {/* 스케치북 삭제 확인 모달 */}
         <CheckDeleteModal
            visible={checkDeleteModal}
            hide={setCheckDeleteModal}
            refetch={refetch}
         />
         {/* 스케치북 삭제 요청 성공 모달 */}
         <DeleteSketchBookModal
            visible={deleteModal.isOpen}
            hide={setDeleteModal}
            form={deleteModal.form}
            navigate={navigator.navigate}
         />
         {/* 스케치북 삭제 요청 실패 모달 */}
         <AlertDataModal
            visible={deleteSuces.isOpen}
            hide={setDeleteSuces}
            comment={deleteSuces.comment}
            path={deleteSuces.path}
            navigate={navigator.navigate}
         />
         {isLoading || isRefetching&& <Loading visible={isLoading || isRefetching}/>}
      </View>
   );
};
// 이미지 삭제 페이지 삭제 버튼 컴포넌트
const ImageDeleteBtn = ({ onPressCancel, navigator }) => {
   const token = userToken();
   const dispatch = useDispatch();
   const { sb_id, files } = userSketchbookDetail();
   // 스케치북 이미지 삭제 요청 확인 모달
   const [ deleteSuces, setDeleteSuces ] = useState({isOpen:false, comment:'',});
   // 스케치북 이미지 삭제 요청 결과 모달
   const [ deleteModal, setDeleteModal ] = useState({isOpen:false, comment:''})
   // 삭제할 이미지, 삭제가 안된 이미지 
   const { fileString, notCheckedFiles } = (() => {
      let fileString = '';
      // 삭제할 체크된 파일들
      const checkedFiles = files.filter(arg => arg.checked);
      // dispatch할 체크가 안된 파일들
      const notCheckedFiles = files.filter(arg => !arg.checked);

      checkedFiles.forEach(arg => {
         fileString += `${arg.sf_saveurl + arg.sf_savename},`
      });


      return { fileString: fileString.substring(0, fileString.length - 1), notCheckedFiles }
   })();


   // 스케치북 이미지 삭제
   const { isLoading, refetch, isRefetching } = useQuery('deleteSketchBook', () => (
      delete_sketchBookImages({
         mb_token: token,
         sb_id,
         sf_url: fileString,
      }).then(res => {
         if(res.status) {
            setDeleteModal({isOpen:true, comment:'삭제되었습니다.'});
            dispatch(deleteSketchbookImage({sb_id, files: notCheckedFiles}));
         } else {
            setDeleteModal({isOpen:true, comment:res.msg,});
         }
      })
   ), {enabled:false});


   return (
      <>
         <View>
            <TouchableOpacity 
               style={[imageSize.deleteBtnWrapper, padding.horizontal_20]}
               onPress={() => setDeleteSuces({isOpen:true, comment:'이미지를 삭제하시겠습니까?'})}
            >
               <Image source={deleteBtn} style={[imageSize.deleteBtn]}/>
            </TouchableOpacity>
         </View>
         {/* 이미지 삭제 확인 모달 */}
         <DeleteSketchBookImagesModal
            visible={deleteSuces.isOpen}
            hide={setDeleteSuces}
            comment={deleteSuces.comment}
            refetch={refetch}
         />
         {/* 이미지삭제 요청 성공, 실패  모달 */}
         <DeleteSketchBookImagesResultModal
            visible={deleteModal.isOpen}
            hide={setDeleteModal}
            comment={deleteModal.comment}
            deleteChange={onPressCancel}
         />
         {isLoading || isRefetching && <Loading visible={isLoading || isRefetching}/>}
      </>
   );
};

// 기본 헤더
const HeaderDefaultMenu = ({ navigator, title, routeName, onPressCancel, dropBoxToggle, setDropBoxToggle, onPressDelete }) => (
   <Fragment>
      <TouchableOpacity 
         style={[flex.row, flex.alignCenter, padding.horizontal_20, imageSize.goBackWrapper]} 
         onPress={() => {
            onPressCancel; 
            navigator.goBack();
         }}
      >
         <Image source={backGo} style={imageSize.goBack}/>
      </TouchableOpacity>
      <Text style={[
         fontSize.size18, fontColor.hex_000, font.regular, text.align_center, flex.glow_1, menu.headerTitle]}
      >
         {title} 
      </Text>
      {
         /* 1. routeName 'detailPage' = true */
         routeName === navPath.detailPage 
         &&
         <DropBoxBtn 
            navigator={navigator}
            dropBoxToggle={dropBoxToggle} 
            setDropBoxToggle={setDropBoxToggle} 
            onPressDelete={onPressDelete}
         />
      }
   </Fragment>
);
// 삭제버튼이 있는 헤더
const HeaderDeleteMenu = ({ navigator, onPressCancel }) => (
   <Fragment>
      <TouchableOpacity 
         style={[flex.row, flex.alignCenter, padding.horizontal_20, imageSize.goBackWrapper]} 
         onPress={onPressCancel} 
      >
         <Image source={backGo} style={imageSize.goBack}/>
      </TouchableOpacity>
      <Text style={[fontSize.size18, fontColor.hex_000, font.regular, text.align_center, flex.glow_1, menu.headerTitle]}>
         이미지 삭제 
      </Text>
      <ImageDeleteBtn navigator={navigator} onPressCancel={onPressCancel}/>
   </Fragment>
);

export default MenuHeader = ({ navigator, title, routeName, imgDelete, onPressDelete, onPressCancel }) => {
   const [ dropBoxToggle, setDropBoxToggle ] = useState(false);

   return (
      <SafeAreaView style={[background.white, menu.headerSafeArea]}>
         <View style={[ flex.spaceBetween, menu.statusArea, menu.header, flex.row, flex.alignCenter]}>
            {
               imgDelete // 이미지 삭제 버튼을 누르면 true
               ?
               <HeaderDeleteMenu 
                  navigator={navigator} 
                  onPressCancel={onPressCancel}
               />
               :
               <HeaderDefaultMenu
                  navigator={navigator}
                  title={title}
                  routeName={routeName}
                  onPressCancel={onPressCancel}
                  dropBoxToggle={dropBoxToggle}
                  setDropBoxToggle={setDropBoxToggle}
                  onPressDelete={onPressDelete}
               />
            }
         </View>
      </SafeAreaView>
   )
};