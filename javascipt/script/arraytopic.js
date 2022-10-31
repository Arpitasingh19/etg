// const friend1="Arpita";
// const friend2="Somi";
// const friend3="Deeksha";
// const friends=["Arpita","Somi","Deeksha"];
// console.log(friends)
// const newLenghth=friends.push('jay');
// console.log(friends);
// console.log(newLenghth);
// friends.unshift('john');
// console.log(friends);
// friends.pop()
// console.log(friends)
// friends.shift();
// console.log(friends);

// const calcTip=function(bill){
//     return bill>=50 && bill<= 300 ?bill*0.15:
//     bill * 0.2;
// }
// const bills =[125,555,44];
// const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(bills,tips,totals);
// const jonasArray=[
//     'jonas','schmedtmann',2037-1991,'teacher',['arpita','somi','deeksha']
// ];
// const jonas={
//     firstName:'jonas',
//     lastName:'Schemmded',
//     age:2037-1991,
//     job:'teacher',
//     friends:['arpita','somi','deeksha']


// };
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends,and his best friend is called ${jonas.friends[0]}`)

// const jonas={
//     firstName:'jonas',
//     lastName:'Schemmded',
//     birthYear:1991,
//     job:'teacher',
//     friends:['arpita','somi','deeksha'],
//     hasDriversLicense:true,
//     calAge:function(){
//        this.age=2037-this.birthYear;
//        return this.age;
//      },
//      getSummary:function(){
//         return `${this.firstName} is a ${this.calAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a':'no'} driver's license.`

//      }
// };
// console.log(jonas.age);
// console.log(jonas.calAge());
// console.log(jonas.getSummary());
// const calAge=function(birthYear){
//     return 2037-birthYear;
// }
const mark={
    fullname:'Mark Miller',
    mass:78,
    height:1.69,
    calBMI:function(){
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
};
const john={
    fullname:'john smith',
    mass:92,
    height:1.95,
    calBMI:function(){
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
};
mark.calBMI();
console.log(mark.bmi);
john.calBMI();
console.log(john.bmi);

if(mark.bmi>john.bmi){
    console.log(`${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s BMI (${john.bmi})`)
}
else if(john.bmi>mark.bmi){
    console.log(`${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s BMI (${mark.bmi})`)
}
// loop keeps running while condtion is True
for(let rep=1;rep<=10;rep++){
    console.log(`lifting weights repetition ${rep}`);
}
const Arpi=[
    'Arpita',
    'purnia',
    2037-2001,
    'student',
    ['Hello','hi','world']

];
for(let i=0;i<5;i++)
{
    console.log(Arpi[i],typeof Arpi[i]);
}
//continue and Break
for(let i=0;i<Arpi.length;i++){
    if(typeof Arpi[i]!=='string')
    continue;
    console.log(Arpi[i],typeof Arpi[i])

}
for(let i=0;i<Arpi.length;i++){
    if(typeof Arpi[i]==='number')
    break;
    console.log(Arpi[i],typeof Arpi[i])

}
let rep=0;
while(rep<=10){
    console.log(`The Lifting of wight reptation ${rep}`);
    rep++;

}
// let dice=Math.trunc(Math.random()*6)+1;
// console.log(dice)
// while(dice!==6){
//     console.log(`you roll a  ${dice}`);
// }