const createBooking=function(flightNum,numPassengers,price){

}
const flight ='LH234';
const arpita={
    name:'singh',
    passport:'234656767342'
}
const checkIn=function(flightNum,passenger){
    passenger.name='miss.'+passenger.name;
    if(passenger.passport==234656767342){
        alert('checked in');
    }else{
        alert('wrong')
    }
;
}
checkIn(flight,arpita)
console.log(flight);
console.log(arpita);
/////////////////////////////First class function
const greet=function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);

    }
}
const greeterHey=greet('hey');
greeterHey('arpita');
greeterHey('singh')
greet('hello')('arpita');
greetArr=geeting=>name=>console.log(`${name} ${geeting}`);
greetArr('hi')('arpita');



///////////////////////////////////////////////////
////////////////////Bind method///////////////////
const bookEW=book.bind(euuiduy);
bookEW(23,'frdfrg');