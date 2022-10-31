const calcAverage=(a,b,c)=>(a+b+c)/3;
console.log(calcAverage(3,4,5));
const avgDolphins=calcAverage(23,33,44);
const avgKoalas=calcAverage(22,33,44);
console.log(avgDolphins);
console.log(avgKoalas);
const checkWinner=function(avgDolphins,avgKoalas){
    if(avgDolphins>=2*avgKoalas){
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }
    else if(avgKoalas>=2*avgDolphins){
        console.log(`koalas win (${avgKoalas} vs ${avgDolphins})`);
    }
    else {
        console.log("No teams wins");
    }

}
checkWinner(avgDolphins,avgKoalas);