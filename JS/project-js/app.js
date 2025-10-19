import record from "./render.js";
import setProxy  from "./store.js";
import { addTodo,deleteTodo,toggleTodo } from "./store.js";
// setProxy.todos=[];
window.addEventListener("todoschange",()=>{
    record();
});

const storeFromLS=JSON.parse(localStorage.getItem("store"));
if(storeFromLS?.todos.length>0){
    // console.log("change");
    setProxy.todos=storeFromLS.todos;
}
else{
    localStorage.setItem("store",JSON.stringify(setProxy));
    record();
}
// record();
// console.log(storeFromLS);
// console.log(storeFromLS.todos);
// console.log(storeFromLS.todos.length);
const form=document.querySelector("#form")
// console.log(form);
const todoTitleInput=document.querySelector(".todo-title-input");
// console.log(todoTitle);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const todoTitle=todoTitleInput.value;
    // console.log(todoTitle);
    const newtodo={
        id:crypto.randomUUID(),
        title:todoTitle,
        completed:false
    }
    // console.log(newtodo);
    addTodo(newtodo);

});
// #################delete todo ################## 
const todos=document.querySelector(".todos");
// console.log(todos);
todos.addEventListener("click",(e)=>{
    const target=e.target;
    // console.log(target);
    if(target.classList.contains("delete-todo-button")){
        // console.log("you click on cross button");
        const id=target.closest(".todo").dataset.id;
        // console.log(li);
        deleteTodo(id);
    }
})
// ############## checked todo #################### 
todos.addEventListener("change",(e)=>{
    const target=e.target;
    // console.log("check event fire");
    if(target.classList.contains("todo-checked")){
            // console.log("check event fire");

        const id=target.closest(".todo").dataset.id;
        const completed=target.checked;
        toggleTodo(id,completed);
    }
})


// document.addEventListener("DOMContentLoaded",()=>{
//     record();
// })