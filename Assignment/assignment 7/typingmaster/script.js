
let content_show = document.querySelector(".content-show");//qote
let content_type = document.querySelector(".content-text");//userInput
let start_btn = document.querySelector(".start");
let restart_btn = document.querySelector(".restart");
let timer_text = document.querySelector(".init_time");
let accuracy_text = document.querySelector(".init_accuracy");
let error_text = document.querySelector(".init_errors");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");


const setsofWords=[
    "Suddenly quite near him there was a rifle shot. He heard the crack and smack and whistling ricochet among the rocks behind him. He dropped his torch and began feebly to trot.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "Contrary to popular belief, Lorem Ipsum is not simply random text."

];
const playGame=()=>{
    let randomNumber=Math.floor(Math.random()*setsofWords.length);
    content_show.innerText=setsofWords[randomNumber];
    let date=new Date();
    startTime=date.getTime();
    restart_btn.innerText="Restart"
    
}
const endPlay=()=>{
    let date=new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000);
    console.log(totalTime);

}
let startTime,endTime;
restart_btn.addEventListener('click',function(){
    console.log(this);
    if(this.innerText=='Restart'){
        content_type.disabled=false;
        playGame();

    }
    else if(this.innerText=='Restart'){
        content_type.disabled=true;
        endPlay();
    }
})
function Changecontent(){
setsofWords.split('').forEach(char=>{
    const charSpan=document.createElement('span');
    charSpan.innerText=char;
    content_type.appendChild(charSpan);
});
}