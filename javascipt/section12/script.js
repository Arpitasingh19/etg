const future=new Date(2037,10,19,15,23);
console.log(+future);

const DaysPassed=(date1,date2)=>(date2-date1)/(1000*60*60*24);
const day1=DaysPassed(new Date(2037,3,14),new Date(2037,3,24));
console.log(day1);
const num=3884764.23;
// console.log('US:',new.Intl.NumberFormat('en-US').format(num));
setTimeout((ing1,ing2)=>console.log(`here is your pizza with ${ing1} and ${ing2} 🍕`),
3000,'olives','spinach');
setInterval(function(){
    const now=new Date();
    // console.log(now);
},3000);
const startLogoutTimer=function(){
    let time=100;
    setInterval(function(){
        labelTimer.textContent=time;
        time--;
    },1000)
    console.log(time);
}
l;
//NOTE: