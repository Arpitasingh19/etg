'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct Number';

// document.querySelector('.score').textContent=14;
// document.querySelector('.highscore').textContent=10;

// document.querySelector('.number').textContent=20;
// console.log(document.querySelector('.questionmark').value);
// document.querySelector('.questionmark').value=29;

document.querySelector('.btn-again').addEventListener('click',function(){
    let score=20;
    
    let secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Guesses the number';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.questionmark').textContent='';
    document.querySelector('body').style.backgroundColor='';
    document.querySelector('.number').style.width='15%';


})
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=10;
let highscore=20;
document.querySelector('.btn-check').addEventListener('click',function(){
   const questionmark=Number(document.querySelector('.questionmark').value);
   console.log(questionmark, typeof questionmark);
   if(!questionmark){
    document.querySelector('.message').textContent='No Number';
   }
  else if(questionmark===secretNumber){
    document.querySelector('.message').textContent='Correct Number';
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('.number').style.width='25%';

    if(score>highscore){
        highscore=score;
        console.log(document.querySelector('.highscore').textContent=highscore);
    }
  }
    else if(questionmark>secretNumber){
        if(score>1){
        document.querySelector('.message').textContent='Too high';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='you lost the game';
            document.querySelector('.score').textContent=0;

        }
   } 
   else if(questionmark<secretNumber){
    if(score>1){
        document.querySelector('.message').textContent='Too low';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='you lost the';
            document.querySelector('.score').textContent=0;

        }
    } 
   
});