const videoPlay=$('#videoPlay')

$('#vplay').click(function(){
    videoPlay.get(0).play();
});
$('#vpause').click(function(){
    videoPlay.get(0).pause();
});
$('#muted').click(function(){
    videoPlay.get(0).muted=true;
});
$('#soundon').click(function(){
    videoPlay.get(0).muted=false;
});