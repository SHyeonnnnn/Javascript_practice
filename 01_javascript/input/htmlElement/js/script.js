const val=document.getElementById('text1').value="점심시간은 한시간 좀 더 남았어"
console.log(val);

function save(){
    /* let saveText=document.getElementById('text1').value="쉬는시간 다가옴";
    console.log(saveText); */ //방법1 

    /* let saveText1=document.querySelector('#text1').value="쉬는시간 다가옴";
    console.log(saveText1); //방법2 */

    /* let saveCheckbox=document.getElementsByName('chk_interest')
    console.log(saveCheckbox);
    for(let i=0; i<saveCheckbox.length; i++){
        if(saveCheckbox[i].checked){
            console.log(saveCheckbox[i].value);
        }
    } */

    let saveCheckbox1=document.querySelector("[name=chk_interest]:checked");
    console.log(saveCheckbox1.value);

    let saverRadio=document.querySelector("[name=radioY]:checked")
    console.log(saverRadio);

    let saveSelect=document.getElementById('select1');
    console.log(saveSelect.value);

    console.log(document.getElementById('el').innerHTML);
}