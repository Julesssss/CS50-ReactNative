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
  itemName.className = classNames.TODO_TEXT
  newTodoItem.appendChild(itemName);

  return newTodoItem;
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
