var obj={
    name:'arpita',
    age:20,
    phone:34344545
}
document.write("<table border='1'>");
for(var key in obj){
    document.write("<tr>");
    document.write(("<td>")+key+("</td>"));
    document.write(("<td>")+obj[key]+("</td>"));
    document.write("</tr>");

}
document.write("</table>");
function User(fn,ln){
    this.fullname=fn;
    this.lastname=ln;
}
var obj=new User("Arpita","singh");
obj.age=20;
console.log(obj);
var d=new Date();
document.write(d)


function callHello(){
    alert('Hello');
}
//NOTE: