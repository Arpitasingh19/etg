const calcTip=function(bill){
    return bill >=50 && bill<=300 ? bill*0.15:
    bill*0.2;
}
const bills=[22,334,534,32,11,35,66,87,7,96,87,65]
const tips=[];
const totals=[];
for(let i=0;i<bills.length;i++){
    const tip=calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip+bills[i]);
}
console.log(bills,tips,totals);
const calcAverage=function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++)
    sum=sum+arr[i];
    console.log(sum);
    return sum/arr.length;
}
console.log(calcAverage([1,2,3]));