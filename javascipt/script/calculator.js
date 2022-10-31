function addTwoNumber(){
    var a=Number(document.getElementById('text1').value);
    var b=Number(document.getElementById('text2').value);
    var sum=0;
    sum=a+b;
    document.getElementById('result').value=sum;
}
function subTwoNumber(){
    var a=Number(document.getElementById('text1').value);
    var b=Number(document.getElementById('text2').value);
    var sub=0;
    sub=a-b;
    document.getElementById('result').value=sub;
}
function MulTwoNumber(){
    var a=Number(document.getElementById('text1').value);
    var b=Number(document.getElementById('text2').value);
    var Mul=0;
    Mul=a*b;
    document.getElementById('result').value=Mul;
}
function DivTwoNumber(){
    var a=Number(document.getElementById('text1').value);
    var b=Number(document.getElementById('text2').value);
   div=a/b;
    document.getElementById('result').value=div;
}
