//010-7777-8888
//011-1111-2222
//010-222-3334
//016-2222-4444
//017 5646 8496
//018 5132 5321
//019 6223 5486



/* var regexphone=/(^01[016789]{1})-([0-9]{3,4})-[0-9]{4}$/g;
var regExp = /^\d{3}-\d{3,4}-\d{4}$/;
console.log(regexphone.test("010-5555-2225"));
console.log(regExp.test("010-5555-2225"));

var regexTel=/\d{2,3}-\d{3,4}-\d{4}$/g;
console.log(regexTel.test("055-391-3610"));


//cjh7652@hanmail.net
//12sjes-k1sA@daum.net
//sfeA-wefl11s@flw5_se-co.kr
var regexEmail=/^[a-zA-Z0-9]([-_.]?[0-9a-zA-Z])*@[a-zA-Z0-9]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/g;
var regexEmail2=/^\w+([\.-]?\w+)*@\w+([\.-_]?\w+)*(\.\w{2,3})+$/g;
console.log(regexEmail2.test("sfeA-wefl11s@flw5_se-co.kr"));

//비밀번호
//특수문자, 문자 ,숫자 포함하고 8~16자리 이내의 값


var regexPW=/^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])|(?=.*[!@#$%^&*+=)]).*$/; //|이 있으면 특수문자는 들가도되고 안들가도된다.
console.log(regexPW.test("123cj##wwww"));

//숫자문자 포함 형태의 6~12글자

var regexPw=/^[a-zA-Z0-9]{6,12}$/g;
console.log(regexPw.test("123wwww"));


const tell='010-1234-5678'
const regExpTel=/^\d{3}-\d{4}-\d{4}$/;
console.log(regExpTel.test(tell)); */

const target="Is this all there is?";
const regexpis=/is/i;
console.log(target.replace(regexpis));
