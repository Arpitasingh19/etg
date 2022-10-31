const numbers=[4,5,6,35,19,10];
function checkValue(x){
    return x>document.querySelector('#checknumber').value;

}
let input=document.querySelector('#checknumber');
let Test=document.querySelector('#Test');
let showdemo=document.querySelector('#demo');

Test.addEventListener('click',function(){
    let input=numbers.some(checkValue);
   showdemo.innerHTML=input;


})

const arr=[[1,2,3],[4,5,6],7,8];
console.log(arr.flat());
const arrDeep=[[[1,2],3],[4,[5,6]],7,8];
console.log(arrDeep.flat);
const owner=['arpita','ankita','anita','deeksha','somui'];
document.write(owner.sort());
document.write("<br/>");
console.log(owner);
const number=[2,3,44,6,7,83,2,1];
document.write(number.sort(function(a,b){
    return b-a;
}))

const arr1=[1,2,3,4,5,6,7];
console.log(new Array(1,2,3,4,5,6 ));
const x=new Array(7);
console.log(x);
x.fill(1,3,5);
x.fill(1);
console.log(x);
arr1.fill(23,2,6);
console.log(arr1);

const y=Array.from({length:7},()=>1);
console.log(y);
const z=Array.from({length:7},(_,i)=>i+1);
console.log(z);