// practices like small project 
// todo list add 

const todolist=document.querySelector(".todo-list");
const todoinput=document.querySelector("input[type='text']");
const form=document.querySelector(".todo-form");
form.addEventListener("submit",(e)=>{
    if(todoinput.value)
    {
         const todolisttext=todoinput.value;
    e.preventDefault();
    const newli=document.createElement("li");
    const innerlihtmll=`
                <span class="todo-text">${todolisttext}</span>
                <div>
                    <button class="done todo-list-btn">done</button>
                    <button class="remove todo-list-btn">remove</button>
                </div>  `;
    newli.innerHTML=innerlihtmll
    // console.log(newli);
    todolist.append(newli);
     todoinput.value="";   

    }
    else{
        const msgshow=document.createElement("span");
        msgshow.textContent="Please Enter todo";
    }
   
});
// use eventdelegation
todolist.addEventListener("click",(e)=>{
    // checked if user click button 
    // console.log(e.target.classList);
    if(e.target.classList.contains("done"))
    {
        // const spantext=e.target.parentNode.previousElementSibling;
        const spantext=e.target.parentNode.parentNode.firstElementChild;
        // console.log(spantext);
        spantext.style.textDecoration="line-through";

    }
    if(e.target.classList.contains("remove"))
    {
        // const spantext=e.target.parentNode.previousElementSibling;
        const spantext=e.target.parentNode.parentNode;
        // console.log(spantext);
      spantext.remove();

    }
});  