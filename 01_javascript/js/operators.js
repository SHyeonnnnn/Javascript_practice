// 1. 문자 결합 (string concatenation)
console.log('my'+'hyun');
console.log('my'+2);
console.log(`string literals : 1+2=${1+2}`);

// 2. 숫자 연산자 (numberic operators)
console.log(1+1)
console.log(10-1)
console.log(10*1)
console.log(10/2)
console.log(10%3)
console.log(2**3)

// 3. 증감 연산자(Increment and decrement operators)
let counter=3;
const preIncrement=counter++
console.log(`preIncrement: ${preIncrement}, counter: ${counter} `)
let counter1=3;
const preIncrement1=--counter1
console.log(`preIncrement: ${preIncrement1}, counter: ${counter1} `)

// 4. 할당 연산자(Assignment operators)
let x=3;
let y=6;

x +=y //x=x+y = 9
x -=y //x=9-6 = 3
x *=y //x=3*6 =18
x /=y //x=18/6 =3
console.log(x)

// 5. 비교 연산자 (Comparison operators)
console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

// or(||), and(&&), not(!)
// or의 경우 여러개중에 하나라도 참이있으면 참
// 첫번째가 참이면 더이상 다음 연산자를 안읽음
// 가벼운 연산자를 제일 먼저 둬서 읽어오게 만드는 것을 추천

const value1=false
const value2= 4<2;
function check(){
    for (let i=0; i<10; i++){
        console.log('happy'+i);
    }
    return true;
}
console.log(`or:${check() || value1 || value2 }`)
console.log(`and:${check() && !value1 && !value2 }`)

//!(not) 부정의 의미
console.log(!value1)

// 6. 같다(Equality)
const stringFive='5';
const numberFive=5;
console.log(stringFive==numberFive);
console.log(stringFive===numberFive);

const hyun1={name:'hyun'}
const hyun2={name:'hyun'}
const hyun3=hyun1;
console.log(hyun1==hyun2)
console.log(hyun1===hyun2)
console.log(hyun1===hyun3)

console.log(0==false); //true
console.log(0===false); // false 0은 boolean 타입이 아니기 때문
console.log(''==false) //true
console.log(''===false) // false 마찬가지로 불린타입이 아니라서
console.log(null==undefined);//true
console.log(null===undefined);//false

// 7. 반복문(loops)
//while문 조건이 틀리면 아예 실행을 안함
let i=10;
while(i<0){
    console.log(`while: ${i}`)
    i--;
}
let t=5
// do while문 일단 실행하고 조건봄 (한번은 실행)
do{
    console.log(`dowhile: ${t}`)
    t--;    
}while(t>0)

// for문 
/* for(시작값; 조건값; 증가또는감소값){
    실행문
} */
for(let i=0; i<=10; i++){
    console.log(`for:${i}`)
}
for(let i=3; i>0; i--){
    console.log(`for:${i}`)
}

//중첩 nested
for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        console.log(`i:${i}, j:${j}`)
    }
}

//continue(반복문에서 지금것만 스킵하고 다른것 실행)

for(let i=0; i<=10; i++){
    if(i%2 === 0){
        continue;
    }
    console.log(`${i}`)
}

//break(반복문에서 완전히 끝내는것)

for(let i=0; i<=10; i++){
    if(i>8){
        break;
    }
    console.log(i)
}

//if, else if, else
const names='ss';
if(names=='hyun'){
    console.log('Welcome hyun');
}else if(names=='coder'){
    console.log('Welcome coder');
}else{
    console.log('unKwnon');
}

//삼항조건연산자
//condition ? value1 : value2   ------->?를 기점으로 참이면 value1 거짓이면 value2
console.log(names==='minji'? 'yes' : 'no');

// let gender=prompt('당신의 성별은 뭐에요','여성');
// let age=prompt('당신의 나이는 뭡니까잉','20');
//20대여성이면 true, 아니면 false

/* if(gender=='여성'){
    
}else if(age==20){
    console.log('true')
}else{
    console.log('false')
}     내가한거 */
// if(age>=20 && age < 30 && gender=="여성"){
//     console.log('true')
// }else{
//     console.log('false')
// }

//prompt 매서드를 활용하여 국어, 영어 수학 점수를 입력 받으세요. 평균이 70점 이상이고 각 과목별 점수가 60점 이상이면 true 아니면 false

// let kor=Number(prompt('국어점수 몇점?','')) string을 number로 바꾸는거
/* let kor=Number(prompt('국어점수 몇점?',''))
let eng=Number(prompt('영어점수 몇점?',''))
let math=Number(prompt('수학점수 몇점?',''))
let aver=(kor+eng+math)/3;
console.log(aver)
if(aver>=70 && kor>=60 && eng>=60 && math>=60){
    console.log('true')
}else{
    console.log('false')
} */
//지현샘의 지출 내역은 교통비 3,000원 식비 7,000원, 음료비 2,000원 입니다. 삼항 조건 연산자를 사용하여 하루 적정 지출 비용인 1만원을 초과했을 경우 "000원 초과"라고 출력되거, 아니면 "돈 관리 참 잘했어요!"라고 출력되도록 해보세요

/* let tr=Number(prompt('교통비?',''))
let fd=Number(prompt('식비?',''))
let dr=Number(prompt('음료비?',''))
let day=(tr+fd+dr)
console.log(day>=10000 ? `${day-10000} 원 초과` : '돈 관리 참 잘했어요!'); */

//방문자에게 질이응답 창(prompt)을 이용하여 신장과 몸무게를 입력받아 옵니다. 방문자의 몸무게가 적정 몸무게보다 이상일 경우"적정 몸무게 이상", 미만일 경우에는 "적정 몸무게 미달"로 출력되도록 하세요. 적정 몸무게 공식은 '적정 몸무게=(신장-100)*0.9'
/* let kg=Number(prompt('몸무게?',''))
let cm=Number(prompt('신장?',''))
let best=(cm-100)*0.9
console.log(best)

if(kg>=best){
    console.log(`적정 몸무게인 ${best}kg에서 ${kg-best}kg 초과 `)
}else if(kg<best){
    console.log(`적정 몸무게인 ${best}kg에서 ${kg-best}kg 미달 `)
} */

//우선순위
const q=10;
const w=20;

console.log((q+w/2));
console.log((q+w)/2);
//1.()
//2.단항 연산자(-- ++ !)
//3.산술 연산자(* / % + -)
//4.비교 연산자(>,>=,<,<=,==,===,!==)
//5.논리 연산자(&& ||)
//6.대입 연산자(=,+=,-=,*=,/=,%=)

//질의 응답 창 을 이용하여 임의로 정한 변수에 시험 점수를 입력 받아 저장한 후 70점 보다 크거나 같으면 합격 출력

let nm=Number(prompt('시험점수?',''))
console.log(nm>=70 ? '합격' : '불합격')

//나이가20이상 30미만 통과 아니면 비통과

let ag=Number(prompt('나이가어떻게..',''))
if(ag>=20 && ag<30){
    console.log('통과')
}else{
    console.log('비통과')
}