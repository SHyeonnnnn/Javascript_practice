const btn=document.getElementById('submit'),
      container=document.querySelector('.container'),
      inputs=document.getElementById('inputs');

btn.addEventListener('click',function(){
    container.style.color="red";
});
container.addEventListener('mouseenter',function(){
    btn.style.background="orange"
})
container.addEventListener('mouseleave',function(){
    btn.style.background="#ddd"
    btn.style.border="none"
})

window.addEventListener('keydown',function(e){
    console.log(e.key);
})

inputs.addEventListener('focus',function(){
    this.style.background="red";
})