'use strict';
const arr=[2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];
const [x,y,z]=arr;
console.log(x,y,z);
console.log(arr);
const nested=[2,3,[4,5]]
const [i, ,j]=nested;
console.log(i,j);

let abc=111;
let bca=999;
const obj={abc:23,bca:7,cba:14};
({abc,bca}=obj);
console.log(3||'jonas');
console.log(''||'jonas');
console.log(true||0);
console.log(undefined||null);
console.log(undefined||0||''||'Hello'||23||null);
// const guests=resturant.numGuests?resturant.numGuests:10;
// console.log(guests);
console.log(0 &&'jpnas');
const rest1={
    name:'Capri',
    numGuests:20,
};
const rest2={
    name:'Arpita',
    numGuests:21,

};
rest2.numGuests=rest1.numGuests||10;
rest2.numGuests=rest2.numGuests||10;
rest1.numGuests||=10;
rest2.numGuests??=10;
console.log(rest1);
console.log(rest2);
