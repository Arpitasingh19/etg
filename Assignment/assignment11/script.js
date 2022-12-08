let Username=document.querySelector('#username');
let Password=document.querySelector('#password');
let Delete=document.querySelector('#delete');
let Edit=document.querySelector('#Edit');
let Submit=document.querySelector('#submit');


Submit.addEventListener('click',function(){
    if(Username!=''&&Password!=''){
        document.cookie=(`username=${Username.value}`);
        document.cookie=(`password=${Password.value}`);
        Username.value='';
        Password.value='';
       console.log(document.cookie);

    }
})
Delete.addEventListener('click',function(){
    let d=new Date()
    console.log(d)
    document.cookie=`username=${Username.value};expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    document.cookie=`password=${Password.value};expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    
    
})
Edit.addEventListener('click',function(){

})