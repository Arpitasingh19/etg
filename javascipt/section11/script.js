// const movements=[200,450,-400,3000,-650,-130,70,1300];
// for(const[i,movement]  of movements.entries()){
//     if(movement>0){
//         console.log(`Movement ${i+1}: you deposited ${movement}`);
//     }
//     else{
//         console.log(`Movement ${i+1}: you withdraw ${Math.abs(movement)}`);
//     }
// }
// console.log("////////////////ForEach////////////////////");
// movements.forEach(function(mov,i,arr){
//     if(mov>0){
//         console.log(`Movement ${i+1}: you deposited ${mov}`);
//     }
//     else{
//         console.log(`Movement ${i+1}: you withdraw ${Math.abs(mov)}`);
//     }
// });
'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements=function(movements){
    containerMovements.innerHTML='';
    movements.forEach(function(mov,i){
        const type=mov>0?'deposit':'withdrawal';
        const html=`<div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1}${type}
        </div>
        <div class="movements__value">${mov}</div>
      </div>`;
      containerMovements.insertAdjacentHTML('afterbegin',html)

    });

};
displayMovements(account1.movements);
const createUsernames=function(user){
  const username=user
    .toLowerCase()
    .split('')
    .map(name=>name[0])
    .join('');
    return username;
};
displayMovements(account1.movements);
const calcDisplayBalance=function(movements){
  const balance=movements.reduce((acc,mov)=>acc+mov,0);
  labelBalance.textContent=`${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary=function(movements){
  const incomes=movements
   .filter(mov=>mov>0)
  //  .reduce(acc,mov)=>acc+mov,0);
  labelSumIn.textContent=`${incomes}`
};
console.log(createUsernames('Steven Thomas williams'))
let currentAccount;
btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  currentAccount=accounts.find(acc=>acc.username===inputLoginUsername.value);
  console.log(currentAccount);
  if(currentAccount?.pin===Number(inputLoginPin.value)){
    labelWelcome.textContent=`welcome back, ${currentAccount.owner.split('')[0]
  }`;
  containerApp.style.opacity=100;

  }

});

const deposits=movements.filter(function(mov,i,arr){
  return mov>0;

})
console.log(movements);
console.log(deposits);

const depositsFor=[];
for(const mov of movements) if(mov>0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals=movements.filter(mov=>mov<0);
console.log(withdrawals)
let obj={
  '1':'a',
  '2':'b',
  '3':'c',
}

let arr =[Object.entries(obj)];
console.log(arr)
console.log(movements);
const balance=movements.reduce(function(acc,cur,i,arr){
  console.log(`Iteration ${i} :${acc}`);
  return acc+cur;
})
console.log(balance);

const max=movements.reduce((acc,mov)=>{
  if(acc>mov)
  return acc;
  else
  return mov;

},movements[0]);
console.log(max)
const withdrawal=movements.find(mov=>mov<0);
console.log(movements);
console.log(withdrawal);
console.log(accounts)
const account=accounts.find(acc=>acc.owner==="Jessica Davis");
console.log(account)
//NOTE: