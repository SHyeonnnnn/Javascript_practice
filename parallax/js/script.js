const bigYellowCircle=document.querySelector('#bigYellowCircle');
const blueSquare=document.querySelector('#blueSquare');
const greenPentagon=document.querySelector('#greenPentagon');

let xScrollPosition;
let yScrollPosition;

window.addEventListener("DOMContentLoaded", scrollLoop)
function setTranslate(xPos,yPos,el){
    // el.style.transform="translate3d("+xPos+","+yPos+"px, 0)";
    el.style.transform=`translate3d(${xPos}px,${yPos}px,0)`;
}

function scrollLoop(){
    xScrollPosition=window.scrollX;
    yScrollPosition=window.scrollY;

    setTranslate(0, yScrollPosition * -0.5, bigYellowCircle);
    setTranslate(0, yScrollPosition * -0.2, blueSquare);
    setTranslate(0, yScrollPosition * 0.1, greenPentagon);
    requestAnimationFrame(scrollLoop); //웹브라우저에게 수행하기를 원하는 애니메이션을 알리고 업데이트하는 함수
}