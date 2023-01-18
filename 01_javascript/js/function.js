//function - input output
//API - Application Programmming Interface 함수의 이름을 보고 무슨일을 하는지 예상할수 있음
//function name(param1, param2,...매개변수){실행문(코드)} - 특정 기능을 수행하도록 작성된 코드 블록

function printHello(){
    console.log('Hello'); //이건 문자
}
printHello(); //함수는 불러줘야 실행함

function log(message){
    console.log(message); //이건 변수
}
log('Hi Shyeon');
log('Hion');
//파라미터로 메세지를 전달하면 전달된 메세지가 나옴

//2.parameters 파라미터(매개변수)
//불러낼때 인자값(argument)?
//premitive(원시적) parameter
//object parameter
/* function changeName(object){
    object.name='aa'
}
const jee={name:'aaaaa'}
changeName(jee);
console.log(jee); */

/* function showMessage(message, from){
    if(from===undefined){
        from='unknown';                                               //1방법
    }
    console.log(`${message} by ${from}`);
} */

function showMessage(message, from='unknown'){
    console.log(`${message} by ${from}`);
}                                                                     //2방법

showMessage('hi','jee');                                              //함수불러내는거

//3.Rest parameters
function printAll(...args){//배열 형태로 전달
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
    for(const arg of args){                                         
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('jee','hyun','yun','on');

//4. local scope
//자바스크립트 스코프란  {} - 밖에서는 {}안에 잇는것이 보이지 않고 안에서만 보임.
let globalMessage='global'; //전역변수
function printMessage(){
    let message='hello';//local(지역변수)'
    console.log(message);
    console.log(globalMessage);

    function printAnother(){//함수안에 함수를 정의 할수 있는데 부모의 변수를 가져올수 있는데 이런것을 클로저라고 한다.
        console.log(message);
        /* let childMessage='helloo';
        console.log(childMessage); */
    }
    printAnother();
}
printMessage();

//5. return a value
function sum(a,b){
    return a+b;//return문을쓰면 저거쓰고 끝내라는 뜻이라서 리턴문 밑에는 실행이안됨
}
const result=sum(7,9);
console.log(`sum:${result}`)
console.log(`sum:${sum(7,9)}`)
console.clear();

function upgradeUser(user){
    if(user.point>10){
        //긴 로직 
    }
}
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    로직
}
//6. 함수 표현식 (function expression)
//호이스팅이 됨. 변수를 선언하기 전에도 호출이 가능

const print=function(){
    console.log('abc')
}
/* function print(){
    console.log('print')
} */
print();
const printAgain=print;
printAgain();

const sumAgain=sum;
console.log(sumAgain(1,2));

//함수 호이스팅 - 함수가 선언되기 전에 호출해도 실행이 되는것을 말함. 자바스크립 엔진이 제일 위로 올려주는 차이점이 있음

//7. 즉시 실행함수 - 함수를 선언하면 불러줘야 하는데 함수 선언과 동시에 불러 내는 방법
/* function hello(){
    console.log('나야 나')
}
hello(); */

(function hello(){
    console.log('ssssss');
})();

(() => {
    console.log('sadf');
})();

//이름이 없는 함수
const printYes=function(){
    console.log('qqqq');
}
// printYes();

//이름이 있는 함수
const printNo=function print(){
    console.log('함수2');
}
/* function randomQ(answer, printYes, printNo){
    if(answer==='love'){
        printYes();// 콜백 함수
    }else{
        printNo();//콜백 함수
    }
} */



//Arrow function 익명함수
/* const randomQ=(answer, printYes, printNo) => {
    if(answer==='love'){
        printYes();// 콜백 함수
    }else{
        printNo();//콜백 함수
    }
}
randomQ("d", printYes, printNo); */ //익명함수는 호이스팅이 일어나지 않음


//기명함수
const randomQ1=function randomQ2(answer, printYes, printNo){
    if(answer==='love'){
        printYes();// 콜백 함수
    }else{
        printNo();//콜백 함수
    }
}
randomQ1("d", printYes, printNo); //기명 함수 표현함수이름으로 함수 실행이 되지 않음
//에러가 발생했을때 에러를 찾기 쉽게 해주는 장점이 있어서

//즉시실행함수 기명 즉시실행함수
/* (function squar(x){
    console.log(x*x);
})(2); */
(function squar(x){
    console.log(x*x);
}(2));

//즉시실행함수 익명 즉시실행함수
(function (y){
    console.log(y*y);
})(3);
(function(y){
    console.log(y*y);
}(5));

//변수에 즉시 실행 함수 저장
(mySquare=function(z){
    console.log(z*z)
})(2);
mySquare(4);

//즉시실행함수를 사용하는 이유? 초기화 즉 즉시 실행함수는 한번의 실행만 필요로 하는 초기화 코드 부분에 많이 사용

//함수 레벨 스코프(funct level scope)
function functionLevelScope(){
    if(true){
        var myScope="function level scope"; //var는 블록{}을 무시함
    }
    console.log(myScope);
}
functionLevelScope();

//블록 레벨 스코프(funct level scope)
function blockLevelScope(){
    if(true){
        let myScope="block level scope"; //let const는 블록{}안에있는것만 실행/되도록이면 블록안에서 실행되게해야 큰프로젝트할때 충돌이없음
        console.log(myScope);
    }
    //console.log(myScope); = 에러뜸
}
blockLevelScope();