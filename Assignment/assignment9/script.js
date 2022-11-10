let submitbtn=document.querySelector("#submit");
let resetbtn=document.querySelector("#reset");
let nametext=document.querySelector('#Nametext');
let Dob=document.querySelector('#Date');
let email=document.querySelector('#Email');
let address=document.querySelector("#Address");
let school=document.querySelector('#School');
let department=document.querySelector('#Department');
let course=document.querySelector('#Course');
let numbers=document.querySelector('#numbers');
let inputtag=document.querySelectorAll("input");
let selectTag=document.querySelectorAll("select");
let inputGender = document.querySelectorAll(".gender")
arr = [nametext,numbers,Dob,email,address,email ,address,department,course]

let emailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let counter=0;

  

submitbtn.addEventListener('click', () => {
    validate()
    blur()
})
function validate () {
    // if(document.querySelector("input[name='gender']:checked")==null){
    //     inputGender.forEach(el=>{
    //         console.log("class added")
    //         el.classList.add('error');
    //     })
    // }
    // else{
    //     inputGender.forEach(el=>{
    //     el.classList.add('correct');
    // })
    //}
    counter=0;
        if(nametext.value==""){
            checkerror(nametext);
            console.log(nametext.value);   
        console.log(nametext.value);   
            console.log(nametext.value);   
        }
        else
        {
            checkCorrect(nametext);
            console.log(nametext.value)
        }
        if(Dob.value===""){
            checkerror(Dob);
        }
        else{
            checkCorrect(Dob);
        }
        if(!email.value.match(emailformat)){
            checkerror(email);
        }
        else{
            checkCorrect(email);
        }
        if(address.value===""){
            checkerror(address);
        }
        else{
            checkCorrect(address);
        }
        if(school.value===""){
            checkerror(school);
        }
        else{
            checkCorrect(school);
        }
        if(department.value===""){
            checkerror(department);
        }
        else{
            checkCorrect(department);
        }
        if(course.value===""){
            checkerror(course);
        }
        else{
            checkCorrect(course);
        }
        if(numbers.value===""){
            checkerror(numbers);
        }
        else{
            checkCorrect(numbers);
        }
        if(counter!=0){
            submitbtn.classList.add('disabled');
        }
        else{
            submitbtn.classList.remove("disabled");

        }
}
let checkerror=function(errorcol){
    errorcol.classList.add('error');
    counter++;   

}
let checkCorrect=function(correctcol){
    correctcol.classList.add('correct')

}
resetbtn.addEventListener("click",function(){
    inputtag.forEach(Element=>{
        Element.value=""
        Element.classList.remove('error'); 
        Element.classList.remove('correct');
    })
    selectTag.forEach(Element=>{
        Element.value=""
        Element.classList.remove('error'); 
        Element.classList.remove('correct')
    })
    submitbtn.classList.remove("disabled");
})
function blur() {
    arr.forEach((Element) => {
        Element.addEventListener('blur',validate);
    })
}




















































































































































































































































































































































































































































































































































































































































































































































































































































 