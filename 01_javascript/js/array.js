//자료구조 배열
//오브젝트(연관된 특징과 행동들을 묶어 놓는것)
//자료구조(비슷한 타입들을 묶어 놓는 것을 자료 구조라 합니다. 동일한 타입만 담을수 있다는 차이점이 있음)
//1. 배열 선언하는 방법
const arr1=new Array();
const arr2=[1,2];

const fruits=['사과','바나나','체리','🎨'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);
// console.clear();

// Looping over an array

//for
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

//for each
fruits.forEach(function(fruit,index,array){
    console.log(fruit,index);
})

//for of
for(let fruit of fruits){
    console.log(fruits);
}
//add, delete, copy
fruits.push('apple','banana'); //뒤에다 껴놓기
console.log(fruits);
fruits.pop(); //맨뒤에거 지움
console.log(fruits);

fruits.unshift('딸기','레몬') //앞에다 껴놓기
console.log(fruits);

fruits.shift(); //앞에거 지움
fruits.shift(); //앞에거 지움
console.log(fruits); 

//뒤에 있는 데이터는 빈곳에서 넣었다 뺐다 하기 때문에 속도가 빠르지만 앞에서 추가하고 삭제 하는 것은 기존에 있는 데이터들의 순서를 바꾸고 추가 삭제해야 하기 때문에 느려짐
//splice - 지정된 위치에서 데이터 삭제
fruits.push('오렌지','망고',"귤")
console.log(fruits);
fruits.splice(1,2); //시작하는 인덱스 번호, 부터 몇개 지울건지
console.log(fruits);
fruits.splice(1,1,'딸기'); //딸기 넣기
console.log(fruits);

//combine
const fruites2=['복숭아','참외'];
const newFruits=fruites2.concat(fruits); // 합치는겨
console.log(newFruits);

//searching
//indexOf/includes
console.log(fruits);
console.log(fruits.indexOf('사과')); // 몇번째 있는지 알랴쥼
console.log(fruits.indexOf('복숭아')); //-1은 없다는뜻
console.log(fruits.includes('귤')); // 참거짓으로 알랴쥼
console.log(fruits.includes('복숭아')); //false

//lastIndexOf
fruits.push('사과','복숭아');
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));

//구분자
{
    const fruits=['apple','banana','orange'];
    const result= fruits.join('//');
    console.log(result);
}

{
    const fr='사과, 키위, 바나나, 체리';
    const result= fr.split(',',2);
    console.log(result);
}

{
    const str = 'The quick brown fox jumps over the lazy dog';
    const words=str.split(" ");
    console.log(words[3]);
    
    const chars=str.split('');
    console.log(chars[8]);
}

{
    const array=[1,2,3,4,5];
    const result=array.reverse();
    console.log(result);
    console.log(array); //변화시킴
}

{
    const array=[0,1,2,3,4];
    const result=array.slice(2,5); //시작부터 전까지 표현
    console.log(result);
    console.log(array);
}

class Student{
    constructor(names, age, gender, enrolled, score){
        this.names=names;
        this.age=age;
        this.gender=gender;
        this.enrolled=enrolled;
        this.score=score;
    }
}
const students=[
    new Student('지현','21','여성', true, 45),
    new Student('연주','32','여성', false, 80),
    new Student('우현','43','남성', true, 90),
    new Student('진수','27','남성', false, 66),
    new Student('지영','40','여성', true, 88),
]

{
    const result=students.find(function(student, index){
        // console.log(student, index);
        return student.score===90;
    });
    console.log(result);
}
// {
//     const result = students.filter(function(student){
//         return student.enrolled===true
//     });
//     console.log(result);
// }

{
    const result= students.filter((student) => student.enrolled);
    console.log(result);
}
//map 원본을 바꾸지않음
{
    const result=students.map((student) => student.score)
    console.log(result);
    console.log(students);
}

//some 콜백함수에 값이 있는지 없는지 확인하는것
//every 모든 요소들이 충족해야 true를 나타냄
{
    const result=students.some((student)=>student.score < 50)
    console.log(result);
}
{
    const result1=students.every((student)=>student.score < 95)
    console.log(result1);
}