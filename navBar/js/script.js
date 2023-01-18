let $window=window;
let $header=document.getElementById('header');
let $logo=document.getElementById('logo');
let $defaultLogo='./images/logo.svg'
let $smallLogo='./images/logo-shrink.svg'
let $height=$header.offsetHeight;               //6em=96px
console.log($height);

$window.addEventListener('scroll', function(){
    if(this.pageYOffset>$height){
        if(!$header.classList.contains('shrink')){ //shrink없으면 포함하라고
            $header.classList.add('shrink');
            switchImg($smallLogo);
        }
    }else{
        if($header.classList.contains('shrink')){
        $header.classList.remove('shrink');
        switchImg($defaultLogo);
    }
}
});

function switchImg(newImgPath){
    $logo.classList.add('hide');
    setTimeout(function(){
        $logo.setAttribute('src', newImgPath);
        $logo.classList.remove('hide');
    },220);
}