const main=document.querySelector('main');
const voicesSelect=document.getElementById('voices');
const textarea=document.getElementById('text');
const readBtn=document.getElementById('read');
const toggleBtn=document.getElementById('toggle');
const closeBtn=document.getElementById('close');
const data = [
    {
        image: './img/drink.jpg',
        text:"저 목말라요"
    },
    {
        image: './img/food.jpg',
        text:"배고파요"
    },
    {
        image: './img/tired.jpg',
        text:"졸려요"
    },
    {
        image: './img/hurt.jpg',
        text:"아프다고"
    },
    {
        image: './img/happy.jpg',
        text:"야호"
    },
    {
        image: './img/angry.jpg',
        text:"아오빡쳐"
    },
    {
        image: './img/sad.jpg',
        text:"슬퍼요"
    },
    {
        image: './img/scared.jpg',
        text:"엄마"
    },
    {
        image: './img/outside.jpg',
        text:"놀고싶어요"
    },
    {
        image: './img/home.jpg',
        text:"좋은집에살고싶어요"
    },
    {
        image: './img/school.jpg',
        text:"학원은공부하는곳"
    },
    {
        image: './img/grandma.jpg',
        text:"할머니사랑해요"
    }
];

toggleBtn.addEventListener('click',() => {
    document.getElementById('text-box').classList.toggle('show')
});
closeBtn.addEventListener('click',() => {
    document.getElementById('text-box').classList.remove('show')
});

data.forEach(createBox);

function createBox(item){
    const box=document.createElement('div');//div만들고

    const {image,text} =item; //구조분해할당
    box.classList.add('box');//div에 클래스 box추가
    box.innerHTML =
    `
        <img src="${image}" alt="${text}"/>
        <p class="info">${text}</p>
    `;
    box.addEventListener('click', () => {

        setTextMessage(text);
        speakText();
        console.log(text);
        box.classList.add('active')
        setTimeout(() => box.classList.remove('active'),800);
    });


    main.appendChild(box)
};

const message=new SpeechSynthesisUtterance();
let voices = [];

function getVoices(){
    voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
        const option=document.createElement('option');
        option.value=voice.name;
        option.innerText=`${voice.name} ${voice.lang}`;
        voicesSelect.append(option);
    })
};
function setTextMessage(text){
    message.text=text;
};
function speakText(){
    speechSynthesis.speak(message);
};
function setVoice(e){
    message.voice=voices.find(voice => voice.name === e.target.value);
};

voicesSelect.addEventListener('change',setVoice);

readBtn.addEventListener('click', () => {
    setTextMessage(textarea.value);
    speakText();
});

speechSynthesis.addEventListener('voiceschanged', getVoices);
getVoices();
