let a=Number(prompt("enter a first number"));
let b=Number(prompt("enter a second number"));



function add(a,b){
    return a+b;
}
add(3,5)
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function callback(recievedArr,a,b){
    //  recievedArr = [add, sub, mul]
    let resArr = [];
    for(let i = 0; i < recievedArr.length; i++){
        // console.log(recievedArr[i])
        // console.log(recievedArr[i](a,b));
        let func = recievedArr[i]
        resArr.push(func(a,b));
    }
    // console.log(resArr)
    return resArr;
    // console.log(ex1,ex2);

}

// callback(array[], num1, num2)
calArr = [add, sub, mul];


console.log(callback(calArr,a,b));
console.log(callback(calArr,a,b));
console.log(callback(calArr,a,b));



























// function add(a,b){
//     let sum=0;
//     sum=a+b;
// return sum;

// }

// function sub(a,b){
//     let sub=0;
//     sub=a-b;
// return sub;

// }
// function mul(a,b){
//     let mul=0;
//     mul=a*b;
// return mul;

// }

// console.log(add(a,b));
// console.log(sub(a,b));
// console.log(mul(a,b));

