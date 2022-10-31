'use strict';
const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const diceEl=document.querySelector('.dice');
const btnnew=document.querySelector('.btn--new');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');
const CurrentEl0=document.querySelector('#current--0');
const CurrentEl1=document.querySelector('#current--1');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');


const scores=[0,0];
score0.textContent=0;
score1.textContent=0;
diceEl.classList.add('hidden');
let activePlayer=0;
let playing=true;
let currentScore=0;
const switchPlayer=function(){
    currentScore=0;
    document.querySelector(`#current--${activePlayer}`).textContent=0;
    activePlayer=activePlayer==0?1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};

btnroll.addEventListener('click',function(){
    if(playing){
   let dice=Math.trunc(Math.random()*6+1);
   console.log(dice);
    diceEl.classList.remove('hidden');

    diceEl.src=`images/dice-${dice}.png`;
    if(dice!=1){
        currentScore=currentScore+dice;
       document.querySelector(`#current--${activePlayer}`).textContent=currentScore;


    }
    else{
        switchPlayer();
        
    }
}

});
btnhold.addEventListener('click',function(){
    if(playing){
    scores[activePlayer]+=currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer];

    if(scores[activePlayer]>=10){
        playing=false;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        diceEl.classList.add('hidden');
        
        

    
    }
    else{
        switchPlayer();

    }
}
    
});
btnnew.addEventListener('click',function(){
    score0.textContent=0;
    score1.textContent=0;
    CurrentEl0.textContent=0;
    CurrentEl1.textContent=0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    diceEl.classList.add('hidden');
    
})


