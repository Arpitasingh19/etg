let flipbtn=document.querySelector("#flipbtn");
let resetbtn=document.querySelector('#resetbtn');
let headcoin=document.querySelector('.heads');
let tailcoin=document.querySelector('.tails');
let totalshow=document.querySelector('.totalshow');
let totalhead=document.querySelector('.headss');
let totaltail=document.querySelector('.tailss');
let total=document.querySelector('.total')
let heads=0;
let tails=0;
flipbtn.addEventListener('click',() =>{
    headcoin.innerHTML="";
    let i = Math.floor(Math.random()*2);
    if(i===1){
        headcoin.innerHTML=
            `<div class="heads">
            <img src="img/head.png" alt="">
        </div>`
        heads++;
        console.log(heads);
        totalshow.innerHTML = `
        <h4 class="headss">Head:${heads}</h4>
        <h4 class="tailss">Tail:${tails}</h4>
        `}
        else{
        headcoin.innerHTML=
            `<div class="tails">
            <img src="img/tail.png" alt="">
        </div>`
        tails++;
        totalshow.innerHTML = ` 
        <h4 class="headss">Head:${heads}</h4>
        <h4 class="tailss">Tail:${tails}</h4>`
        console.log(tails);  
    }
    total.innerHTML=`<h4 class="total">Total:${heads+tails}</h4>`  
})
resetbtn.addEventListener('click',function(){
    heads=0;
    tails=0;
    totalshow.innerHTML = `
        <h4 class="headss">Head:${0}</h4>
        <h4 class="tailss">Tail:${0}</h4>
        `
    total.innerHTML=`<h4 class="total">Total:${heads+tails}</h4>`         
})
































