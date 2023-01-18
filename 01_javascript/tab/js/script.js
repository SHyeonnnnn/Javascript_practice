const targetLink=document.querySelectorAll('.tab-menu a');        // targetLink = .tab-menu a 전부다 (#tabs-1,2,3 버튼)
const tabContent=document.querySelectorAll('#tabContent>div')     // tabContent = #tabContent>div 전부다 (#tabs-1,2,3 내용)

for(let i=0; i<targetLink.length; i++){                       // 1. 탭버튼의 갯수만큼 반복하는 반복문 선언
    targetLink[i].addEventListener('click',function(e){       //targetLink[i]=0,1,2 총 3개 요소 클릭하면 발생하는 함수 e선언 = 탭버튼 클릭하면 발생하는 함수
        let orgTarget=e.target.getAttribute('href');          //e함수의 타겟(클릭하는요소)의 속성 'href'을 가져오는 변수 = orgTarget
        let tabTarget=orgTarget.replace("#","");              //href 속성값에서 #을빼는 변수 = tabTarget
        for(let j=0; j<targetLink.length; j++){               // 2. 탭버튼의 갯수(3)만큼 반복하는 반복문 선언
            targetLink[j].classList.remove('active');         //탭버튼 클래스 삭제 'active'
            e.target.classList.add('active');                 //클릭하는 탭버튼 클래스 추가 'active' = css스타일 적용
        }
        for(let k=0; k<tabContent.length; k++){               // 3. 본문 갯수만큼 반복하는 반복문 선언
            tabContent[k].style.display='none'                //일단 사라지게 만듬
        }
        document.getElementById(tabTarget).style.display='block'  // 4. href 에서 #을 뺀 tabs-1,2,3 중 클릭하는거 보여주게
    })
}

// 1.번의 역할 = 클릭하는 탭버튼의 href 값 가져옴
// 2.번의 역할 = 가져온 href값에 active 클래스 추가
// 3.번의 역할 = 
// 4.번의 역할 = 






//1번째 for문은 탭버튼 클릭하면 발생하는 함수만들고
//1번째 for문 안에 -> function(e) 안에 -> 변수선언 2개는 탭버튼의 속성값을 가져와 앞단어 #을 빼는 역할을 하는 변수
//1번째 for문 안에 -> function(e) 안에 -> 첫번째 for 문은 클릭하면 모든 탭버튼의 active를 일단 삭제 후 클릭당하는 탭버튼에 active 클래스를 추가해서 css 스타일을 적용시킨다.
//1번째 for문 안에 -> function(e) 안에 -> 두번째 for 문은 본문 3개를 일단 안보이게 하는 역할
//1번째 for 문안 -> function 밖의 -> for 문은 function에서 가져온 본문 아이디(클릭당하는 탭버튼의 속성값에서 #을뺀 본문 div의 아이디 tabs-1,2,3)를 디스플레이 블록으로 변경해 보여주는 역할