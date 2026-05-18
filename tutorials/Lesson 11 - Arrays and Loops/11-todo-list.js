
/* 
algorithm:
- Create an empty array to store todos
- User clicked 'Add'
- Fetch text from textbox
- Add it to array
- Console.log() the array
- reset inputbox
*/

const todoList = [];
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
}