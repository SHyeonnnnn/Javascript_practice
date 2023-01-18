const btnCollapse=document.getElementById('btn-collapse');        // btncollaps라는 변수 선언 (버튼)
const question=document.getElementsByClassName('panel-question'); // 헤딩과 바디를 묶는 panel-question을 가져와서 question이라는 변수 선언
const heading=document.getElementsByClassName('panel-heading');   // panel-heading을 가져와서 heading 이라는 변수 선언
const answer=document.getElementsByClassName('panel-body');       // panel-body를 가져와서 answer 라는 변수 선언

for(let i=0; i<heading.length; i++){                     // i가 heading의 갯수 보다 적으면 i를 1씩 증가하는걸 반복 =  0,1,2
    heading[i].addEventListener('click', function(e){    // heading의 0,1,2 총 세개, 를 클릭하면 발생하는 이벤트 = e
        for(let j=0; j<question.length; j++){            //
            question[j].classList.remove('active');      // 클릭 하면 question 전체의 active라는 클래스를 삭제
            e.target.parentNode.classList.add('active'); // 'e=클릭하는 대상(heading)' 의 부모요소(question)에 active라는 클래스 추가
            activeBody();                                // activeBody 라는 함수 실행
        }
    })
};

function activeBody(){                  // 바디 전체 숨긴다음 .active 밑의 바디는 보여주라는 함수이다.
    for(let i=0; i<answer.length; i++){
        answer[i].style.display='none'; // [i]=0,1,2라는 배열이라는뜻, 바디의 0,1,2 총 세개의 스타일속성 display를 none 시킨다. = 바디 숨겨라
    }
    let activePanel=document.querySelector('.panel-question.active .panel-body'); // .active 클래스 밑의 바디를 선택해서
    activePanel.style.display='block';                                            // 디스플레이 블록으로 보여줘라
};


btnCollapse.addEventListener('click',function(){  // 버튼을 누르면 바디를 숨기라는 함수이다.
    for(let i=0; i<answer.length; i++){
        answer[i].style.display='none'; // 숨기는거
    }
})
activeBody(); // 바디 또숨김

