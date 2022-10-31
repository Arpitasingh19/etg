let todoInput = document.querySelector('#todo-text');
let AddProduct = document.querySelector('.AddProduct');
let showProduct = document.querySelector('#todo-li');
// console.log(addbtn);

AddProduct.addEventListener('click',function(){
    let inputval = todoInput.value;
    console.log(inputval);
    // showProduct.innerHTML = inputval;

let todofile=document.querySelector('.todo-file');   
todofile.insertAdjacentHTML('afterbegin',
`<ul class="todo-item">
<li><input type="checkbox" class="checkbox"></li>
<li id="${inputval}">${inputval}</li>
<li><button type="delete" class="delete" onClick="deleteKey()">delete</button></li>
</ul>`)
todoInput.value="";

});
function deleteKey(){
    var inputElements = document.getElementsByClassName('checkbox');
    for(var i=0; inputElements[i]; ++i){
          if(inputElements[i].checked){
            const element = document.querySelector(".todo-item");
            element.remove();
        }
    } 
}
    



