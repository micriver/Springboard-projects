/*

Part 1
For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

As a user, you should be able to:
[✓] Add a new todo ([✓] by submitting a form [✓] prevent default form behavior)
[✓] Mark a todo as completed (cross out the text of the todo)
[✓] Remove a todo
Part 2
[✓] Now that you have a functioning todo app, save your todos in localStorage! Make sure that when the page refreshes, the todos on the page remain there.

to add to localstorage and remove from local storage:
make an empty array in your code
add each new todo to that array
overwrite/update local storage with setItem

remove items with remove item method on array
overrite array in localstorage with new local array

show items first when opening page with getItem

resources:
push(): https://www.w3schools.com/jsref/jsref_push.asp
pop(): https://www.w3schools.com/jsref/jsref_pop.asp
https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array#5767357

*/

// element variables
const form = document.querySelector("#todo-form");
const newTodoInput = document.querySelector('input[name="newTodo"]');
const todoList = document.querySelector("ul");

// create an empty array of strings for localStorage
let todoStorage = [];

// add strings in local storage to the ul in the DOM
console.log(
  "This is your array in localstorage: ",
  JSON.parse(localStorage.getItem("todoStorage"))
);
if (JSON.parse(localStorage.getItem("todoStorage")) !== null) {
  todoStorage = JSON.parse(localStorage.getItem("todoStorage"));
  for (todo of todoStorage) {
    const newTodo = document.createElement("li");
    newTodo.innerText = `${todo}    `;
    const delButton = document.createElement("button");
    delButton.innerText = "X";
    // newTodo.append(delButton);
    todoList.append(newTodo);
    todoList.append(delButton);
  }
}

// add a newtodo by submitting the form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = document.createElement("li");
  console.log(newTodoInput.value);
  if (newTodoInput.value !== "") {
    newTodo.innerText = `${newTodoInput.value}    `;
    // add newTodo string to array
    todoStorage.push(newTodoInput.value);
    // add updated todo array to localStorage
    localStorage.setItem("todoStorage", JSON.stringify(todoStorage));
    const delButton = document.createElement("button");
    delButton.innerText = "X";
    // newTodo.append(delButton);
    todoList.append(newTodo);
    todoList.append(delButton);
    newTodoInput.value = "";
  } else {
    alert("Please enter a task!");
  }
});

todoList.addEventListener("click", function (event) {
  // remove a todo
  if (event.target.tagName === "BUTTON") {
    const todoToRemove = event.target.previousElementSibling.innerText;
    todoStorage = todoStorage.filter(function (item) {
      return item !== todoToRemove;
    });
    console.log(todoStorage);
    localStorage.setItem("todoStorage", JSON.stringify(todoStorage));
    event.target.previousElementSibling.remove();
    event.target.remove();
  }
  // add a completed class to todo
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("complete");
  }
});
