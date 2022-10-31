// 'use strict';

function logger(){
    console.log('My name is hellow');

}
logger();
function friutProcessor(apples,orange){
    console.log(apples,orange);
    const juice=`juice with ${apples} apples and ${orange} oranges.`;
    return juice;
}
const applesjuice= friutProcessor(1,3);
console.log(applesjuice);
const orangejuice= friutProcessor(4,3);
console.log(orangejuice);
function calcAge(birthYear){
    return 2037-birthYear;


}
const age1= calcAge(2000);
console.log(age1);


const calcAge1=function(birthYear){
    return 2037-birthYear;
}
const age2=calcAge1(2001);
console.log(age2);

const calAge3=birthYear=>2037-(birthYear);
const age3=calAge3(2002);
console.log(age3);

const yearsuntilRetirement=(birthYear,firstName)=> {
    const age=2037-birthYear;
    const retirement=65-age;
    // return retirement;
    return `$(firstName) retires in $(retirement) years`;
}
console.log(yearsuntilRetirement(1991,'jonas'));
function cutfruitPieces(fruit){
    return fruit*4;
}
function friutProcessor(apples,orange){
    const applePieces=cutfruitPieces(apples);
    const orangePieces=cutfruitPieces(orange);
    const juice=`juice with ${applePieces} piece of apple ans ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(friutProcessor(2,3))