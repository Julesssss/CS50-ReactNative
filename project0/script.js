// Config
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

// Elements
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
 
function newTodo() {
  //alert('New TODO button clicked!')

  const newItem = createNewTodoItem();
  list.appendChild(newItem);
  
  updateCounts();
}

function updateCounts() {
  updateItemCount();
  updateUncheckedCount();
}

function createNewTodoItem() {
  // Create item
  const newTodoItem = document.createElement('div')
  newTodoItem.className = classNames.TODO_ITEM
  newTodoItem.appendChild(document.createElement('div'))

  // Create checkbox
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.className = classNames.TODO_CHECKBOX
  checkbox.addEventListener('change', (event) => {
    updateUncheckedCount();
  })
  newTodoItem.appendChild(checkbox);

  // Add input
  const itemName = document.createElement('input')
  itemName.type="text"
  itemName.size = 30;
  itemName.className = classNames.TODO_TEXT
  newTodoItem.appendChild(itemName)

  // Add delete button
  const button = document.createElement('button')
  button.className = classNames.TODO_DELETE
  button.textContent = "Delete"
  button.addEventListener('click', (event) => {
    deleteItemAt(newTodoItem);
  })
  newTodoItem.appendChild(button)

  return newTodoItem;
}

function deleteItemAt(node) {
  list.removeChild(node);
  updateCounts();
}

function updateItemCount() {
  itemCountSpan.textContent = list.childElementCount;
}

function updateUncheckedCount() {
  var unchecked = 0;
  var inputElements = document.getElementsByClassName(classNames.TODO_CHECKBOX);
  
  for(var i = 0; inputElements[i]; ++i){
    if (!inputElements[i].checked){
      unchecked++
    }
  }

  uncheckedCountSpan.textContent = unchecked;
}
