import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   token:'',
   loginCheck: false,
   userData:{},
   sketchbook:{
      filter:'', // 검사완료: '0', 분석중: '1', 신청 대기 중: '2', 작성일순: '3'
      list:[], // 스케치북 리스트
      detail:{}, // 스케치북 상세보기
      slideIndex:0,  // 스케치북 슬라이드 index 
   },
};

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      // 토큰 값 저장
      getToken: (state, action) => {
         state.token = action.payload;
      },
      // 유저 데이터 저장
      fetchData: (state, action) => {
         state.userData = action.payload;
         state.token = action.payload.mb_token;
         state.loginCheck = true;
      },
      // 유저 데이터 제거
      removeData: state => {
         state.userData = {}; // 유저 정보 제거
         state.token = ''; // 토큰 값 제거
         state.sketchbook.list = []; // 스케치북 리스트 제거
         state.loginCheck = false;
      },
      // 스케치북 리스트 저장
      fetchSketchbook: (state, action) => {
         state.sketchbook.list = [
            ...state.sketchbook.list,
            ...action.payload,
         ]
      },
      refreshSketchbook: (state, action) => {
         state.sketchbook.list = action.payload;
      },
      // 스케치북 추가 
      addSketchBook: (state, action) => {
         const sketchbookList = [
            {
               ...action.payload,
            },
            ...state.sketchbook.list
         ];
         
         state.sketchbook.list = sketchbookList;
      },
      // 스케치북 이미지 추가
      addSketchBookImages: (state, action) => {
         const sketchbookFilter = state.sketchbook.list.map(arg => {
            if(arg.sb_id === action.payload.sb_id) {
               return {
                  ...arg,
                  sf_count: action.payload.files.length
               }
            } 
            return arg
         });
         state.sketchbook.detail.files = [...action.payload.files];
         state.sketchbook.list = sketchbookFilter;
      },
      // 스케치북 리스트 필터 값
      filterSketchbook: (state, action) => {
         state.sketchbook.filter = action.payload;
      },
      // 스케치북 상세보기
      fetchSketchbookDetail: (state, action) => {
         state.sketchbook.detail = action.payload;
      },
      // 스케치북 이미지 체크
      checkSkertchbookImage: (state, action) => {
         const checkfilterState = state.sketchbook.detail.files.map(arg => {
            if(arg.sf_no === action.payload) {
               return {
                  ...arg,
                  checked : !arg.checked
               }
            }
            return arg;
         });
         state.sketchbook.detail.files = checkfilterState;
      },
      // 스케치북 이미지 체크 해제
      removeCheckSkertchbookImage: state => {
         const checkfilterState = state.sketchbook.detail.files.map(arg => ({
            ...arg,
            checked: false,
         }));

         state.sketchbook.detail.files = checkfilterState;
      },
      // 스케치북 이미지 삭제
      deleteSketchbookImage: (state, action) => {
         const sketchbookFilter = state.sketchbook.list.map(arg => {
            if(arg.sb_id === action.payload.sb_id) {
               return {
                  ...arg,
                  sf_count: action.payload.files.length
               }
            } 
            return arg
         });

         state.sketchbook.detail.files = action.payload.files;
         state.sketchbook.list = sketchbookFilter;
      },
      // 스케치북 삭제
      deleteSketchbook: (state, action) => {
         const filterSketchBook = state.sketchbook.list.filter(arg => arg.sb_id !== action.payload);
         state.sketchbook.list = filterSketchBook;    
      },
      // 스케치북 초기화
      resetSketchbook: state => {
         state.sketchbook.list = [];
         state.sketchbook.detail = {};
      },
      // 회원정보 수정
      updateMember: (state, action) => {
         state.userData.mb_name = action.payload.mb_name;
         state.userData.mb_email = action.payload.mb_email;
      },
      // 스케치북 이미지 초기 슬라이드 이미지 인덱스
      slideImageIndex: (state ,action) => {
         state.sketchbook.slideIndex = action.payload;
      }
   },
});

export const { 
   getToken, 
   fetchData, 
   removeData, 
   fetchSketchbook,
   refreshSketchbook, 
   addSketchBook,
   addSketchBookImages,
   filterSketchbook,
   fetchSketchbookDetail,
   checkSkertchbookImage,
   removeCheckSkertchbookImage,
   deleteSketchbook,
   deleteSketchbookImage,
   resetSketchbook,
   updateMember,
   slideImageIndex,
} = userSlice.actions;

export default userSlice.reducer;