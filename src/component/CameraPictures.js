import React, { useState, useEffect } from 'react';
import { StatusBar, SafeAreaView, TouchableOpacity, FlatList , View, Image,Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
// react query
import { useQuery } from 'react-query';
// image
import backBtn from '../images/backArrowBtn.png';
import saveBtn from '../images/upload_btn.png';
import PhotoShootBtn from '../images/photoShootBtn.png';
import ThumnailBtn from '../images/thumnailBtn.png';
import imagePickerBtn from '../images/imagepicker-icon.png';
// dispatch
import { useDispatch } from 'react-redux';
// api 
import { add_sketchBook } from '../route/api';
// store 
import { userToken, userSketchbookDetail } from './StackNavigator';
// action
import { addSketchBook, addSketchBookImages } from '../store/userSlice';
// styled component
import { flex, cameraStyle, background, menu } from '../styledComponent/layout';
import { padding, margin, imageSize, fontColor } from '../styledComponent/common';

//loading component
import { Loading, LoginLoading } from './Loading';
import { AlertDataModal, RegistrationSketchbookModal, AlertPathMoveModal } from '../modal/Modal';
// import { AlertDataModal, RegistrationSketchbookModal, AlertPathMoveModal } from '../modal/Modal';
import { navPath } from '../navigationPath/NavigationPath';
import Permission from './Permission';
import { font } from '../../App';
import { isLoading } from 'expo-font';

// 현재 날짜 구하기
const todayData = () => {
   let today = new Date();   
   let year = today.getFullYear();
   let month = ('0' + (today.getMonth() + 1)).slice(-2);
   let day = ('0' + today.getDate()).slice(-2);

   return `${year}-${month}-${day}`;
};

// 썸네일 이미지
const ThumnailImg = ({ url, index,  del }) => (
   <View style={cameraStyle.ThumnailWrap}>
      <TouchableOpacity style={[cameraStyle.delBtn, flex.rowCenter]} onPress={() => del(index)}>
         <Image source={ThumnailBtn} style={imageSize.thumnailDeleteBtn}/>
      </TouchableOpacity>
      <Image source={{uri: url}} style={cameraStyle.ThumnailImg}/>
   </View>
);

export const CameraPictures = ({ close, navigation, route }) => {
   const dispatch = useDispatch();
   // token
   const token = userToken();
   // route params
   const { params } = route;
   const sketchbookId = params?.path ? userSketchbookDetail().sb_id : null;
   // status bar 
   const [ statusBarColor, setStatusBarColor ] = useState(false);
   // 카메라 사용자 권한 체크
   const [ hasPermission, setHasPermission ] = useState(null);
   // 카메라 전방, 후방 카메라 설정 
   const [ type, setType ] = useState(Camera.Constants.Type.back);
   // 카메라 모듈 컨트롤 연결
   const [ camera, setCamera ] = useState(null);
   // 썸네일 이미지
   const [ image, setImage ] = useState([]);
   // 스케치북 등록 모달
   const [ modal, setModal ] = useState(false);
   // 스케치북 등록 성공 및 실패 경고 모달
   const [ alertModal, setAlertModal ] = useState({isOpen:false, comment:'', path:''});
   // 스케치북 이미지 성공 및 실패 경고 모달
   const [ alertImagesModal, setAlertImagesModal ] = useState({isOpen:false, comment:''});
   // 로딩
   const [ loading, setLoading ] = useState(false);

   // 스케치북 등록
   const SketchBookUpload = useQuery('SketchBookUpload' , () => (
      add_sketchBook({
         mb_token: token,
         sb_name: `${todayData()}에 등록한 스케치북`
      }, image).then(res => {
         console.log(res)
         if(res.status) {
            dispatch(addSketchBook(res.data));
            setAlertModal({isOpen:true, comment:'스케치북이 등록되었습니다.', path: navPath.main});
         } else {
            setAlertModal({isOpen:true, comment:res.msg});
         }
      }).catch(err => console.log(err))
   ),{enabled:false});

   // 스케치북 이미지 등록
   const SketchBookImagesUpload = useQuery('SketchBookImagesUpload', () => (
      add_sketchBook({
         mb_token: token,
         sb_id: sketchbookId,
      }, image).then(res => {
         if(res.status) {
            dispatch(addSketchBookImages(res.data));
            setAlertImagesModal({isOpen:true, comment:'스케치북 이미지가 등록되었습니다.'});
         } else {
            setAlertImagesModal({isOpen:true, comment:res.msg});
         }
      }).catch(err => console(err, 'err!')) 
   ), {enabled:false});

   // 카메라 권한 설정 및 체크
   useEffect(() => { 
      (async () => {
         const { status } = await Camera.requestCameraPermissionsAsync();
         setHasPermission(status === 'granted');
      })();

      setStatusBarColor(true);
      
   }, []);

   // 사진촬영
   const snap = async () => {
      let options = {
         quality: .1,
      }

      if(camera) {
         try {
            setLoading(true);
        
            let photo = await camera.takePictureAsync(options)


            console.log(photo)
            setImage([
               ...image,
               {
                  uri:photo.uri
               }
            ]);

         } catch(err) {
            setLoading(false);
            console.log(err);
         } 


         setLoading(false);
      }
   };

   const pickImage = async () => {

      // No permissions request is necessary for launching the image library
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status === "granted") {
         let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, 
            allowsEditing: false,
            base64: false,
            aspect: [1, 1],
            allowsMultipleSelection: true,
            quality: .1,
         });


         if (result.canceled) { return null; }
         setImage([...image, ...result.selected ]);
      }
    };
   // 썸네일 이미지 삭제
   const deleteImage = key => {
      const filterImages = image.filter((arg,index) => index !== key);

      setImage(filterImages);
   };

   // 카메라가 없을때
   // if (hasPermission === null) {
   //    return <Permission navigation={navigation}/>
   // }
   // 카메라 권한이 없을때
   if (hasPermission === false) {
      return <Permission navigation={navigation}/>
   };

   return (
      <SafeAreaView style={[background.black, flex.glow_1]}>
         <StatusBar
            animated={true}
            barStyle={statusBarColor ? 'light-content' : 'default'}
            hidden={false}
         />
         <View style={[flex.fullFlex]}>
            {/* 헤더 */}
            <View style={[ flex.spaceBetween, menu.statusArea, menu.header, flex.row, flex.alignCenter]}>
               <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  style={[flex.row, flex.alignCenter, padding.horizontal_20, imageSize.backArrowBtnWrapper]} 
               >
                  <Image source={backBtn} style={imageSize.backArrowBtn}/>
               </TouchableOpacity>
               <View style={[flex.row, flex.alignCenter, margin.horizontal_20, imageSize.saveBtnWrapper]}>
                  <TouchableOpacity style={imageSize.imagePickerBtnWrapper} onPress={pickImage}>
                     <Image source={imagePickerBtn} style={imageSize.imagePickerBtn}/>
                  </TouchableOpacity>
                  <TouchableOpacity
                     style={imageSize.imagePickerBtnWrapper}
                     onPress={
                        params?.path
                        ?
                        () => SketchBookImagesUpload.refetch()
                        :
                        () => setModal(true)
                     }>
                     <Image source={saveBtn} style={imageSize.saveBtn}/>
                  </TouchableOpacity>
               </View>
            </View>
            <Camera
               ref={ref=> setCamera(ref)}
               style={[flex.glow_1, flex.fullFlex]} 
               type={type}
            />
            <View style={[cameraStyle.bottomArea]}>
               <View style={cameraStyle.ThumnailArea}>
                  <FlatList
                     data={image}
                     // style={{height:70}}
                     keyExtractor={(item, index) => index}
                     horizontal={true}
                     showsHorizontalScrollIndicator={false}
                     renderItem={({item, index, separators}) => (
                           // <ThumnailImg url={item.imageUrl} index={index} del={deleteImage}/>
                           <ThumnailImg url={item.uri} index={index} del={deleteImage}/>
                        )
                     }
                  />
               </View>
               <View style={[flex.rowCenter, margin.top_20]}>
                  <TouchableOpacity 
                     style={[cameraStyle.photoShootBtn, flex.rowCenter]} 
                     onPress={snap}
                  >
                     <Image source={PhotoShootBtn} style={[imageSize.photoShootBtn,{marginBottom:2}]}/>
                  </TouchableOpacity>
               </View>
            </View>
            {/* 사진촬영 로딩 */}
            {loading && <Loading visible={loading} />}
            {/* 스케치북 업로드 로딩 */}
            {SketchBookUpload.isLoading || SketchBookUpload.isFetching && <Loading visible={SketchBookUpload.isLoading || SketchBookUpload.isFetching} />}
            {/* 스케치북 이미지 업로드 로딩 */}
            {SketchBookImagesUpload.isLoading || SketchBookImagesUpload.isFetching && <Loading visible={SketchBookImagesUpload.isLoading || SketchBookImagesUpload.isFetching} />}
         </View>
         {/* 스케치북 모달 */}
         <RegistrationSketchbookModal
            visible={modal}
            hide={setModal}
            upload={params ? SketchBookImagesUpload.refetch : SketchBookUpload.refetch}
            navigate={navigation.navigate}
            type={params ? true : false}
            path={modal.path}
         />
         {/* 스케치북 이미지 등록 확인 및 실패 모달 */}
         <AlertPathMoveModal
            visible={alertImagesModal.isOpen}
            hide={setAlertImagesModal}
            comment={alertImagesModal.comment}
            navigation={navigation}
            path={alertImagesModal.path}
         />
         {/* 스케치북 등록 확인 및 등록실패 모달 */}
         <AlertDataModal
            visible={alertModal.isOpen}
            hide={setAlertModal}
            comment={alertModal.comment}
            navigate={navigation.navigate}
            path={alertModal.path}
         />
   
      </SafeAreaView>
   );
}
