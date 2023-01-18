$(window).resize(function(){
   
  
    var boxWidth = $('img').width();
    console.log(boxWidth)
    //max-width값인 500px아래서만 작동
    if(boxWidth < 1920){
    	//1.681:1
        $('#main').height(boxWidth*0.57);
    }
});
