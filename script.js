let toDoList = [];
displayToDo();

function addTask() {
  let inputText = document.getElementById('taskInput');
  let inputDate = document.getElementById('dateInput');

  let taskItem = inputText.value.trim();
  let dateItem = inputDate.value;

  if(taskItem.length > 0){
    toDoList.push({ item: taskItem, date: dateItem });
    inputText.value = '';
    inputDate.value = '';
    
  } else{
    alert('Enter Valid Task');
  }
  displayToDo();
}

function displayToDo() {
  let taskList = document.querySelector('#taskList');

  let addHtml = '';
  for (i = 0; i < toDoList.length; i++) {
    let item = toDoList[i].item;
    let date = toDoList[i].date;
    addHtml += `<div class="todo-item">
     <span>${item}</span> 
     <span>${date}</span> 
      <button class="delBtn" onclick = "toDoList.splice(${i}, 1); displayToDo()"><i class="fas fa-trash todo-icons"></i></button>
      </div>
    `;
  }
  taskList.innerHTML = addHtml;
};

