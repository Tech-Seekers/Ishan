let todo=document.querySelector(".container");

window.onload = () =>{
    if(localStorage.getItem("todo")){
        todo.innerHTML=localStorage.getItem("todo");
    }
    document.querySelector(".ul").addEventListener('click',(e)=>{
        e.target.classList.toggle("completed");
        localStorage.setItem("todo",todo.innerHTML);
    });
    
    document.querySelector(".ul").addEventListener('click',(e)=>{
        if(e.target.tagName==="I"){
            e.target.parentElement.parentElement.remove();
            localStorage.setItem("todo",todo.innerHTML);
        }
        if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            localStorage.setItem("todo",todo.innerHTML);
        }
    })
}

function add(event){
    if(event.key==='Enter'){
        const value=document.querySelector(".input").value
        if(value)
        {
        const listitem=`<li><span><i class="fa fa-trash"></i></span> ${value}</li>`
        const list=document.querySelector(".ul");
        list.innerHTML+=listitem;
        document.querySelector(".input").value="";
        }
        else{
            alert("Please Enter Something");
        }
        localStorage.setItem("todo",todo.innerHTML);
    }
}
