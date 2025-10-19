
import store from "./store.js"
function record(){
   const todos=document.querySelector(".todos");
  //  todos.innerHTML= `<li class="todo" data-id="1">
  //       <span class="todo-title">Todo 1</span>
  //       <div class="toggle-delete">
  //         <input type="checkbox" name="completed" id="" class="todo-checked">
  //         <button class="delete-todo-button">x</button>
  //       </div>
  //     </li>`;

// console.log(store.todos);
  const elemet=store.todos
            .map((todos)=>`<li class="todo" data-id="${todos.id}">
        <span class="todo-title ${todos.completed?"completed":""}">${todos.title}</span>
        <div class="toggle-delete">
          <input type="checkbox" name="completed" id="" class="todo-checked" ${todos.completed?"checked":""}>
          <button class="delete-todo-button">x</button>
        </div>
      </li>`
   
    ).join(""); 
    // console.log(elemet);
   todos.innerHTML=elemet;
}




export default record;