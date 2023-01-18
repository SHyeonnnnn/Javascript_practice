const word=document.getElementById('word');
const text=document.getElementById('text');
const scoreEl=document.getElementById('score');
const timeEl=document.getElementById('time');
const endgameEl=document.getElementById('end-game-container');
const settingsBtn=document.getElementById('settings-btn');
const settings=document.getElementById('settings');
const settingsForm=document.getElementById('settings-form');
const difficultySelect=document.getElementById('difficulty');

const words = [
    'loving',
    'drag',
    'admit',
    'eight',
    'silver',
    'orange',
    'steer',
    'ball',
    'sigh',
    'tense',
    'pies',
    'juice',
    'bad',
    'cool',
    'light',
    'feeling',
    'apple',
    'coffee',
    'javascript',
    'superficial',
    'pandemic',
    'fuckchina',
    'iphone',
    'gana'
];

let randomWord;
let score=0;
let time=10;

text.focus();

const timeInterval=setInterval(updateTime,1000);
function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
};
function addWordToDOM(){
    randomWord=getRandomWord();
    word.innerHTML=randomWord;
};

//1씩증가하는 점수
function updateScore(){
    score++;
    scoreEl.innerHTML=score;
};
//시간
function updateTime(){
    time--;
    timeEl.innerHTML=time + 's';
    if(time===0){
        clearInterval(timeInterval);
        gameOver();
    }
};
//게임오버창
function gameOver(){
    endgameEl.innerHTML=`
        <h1>Time run out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Reload</button>
    `;
    endgameEl.style.display='flex'
};

//문제와 답이 일치하는지
//일치하면 점수 1씩 증가 updateScore();
text.addEventListener('input', e => {
    const insertedText=e.target.value; //내가입력하는단어
    if(insertedText===randomWord){ //입력단어와 문제가 일치하면
        updateScore(); //점수 1증가
        addWordToDOM(); //다음문제 넘어감
        //clear
        e.target.value='';
        //난이도
        if(difficultySelect==='hard'){
            time +=2;
        }else if(difficultySelect==='medium'){
            time +=3;
        }else{
            time +=5;
        };
        updateTime();
    }
})
addWordToDOM();

settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));