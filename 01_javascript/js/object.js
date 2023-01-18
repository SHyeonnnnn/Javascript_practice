//객체란? 특정 기능을 수행하는 단위체
//휴대폰.통화하기(); //메서드
//휴대폰.색상; //속성

const today= new Date(); //현재 날짜
const nowDay= today.getDay(); // 0~6(일, 월, 화, 수, 목, 금, 토)
if(nowDay==1){
    console.log("월요일");
}else if(nowDay==2){
    console.log("화요일");
}else if(nowDay==3){
    console.log("수요일");
}else if(nowDay==4){
    console.log("목요일");
}else if(nowDay==5){
    console.log("금요일");
}else if(nowDay==6){
    console.log("토요일");
}else{
    console.log("일요일");
}

let today1= new Date(1991,11,18,11,30,11,11);
console.log("내가 태어난 날짜는",today1.getMonth(),"월",today1.getDate(),"일");
today1.setDate(20); // 날짜변경
console.log("내가 태어난 날짜는",today1.getMonth(),"월",today1.getDate(),"일");

let birth=new Date("june 1, 2002"); //월드컵 경기

let birthtime=birth.getTime();
let todaytime=today.getTime();
let day=Math.ceil((todaytime-birthtime)/24/60/60/1000);//시간/분/초/천분의일초
console.log("월드컵이 "+day+"일 지났습니다.")


//window object
//1.alert(경고창);
// alert("무슨소린지몰루겄다");
//2.confirm
/* let yesNo=confirm("정말 삭제하시겠습니까");
console.log(yesNo); */ //확인 = true , 취소 = false 값 반환

//3.prompt(묻고 답하기);
/* let txt=prompt("무슨소린지 이해가십니까??","고롬");
if(txt==null){
    console.log("값을 입력해 주세요");
}else if(txt==""){
    console.log("값을 입력해 주세요");
}else if(txt!==""){
    console.log(txt);
} */
/* window.open("https://naver.com");  웹사이트열기(네이버)*/
// window.print();

//setTimeout
/* setTimeout(function(){
    console.log("5초후 실행");
},5000); */
//setInterval
/* let i=0;
let fnc=setInterval(function(){
    console.log(i);
    if(i==3){
        clearInterval(fnc);
    }
    i++
},3000); */

//browser object
//document
//navigator
/* let win=navigator.appCodeName;
console.log(win); */
//location
/* let win=location;
console.log(win); */
//screen
/* let win=screen;
console.log(win); */
//history
let win=history;
console.log(win);