// 공백 체크
export const checkSpace = str => {
   if (!str) return;

   if(str.search(/\s/) != -1) {
		return true;
	} else {
		return false;
	}
};

// 특수 문자 체크
export const checkSpecial = str => {
   if (!str) return;

	var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

	if(special_pattern.test(str) === true) {
		return true;
	} else {
		return false;
	}
};

// 비밀번호 패턴 체크 (8자 이상, 문자, 숫자, 특수문자 포함여부 체크)
export const checkPasswordPattern = str => {
   if (!str) return;
   
	var pattern1 = /[0-9]/;				// 숫자
	var pattern2 = /[a-zA-Z]/;			// 문자
	// var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;	// 특수문자
	if(!pattern1.test(str) || !pattern2.test(str) || str.length < 8) {
		return true;
	} else {
		return false;
	}
};

// 이메일 체크
export const checkEmail = str => {
   if (!str) return;
   
	var special_pattern = /[@]/;

	if(special_pattern.test(str) === true) {
		return false;
	} else {
		return true;
	}
};