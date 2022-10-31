function addmore(){
    document.querySelector('#error').innerHTML="";
    let name=document.querySelector('#name').value;
    if(name==''){
        document.querySelector('#error').innerHTML='Please enter value';
    }
    else{
        let box=document.querySelector('#box');
        let li=document.createElement('li');
        li.textContent=name;
        let a=document.createElement('a');
        a.textContent='x';
        a.href="javascript:void(0)";
        a.className='remove';
        li.appendChild(a);
    
        let pos=box.firstElementChild;
        if(pos==null){
            box.appendChild(li);
        }
        else{
            box.insertBefore(li,pos)
        }
    }
    document.querySelector('#name').value=" ";
}
let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
    let box=document.querySelector('#box');
    let li=e.target.parentNode;
    box.removeChild(li);
})