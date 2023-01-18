//1. use strict
/* 'use strict'; */

//2. variable 변경 될수 있는 값 rw(read/write) - 읽고 쓰기가가능
//let, const, var
//let, var 키워드는 재할당 가능
let name='ksh'
console.log(name);
name='hello';
console.log(name);
//const는 재할당 불가능
const name1='ksh1'
console.log(name1);
/* name1='hello';
console.log(name1); */

//block scope 이란 {}안에 변수 지정하면 블럭 안에서만 볼수 있다.
let globalName="hyeons"; //전역변수 - 메모리에 탑재되어 있기 때문에 어디서든 불러내면 나타남
{
    let names='hyunRoom'; //지역변수 - 
    //console.log(names);
    names='hello1';
    var num=1;
    console.log(num);
    
}
//console.log(names);
/* console.log(names); */
console.log(globalName);
console.log(num); //var는 block scope를 철저히 무시함. 즉 선언하지 않아도 값을 어디서든 가져옴.
//var로 만든것은 let으로 변환하면 될듯함

//var
//현업에선 잘 안씀
//var hoisting - 어디에 선언이 되었는지 상관없이  맨 상단으로 끌어올려 주는것
//대부분은 프로그램 언어에서는 변수를 선언하고 그 값을 할당하는 것이 정상
//자바스크립트 var에서는 선언도 하기 전에 값을 할당하고 심지어 값을 할당하기 전에 출력도 할수 있음

/* console.log(age);
var age;
age=5; */

console.log(age);
age=5;
console.log(age);
var age;

//3. const -r(read only) 읽기만 가능 한번 할당하면 변하지 않는 값
//보안상 다른 해커가 값을 변경하는 것을 막을수있음
//실수를 방지 할수 있다.
const daysInWeek=7;
//변경가능(Mutable)-let, 변경불가능(Immutable)-const

//4. variable types
//primitive(더이상 나눠질수 없는 타입)-number, string, boolean, null, undefined, symbol
//object (객체 single item들을 묶어서 한 박스로 관리해 줌)
//function, first-class function-변수로 할당이 가능 인자값 리턴 타입이 가능
/* function name (){
    return
} */
const count=17;
const size=26.3;
console.log('value:' + count +', type:'+ typeof count);
console.log(`value: ${count}, type: ${typeof count}`);//''는 문자로 읽음 ``로 하면됨 //템프럴 리터럴
console.log(`value: ${size} , type: ${typeof size}`);//템프럴 리터럴

//number 
const infinity=1/0; //무한한 값이 발생
const negativeInfinity=-1/0; //무한한 -값이 발생
const nAn='not a number' /2; //문자열
const plus=5+8;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
console.log(plus);

//string - 문자와 변수를 연결할때 백틱을 사용하면 쉽게 표현할수 있음
const char='c';
const jee='jee';
const hyun='hello '+jee
const hyuns='hi '+1
console.log(hyun);
console.log(`value:${hyun}, type:${typeof hyun}`);
console.log(`value:${hyuns}, type:${typeof hyuns}`);

//boolean 참 거짓
//false: 0, null(강제로비워놓는거), undefind(아직정의안됨), NaN, ''
//true: 1, 저거 위에거 빼고 전부다 (내용이나 값이 들어있는 나머지 전부다)

const canRead=true;
const test=3<1;
console.log(`value:${canRead}, type:${typeof canRead}`);
console.log(`value:${test}, type:${typeof test}`);

//null
let nothing=null; //아무것도 아닌것, 내가 지정해준거 고의로
console.log(`value:${nothing}, type:${typeof nothing}`)

//undefind
let x; //값지정x
console.log(`value:${x}, type:${typeof x}`)

//symbol
const symbol1=Symbol('id'); //우선 순위를 주고 싶을 때 고유한 식별자가 필요할때 사용
const symbol2=Symbol('id'); 
console.log(symbol1===symbol2);

//똑같이 만들고 싶으면
const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2);

//심볼은 바로 출력하면 오류가 남
// console.log(`value:${gSymbol1}, type: ${typeof gSymbol1}`)
// .description 문자열로 변환
console.log(`value:${gSymbol1.description}, type: ${typeof gSymbol1}`)

//Dynamic typing
let text='hello';
console.log(text.charAt(88-88));
console.log(`value:${text}, type:${typeof text}`);
text=1;
console.log(`value:${text}, type:${typeof text}`);
text='5'+6;
console.log(`value:${text}, type:${typeof text}`);

//숫자로 변환
text='8'/'2';
// console.log(`value:${text}, type:${typeof text}`);
console.log('value: ' + text + ', type: ' + typeof text);

//object
const ji={name:'hyun', age: 22, address:'서울 종로구'}
ji.age=21;
console.log(ji)