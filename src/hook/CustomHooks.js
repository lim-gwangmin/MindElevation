import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

/******************************************************
               input text custom hook  
*******************************************************/
// input 기본 양식 배열
export const inputField = {
   text: '',
   focus: false,
   checked: null,
};
// custom hook
export const useInputForm = arg => {
   const [ form, setForm ] = useState(arg);
   // input Text 추가
   const onChange = e =>{
      setForm({
         ...form,
         text: e.nativeEvent.text,
      });
   };

   // 포커스 인 
   const onFocusIn = () => {
      setForm({
         ...form,
         focus: true,
      });
   };
   // 포커스 아웃
   const onFocusOut = () => {
      setForm({
         ...form,
         focus: false,
      });
   };

   // 공백 및 특수문자 체크 미통과 
   const onNotPassChecked = () => {
      setForm({
         ...form,
         checked: false,
      })
   };

   // 공백 및 특수문자 체크 통과
   const onPassChecked = () => {
      setForm({
         ...form,
         checked: true,
      })
   };

   useEffect(() => {
      // 키보드 닫혔을때, 포커스 아웃
      const hideSubscription = Keyboard.addListener("keyboardDidHide", e => {
         setForm({
            ...form,
            focus: false,
         });
      });
      return () => {
         hideSubscription.remove();
      }
   });

   return [form, onChange, onFocusIn, onFocusOut, onNotPassChecked, onPassChecked];
};

/******************************************************
            header img deleted custom hook     
*******************************************************/
export const useDeleteState = arg => {
   const [ state, setState ] = useState(arg);

   const onPressDelete = () => {
      setState(true);
   };

   const onPressCancel = () => {
      setState(false);
   };

   return [ state, onPressDelete, onPressCancel ];
};