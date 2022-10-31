const massMark=78;
const heightMark=1.69;
const massJohn=92;
const heightJohn=1.95;
const BMImark=Math.floor(massMark/heightMark**2);
const BMIjohn=Math.floor(massJohn/(heightJohn*heightJohn));
const markHeigherBMI=BMImark>BMIjohn;
console.log(BMImark,BMIjohn);
console.log(markHeigherBMI);
if(BMImark>=BMIjohn){
   console.log(`mark's BMI (${BMImark})is higher than (${BMIjohn})john`)
}
else{
    console.log(`mark's BMI(${BMIjohn}) is lower than (${BMImark})john`)
}

const firstName='Arpita';
const year=2022;
const birthyear=2001;
const job='engineer';
const arpitaNew=`I'm ${firstName},a ${year-birthyear} year old ${job}!`;
console.log(arpitaNew);
//literal
console.log(`string with \n\ multiple \n\ lines`);
const birthYear=2001;
let century;
if(birthYear<=2000){
    century=20
}
else{
    century=21
}
console.log(century)
const inputYear='1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear)+18);
console.log(Number('jonas'));
console.log(typeof(NaN))
console.log(String(23),23);
//coercin
console.log(" I'm " + 23 + " year old");
console.log('23'-'10'-3);
console.log('23'/'2');
const hasDriverLicense=true;
const hasGoodvision=false;
console.log(hasDriverLicense && hasGoodvision)
console.log(hasDriverLicense || hasGoodvision)
const scoreDolphins=(96+108+89)/3;
const scorekoalas=(88+91+110)/3;
console.log(scoreDolphins,scorekoalas);
if(scoreDolphins>scorekoalas){
    console.log('Dolphins win the trophy');
}
else if(scorekoalas>scoreDolphins){
    console.log('Koalas win the trophy');
}
else if(scoreDolphins === scorekoalas){
    console.log('Both win the trophy');
}
const day='sunday';
if(day==='monday'){
    console.log('plan course structure');
    console.log('Go to coding meetup') 

}else if(day==='tuesday'){
    console.log('prepare thory videos')

}else if(day==='wednesday'|| day==='thursday'){
    console.log('write a code');

}else if(day ==='friday'){
    console.log('record videos')


}else if(day==='sunday' || day==='saturday'){
    console.log('enjoy your weekand');

}
else{
    console('Not a valid day');
}
const age=23;
age>=18 ? console.log('I like to drink wine'):console.log('I lie to drink water');

const drink=age>=18 ? 'wine': 'water';
console.log(drink);

let drink2;
if(age>=18){
    drink2='wine';
}
else{
    drink2='water';

}
console.log(drink2);
console.log(` I like to drink ${age>=18? 'wine': 'water'}`);

const bil=275;
const tip=bil<=300 && 300 >=50 ? bil *0.15:
bil*0.2;
console.log(`The bill was ${bil}, the tip was ${tip} , and the total value ${bil + tip}`);