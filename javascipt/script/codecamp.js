//document.getElementById("count-el").innerText=5
let count=4;
console.log(count);
let myage=22;
console.log(myage);
let myAge=7,humandogratio=2;
let myDogAge=myAge*humandogratio;
console.log(myDogAge);
let count1=5;
count=3
console.log(count)
let bonousPoints=50;
console.log(bonousPoints);
bonousPoints=bonousPoints+100;
console.log(bonousPoints);
bonousPoints=bonousPoints-25;
console.log(bonousPoints);
bonousPoints=bonousPoints+70;
console.log(bonousPoints);
function increment(){
    console.log('The button was clicked');

}
function countdown(){
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}
countdown();
countdown();
function helloworld(){
    console.log(42);

}
helloworld();
let lap1=34;
let lap2=33;
let lap3=36;
function logLapTime(){
    let TotalTime=lap1+lap2+lap3;
    console.log(TotalTime);

}
logLapTime();

let lapscompleted=0;
function completed(){
    lapscompleted=lapscompleted+1;

}
completed();
completed();
completed();
console.log(lapscompleted);
let count2=0;
function increment(){
    count=count+1;
    console.log("count");
}
//increment();
let countEl=document.getElementById("count-el")
console.log(countEl);
let count3=0;
function increment(){
    count3=count3+1;
    countEl.innerText=count3;

}
//increment();
function save(){
    console.log(count)
}
save()

let username="per";
console.log(username);


let message="You have tree new notifications";
console.log(message);
let messageToUser=message+", "+username  +"!";
console.log(messageToUser);

let name="Arpita";
let greeting=" Hi , my name is "
let myGreeting=greeting+name;
console.log(myGreeting);
let name1=42;
let greeting1=" Hi , my name is "
let myGreeting1=greeting1+name1;
console.log(myGreeting1);
let points=4;
let bonousPoint="10";
let totalpoint=points+bonousPoint;
console.log(totalpoint);

let welcomeEl=document.getElementById("welcome-el");
let name2="Arpita";
let greeting2="welcome back";
welcomeEl.innerText=greeting2+name2;
//😊
welcomeEl.innerText=welcomeEl.innerText+"❤😊";
welcomeEl.innerText+="❤😊";
let saveEl=document.getElementById("save-el");
console.log(saveEl);
let cost=0;
function save(){
    let coststr=cost+" _ "
    saveEl.innerText+=coststr;
    console.log(cost);

}
save()


