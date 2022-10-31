// const checkdogs=function(dogJulia,dogkate){
//     const dogJuliaCorrected=dogJulia.slice();
//     dogJuliaCorrected.splice(0,0);
//     console.log(dogJuliaCorrected);
//     const dogs=dogJuliaCorrected.concat(dogkate);
//     console.log(dogs);

//     dogs.forEach(function(dog,i){
//         if(dog>=3){
//             console.log(`Dog number ${i+1} is an adult,and is ${dog} years old`);
//         }
//         else{
//             console.log(`"Dog number ${i+1} is still a puppy`)
//         }
//     })

// }
// checkdogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
//////////////////////////////coding challenge 2//////////////////////////
// const calcAverageHumanAge=function(ages){
//     const humanage=ages.map(age=>age<=2?2*age:16+age*4)
//         console.log(humanage);
//     const adult=humanage.filter(age=>age>=18)
//     console.log(adult)
// const max=adult.reduce((acc,age)=>{
//     if(age>acc)
//     return age;
//     else(age<acc)
//     return acc;
// },[0])  
// console.log(max);
// const average=adult.reduce((acc,age)=>acc+age,0)/adult.length;
// return average;
    
// };

// const avg1=calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2=calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
// console.log(avg1,avg2);
/////////////////////////////coding challenge 3/////////////////////////
const calcAverageHumanAge=ages=>
    ages.map(age=>age<=2?2*age:16+age*4)
        .filter(age=>age>=18)
        .reduce((acc,age,i,arr)=>acc+age/arr.length,0)
    

const avg1=calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2=calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg1,avg2);
////////////////////////coding challenge 4/////////////////////////////
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
    ]
dogs.forEach(dog =>dog.recFood=Math.round(dog.weight**0.75*28));
console.log(dogs);
const dogsarah=dogs.find(dog=>dog.owners.includes('Sarah'));
console.log(dogsarah);
console.log(`Sarah's dog eating too ${dogsarah.curFood>dogsarah.recFood?'much':'little'}`)
// const ownersEatTooMuch=dogs.filter(dogs=>dogs.curFood>dogs.recFood);
// console.log(ownersEatTooMuch);
// const ownersEatTooLittle=dogs.filter(dogs=>dogs.curFood<dogs.recFood);
// console.log(ownersEatTooLittle);
const ownersEatTooMuch=dogs
.filter(dogs=>dogs.curFood>dogs.recFood)
.flatMap(dogs=>dogs.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle=dogs
.filter(dogs=>dogs.curFood<dogs.recFood)
.flatMap(dogs=>dogs.owners);
console.log(ownersEatTooLittle);
//4
"Matilda and Alice and Bob's dogs eat too much!" 
"Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch} eat too much! 'and' ${ownersEatTooLittle} eat too little!`);
//5
console.log(dogs.some(dogs=>dogs.curFood===dogs.recFood));
//6
const checkeatingOkay=dogs=>dogs.curFood>dogs.recFood*.9 && dogs.curFood<dogs.recFood*1.1;
console.log(checkeatingOkay);
//7
console.log(dogs.filter(checkeatingOkay));
//8
// console.log(dogs.sort(function (a,b){
//     return a-b;
// }))
console.log(dogs.slice().sort((a,b)=>a.recFood-b.recFood));