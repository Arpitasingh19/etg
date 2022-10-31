
// function test(){
// var a="3";
// var b="8";
// var c=a;
// var a=b;
// b=c;
// console.log("a is " + a);
// console.log("b is " + b);
// }
// var gamelevel=1;
// gamelevel=2;
// gamelevel=3;
// alert("Your level is currently:"+gamelevel)
// var message="Hello";
// var name="world";
// alert(message+" "+"there"+" "+name);
//you have written 182 character you have -42 character left.
// var tweet=prompt('compose your tweet');
// var tweetCount=tweet.length;
// alert("you have written" + tweetCount +"character, you have"+(148-tweetCount)+"characters remaining.");
// var name="Arpita";
// name.slice(0,1);
// var tweet=prompt('compose your tweet');
// var tweetUnder140=tweet.slice(0,140);
// alert(tweetUnder140);
// var name="arpita"
// name=name.toUpperCase();
// var name=prompt("what is your name");
// var firstChar=name.slice(0,1);
// var upperCasefirstChar=firstChar.toUpperCase();
// var restName=name.slice(1,name.length);
// var capitalizeName=upperCasefirstChar+restName;
// alert("Hello"+capitalizeName);
// function getMilk(money){
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   var numberofbottles=Math.floor(money/1.5);
//   console.log('buy ' + numberofbottles + " bottles of milk");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

// }
// getMilk(5);
// function lifeInWeeks(age) {
//         //Write your code here.
//         var yearRemainin=90-age;
//         var days=yearRemainin*365;
//         var months=yearRemainin*12;
//         var week=yearRemainin*48;

        
//         console.log("you have "+ days + " ,"+ months+ ", and " + week + " left." );
        
        
// }
// lifeInWeeks(22);

function bmicalculator(weight,height){
    var bmi=weight/Math.pow(height,2);
    return Math.round(bmi);

}
var bmi=bmicalculator(65,1.8);
console.log(bmi);

    