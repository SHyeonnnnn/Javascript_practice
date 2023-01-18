const videoPlay=document.getElementById('videoPlay');
const vplay=document.getElementById('vplay');
const vpause=document.getElementById('vpause');
const muted=document.getElementById('muted');
const soundon=document.getElementById('soundon');

vplay.addEventListener('click',function(){
    videoPlay.play();
})
vpause.addEventListener('click',function(){
    videoPlay.pause();
})
muted.addEventListener('click',function(){
    videoPlay.muted=true;
})
soundon.addEventListener('click',function(){
    videoPlay.muted=false;
})