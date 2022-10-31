var submit=document.querySelector('#submit');
submit.addEventListener("click",displayDetails);
 var rows=1;
 function displayDetails(){
    var name=document.querySelector('#name').value;
    var age=document.querySelector('#age').value;
    var grade=document.querySelector('#grade').value;

    if(!name||!age||!grade){
        alert('Enter all the details');
        return;
    }
    var display=document.querySelector('#display');
    var newrows=display.insertRow(rows);
    var cell1=newrows.insertCell(0);
    var cell2=newrows.insertCell(1);
    var cell3=newrows.insertCell(2);

    cell1.innerHTML=name;
    cell2.innerHTML=age;
    cell3.innerHTML=grade;
    rows++;
    document.querySelector('#name').value = "";
    document.querySelector('#age').value = "";
    document.querySelector('#grade').value = "";
    


 }

