let id=" ";
selectData();
function manageData(){
   document.getElementById('msg').innerHTML="";
    let name=document.getElementById('name').value;
    if(name==''){
        document.getElementById('msg').innerHTML='please enter your name';
    }else{
        if(id=''){
            let arr=JSON.parse(localStorage.getItem('crud'));
            if(arr==null){
                let data=[name];
                localStorage.setItem('crud',JSON.stringify(data));
            }
            else{
                arr.push(name);
                localStorage.setItem('crud',JSON.stringify(arr));
            }
            document.getElementById('name').value="";
            document.getElementById('msg').innerHTML='Data added';
           
        }
        else{
            

        }
        selectData();
        
    }
   
    
    

}
function selectData(){
    let arr=JSON.parse(localStorage.getItem('crud'));
    if(arr!=null){
        let html='';
        let Sno=1;
        for(let k in arr){
            html=html+`<tr><td>${Sno}</td><td>${arr[k]}</td></tr>`;
            Sno++;
        }
        
        document.getElementById('root').innerHTML=html;
    }
   

}
selectData();
function loadData(){

}
function deleteData(){

}