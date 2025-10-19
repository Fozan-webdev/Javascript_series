const store = {
  todos: [
    {
      id: "1",
      title: "ali",
      completed: false,
    },
    {
      id: "2",
      title: "ali",
      completed: true,
    },
    {
      id: "3",
      title: "ali",
      completed: true,
    },
  ],
};
const storeHandler = {
  get(target, property) {
    // console.log("this is property",property);
    return target[property];
  },
  set(target, property, value) {
    // console.log(target,property,value);
    // console.log("you are trying to set",property);
    target[property] = value;
    if (property == "todos") {
      window.dispatchEvent(new Event("todoschange"));
    }
    localStorage.setItem("store", JSON.stringify(store));
    return true;
  },
};
const setProxy = new Proxy(store, storeHandler);
function addTodo(newtodo) {
  setProxy.todos = [...setProxy.todos, newtodo];
}
// ############# Delete Todo #####################
function deleteTodo(id) {
  setProxy.todos = setProxy.todos.filter((todos) => {
    if (todos.id !== id) {
      return todos;
    }
  });
}
// ############## checked todo ####################
function toggleTodo(id, completed) {
  setProxy.todos = setProxy.todos.map((todos) => {
    if (todos.id === id) {
      return { ...todos, completed: completed };
    } else {
      return todos;
    }
  });
}
export { addTodo, deleteTodo, toggleTodo };
export default setProxy;
