/*

Part 1
For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

As a user, you should be able to:
[✓] Add a new todo ([✓] by submitting a form [✓] prevent default form behavior)
[✓] Mark a todo as completed (cross out the text of the todo)
[✓] Remove a todo
Part 2
[ ] Now that you have a functioning todo app, save your todos in localStorage! Make sure that when the page refreshes, the todos on the page remain there.

*/

// element variables
const form = document.querySelector("#todo-form");
const newTodoInput = document.querySelector('input[name="newTodo"]');
const todoList = document.querySelector("ul");

// create an empty array of strings for localStorage
const todoStorage = [];

// upload todo array to localStorage
localStorage.setItem("todoStorage", JSON.stringify(todoStorage));

// console.log(JSON.parse(localStorage.getItem("todoStorage")));
// add those strings to the ul in the DOM
const showStorageTodos = () => {
  JSON.parse(localStorage.getItem("todoStorage"));
  // check localStorage for todo strings in array
  if (todoStorage) {
    for (let li of todoStorage) {
      console.log("here is a todo: ", li);
    }
  }
};

// add a newtodo by submitting the form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = document.createElement("li");
  newTodo.innerText = `${newTodoInput.value}    `;
  //   add new todo string to localStorage
  localStorage.setItem("todos", JSON.stringify(newTodoInput.value));
  const delButton = document.createElement("button");
  delButton.innerText = "X";
  newTodo.append(delButton);
  todoList.append(newTodo);
  newTodoInput.value = "";
});

todoList.addEventListener("click", function (event) {
  // remove a todo
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
  // add a completed class to todo
  if (event.target.tagName === "LI") {
    // console.log(event.target.classList);
    event.target.classList.toggle("complete");
  }
  // save your todos in an object in localStorage to be read upon refresh
});
