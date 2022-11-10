let submitbtn=document.querySelector("#submit");
let resetbtn=document.querySelector("#reset");
let nametext=document.querySelector('#Nametext');
let Dob=document.querySelector('#Date');
let email=document.querySelector('#Email');
let summary=document.querySelector("#Summary");
let school=document.querySelector('#School');
let department=document.querySelector('#Department');
let course=document.querySelector('#Course');
let phone=document.querySelector('#phone');
let inputtag=document.querySelectorAll("input");
let selectTag=document.querySelectorAll("select");
let inputGender = document.querySelectorAll(".gender")
let textareatag=document.querySelectorAll("textarea");
let form=document.querySelectorAll("form");
let education=document.querySelectorAll("#Education");
let language=document.querySelectorAll("#lang");
let Nameform=document.querySelector("#Nameform");
let phoneform=document.querySelector("#phoneform");
let emailform=document.querySelector("#Emailform");
let DoBform=document.querySelector("#DoBform");
let eduform=document.querySelector("#Eduform");
let langform=document.querySelector("#langform");
let summaryform=document.querySelector("#Summaryform");
let moviesform=document.querySelector("#Moviesform");
arr = [nametext,phone,Dob,email,summary,school]
//  submitbtn.removeAttribute("data-bs-target");
           
let emailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let counter=0;
submitbtn.addEventListener('click', () => {
   let v=validate();
   if(v==true){
    $('#exampleModal').modal('show');
   }
    blur()

})
function validate () {
    counter=0;
        if(nametext.value==""){
            checkerror(nametext);
        }
        else
        {
            checkCorrect(nametext);
            Nameform.innerText=nametext.value;
        }
        if(Dob.value===""){
            checkerror(Dob);
            
        }
        else{
            checkCorrect(Dob);
            DoBform.innerText=Dob.value;
        }
        if(!email.value.match(emailformat)){
            checkerror(email);
        
        }
        else{
            checkCorrect(email);
            emailform.innerText=email.value;

        }
        if(summary.value===""){
            checkerror(summary);
            
        }
        else{
            checkCorrect(summary);
            summaryform.innerText=summary.value;
        } 
        
        if(school.value===""){
            checkerror(school);   
        }
        else{
            checkCorrect(school);
            moviesform.innerText=school.value;
        }
        if(phone.value===""){
            checkerror(phone);
            
        }
        else{
            checkCorrect(phone);
            phoneform.innerText=phone.value;
        }
        if(counter!=0){
            submitbtn.classList.add('disabled');   
            return false;
 
        }
        else{
            submitbtn.classList.remove("disabled");
        }
        for(i=0;i<education.length;i++){
            if(education[i].checked){
                eduform.innerText=education[i].value;
            }
    
    
        }
        for(i=0;i<language.length;i++){
            if(language[i].checked){
                langform.innerText=language[i].value;
            }
        }
    return true;
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
    textareatag.forEach(Element=>{
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
    education[i].remove
    
    
})
function blur() {
    arr.forEach((Element) => {
        Element.addEventListener('blur',validate);
    })
}

