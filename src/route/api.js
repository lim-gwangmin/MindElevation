import { Platform } from 'react-native';
import { API_URL } from '@env';

// 기본주소
const url = API_URL;
// 회원가입
export const signUp = url+'/api/member_register';
// 로그인, 토큰 로그인
export const login = url+'/api/member_login';
// 아이디 찾기
export const findId = url+'/api/member_find_id';
// 비밀번호 찾기
export const findPassword = url+'/api/member_find_password';
// 비밀번호 변경
export const changePassword = url+'/api/member_change_password'; 
// 로그아웃
export const logout = url+'/api/member_logout';
// 스케치북 등록 및 사진추가
export const addSketchBook = url+'/api/sketchbook_post';
// 스케치북 목록
export const getSketchBook = url+'/api/sketchbook_list';
// 스케치북 상세
export const getDetailSketchBook = url+'/api/sketchbook_get';
// 심리분석 신청
export const applySketchBook = url+'/sketchbook/ajax_license';
// 스케치북 삭제
export const deleteSketchBook = url+'/api/sketchbook_delete';
// 스케치북 이미지 삭제
export const deleteSketchBookImage = url+'/api/sketchbook_file_delete';
// 스케치북 초기화
export const resetSketchBook = url+'/api/setting_sketchbook_reset';
// 회원정보 수정
export const updateMember = url+'/api/member_update';
// 회원 탈퇴
export const memberLeave = url+'/api/member_leave';


const headers = () => ({
   headers: {
      'Content-Type': 'multipart/form-data',
   } 
});

/*********  form data *********/
const form_data = data => {
   let formData = new FormData();

   for ( let key in data) {
      formData.append(key, data[key]);
   };

   return formData;
};
/*********  이미지 업로드 form data *********/
const imageFormData = ( data, images ) => {
   let formData = new FormData();

   // 스케치북 명 , 스케치북 고유 값
   for ( let key in data) {
      formData.append(key, data[key]);
   };

   // 이미지
   // images.forEach((arg,index) => {
   //    const uriParts = arg.imageUrl.split('.');
   //    const fileType = uriParts[uriParts.length - 1];

   //    const searchTerm = arg.imageUrl.split('/').length - 1;
   //    const fileName = arg.imageUrl.split('/')[searchTerm]

   //       formData.append("file[" + index +"]", {
   //          name: fileName,
   //          type: `image/${fileType}`,
   //          uri: Platform.OS === 'ios' ? arg.imageUrl.replace('file://', '') : arg.imageUrl,
   //     });
   // });

   images.forEach((arg,index) => {
      const uriParts = arg.uri.split('.');
      const fileType = uriParts[uriParts.length - 1];

      const searchTerm = arg.uri.split('/').length - 1;
      const fileName = arg.uri.split('/')[searchTerm]

         formData.append("file[" + index +"]", {
            name: fileName,
            type: `image/${fileType}`,
            uri: Platform.OS === 'ios' ? arg.uri.replace('file://', '') : arg.uri,
       });
   });

   return formData;
};
/********* 회원가입 **********/
export const fetch_signUp = obj => {
   const data = fetch(signUp, {
      method:'POST',
      body: form_data(obj),
   }).then(res => res.json()).then(res => res);

   return data;
}
/********* 로그인, 토큰 로그인 **********/
export const member_login = obj => {
   const data = fetch(login, {
      method:'POST',
      body: form_data(obj),
   }).then(res => res.json()).then(res => res);

   return data;
};
/********* 아이디 찾기 **********/
export const find_ID = text => {
   const form = {
      mb_email: text,
   };

   const data = fetch(findId, {
      method:'POST',
      body: form_data(form),
   }).then(res => res.json()).then(res => res);

   return data;
};
/********* 비밀번호 찾기 **********/
export const find_PASSWORD = text => {

   const form = {
      mb_email: text,
   };

   const data = fetch(findPassword, {
      method:'POST',
      body: form_data(form),
   }).then(res => res.json()).then(res => res);

   return data;
};
/********* 비밀번호 변경 **********/
export const change_PASSWORD = obj => {
   const data = fetch(changePassword, {
      method:'POST',
      body: form_data(obj),
   }).then(res => res.json()).then(res => res);

   return data;
};
/********* 스케치북 등록 및 사진추가 **********/
export const add_sketchBook = (form, images) => {
   console.log(imageFormData(form, images))
   const data = fetch(addSketchBook, {
      method:'POST',
      headers: {
         'Content-Type': 'multipart/form-data',
      },
      body: imageFormData(form, images),
   }).then(res => res.json()).then(res => res);
   
   return data;
};
/********* 스케치북 리스트 **********/
export const get_sketchBook = form => {
   const data = fetch(getSketchBook, {
         method:'POST',
         body: form_data(form),
      }).then(res => res.json()).then(res => res);

   return data;
};
/********* 스케치북 상세보기 **********/
export const get_sketchBookDetail = (token, params) => {
   const form = {
      mb_token: token,
      sb_no: params,
   };
   
   const data = fetch(getDetailSketchBook, {
      method:'POST',
      body: form_data(form),
   }).then(res => res.json()).then(res => res);

   return data;
}
/********* 심리분석 신청 **********/
export const post_requestAnalysis = form => {
   
   const data = fetch(applySketchBook, {
      method:'POST',
      body: form_data(form),
   }).then(res => res.json()).then(res => res);

   return data;
};
/********* 스케치북 삭제 **********/
export const delete_sketchBook = form => {

    const data = fetch(deleteSketchBook, {
      method:'POST',
      body: form_data(form),
   }).then(res => res.json()).then(res => res);

   return data;
};
/********* 스케치북 이미지 삭제 **********/
export const delete_sketchBookImages = form => {

    const data = fetch(deleteSketchBookImage, {
      method:'POST',
      body: form_data(form),
   }).then(res => res.json()).then(res => res);

   return data;
};
/********* 스케치북 초기화 **********/
export const reset_sketchBook = token => {

    const data = fetch(resetSketchBook, {
      method:'POST',
      body: form_data(token),
   }).then(res => res.json()).then(res => res);

   return data;
};
/********* 회원정보 수정  **********/
export const update_member = form => {

    const data = fetch(updateMember, {
      method:'POST',
      body: form_data(form),
   }).then(res => res.json()).then(res => res);

   return data;
};
/********* 회원 탈퇴 **********/
export const leave_member = token => {

    const data = fetch(memberLeave, {
      method:'POST',
      body: form_data(token),
   }).then(res => res.json()).then(res => res);

   return data;
} 


