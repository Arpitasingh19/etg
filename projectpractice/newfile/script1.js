function addNewLi(){
    let libox=document.querySelector('#box');
    let newli=document.createElement('li');
    let name=document.querySelector('#text').value;
    let liText=document.createTextNode(name);
    newli.appendChild(liText);
    libox.appendChild(newli);
    document.querySelector('#text').value="";
}
let x=10;
setInterval(incwh,100);
function incwh(){
    x++;
    let c=document.querySelector('#counter').innerHTML;
    c.style.width = x+ "px";
}
//DOMContentLoaded
//Load
//beforeunload/unload
// window.addEventListener('DOMContentLoaded',function(){
//     console.log('DOMContentLoaded');
// })
// window.addEventListener('load',function(){
//     console.log('load');
// })
window.onbeforeunload=function(){
    return "hello";
}