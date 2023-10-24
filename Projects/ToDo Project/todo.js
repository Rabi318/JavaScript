let todoList = [
  {
    item: 'Buy Milk',
    dueDate: '4/10/2023'
  },
  {
    item: 'Go to college',
    dueDate: '4/10/2023'
  }
];
displayItems();
function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoDate = dateElement.value;
  let todoItem = inputElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = ' ';
  dateElement.value = ' ';
  displayItems();

}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {

    let { item, dueDate } = todoList[i];
    newHtml += `
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onClick="todoList.splice(${i},1); displayItems();">Delete</button>
    
    `;
  }
  containerElement.innerHTML = newHtml;
}
