document.addEventListener("DOMContentLoaded", () => {
    
    const taskForm = document.getElementById("create-task-form");

    taskForm.addEventListener('submit', handleSubmit )
  });

//could have changed html so that IDs are easier to use but I wanted to just practice the bracket notation when ids have hyphens so that I remember it

// const tasks = [];
// global variable

function handleSubmit(event) {
  event.preventDefault();
// tasks.push(event.target['new-task-description'].value);
// renderTaskList();

// function renderTaskList() {

// }

// function renderTask(task) {

  const taskList = document.getElementById('tasks');
// move above to top function
  const task = document.createElement('li');
  task.textContent = event.target['new-task-description'].value;
  taskList.append(task);

  const deleteButton = document.createElement(('button'));
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {taskList.removeChild(task)}); //remove with splice or something if creating an array
  task.append(deleteButton)

  event.target.reset();
  //resets text within the box that is being typed in after each submit
}
// will need to change removeChild so that when an event deletes the ToDo, it also deletes the Todo from the array

// Revisit to figure out how to create this with an array

// dropdowns for priority and dates

//different input fields

//Ability to edit tasks