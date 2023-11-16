 // Array to store tasks
 const tasks = [];

 // Function to add a task
 function addTask() {
     const taskInput = document.getElementById("task");
     const taskText = taskInput.value;

     if (taskText.trim() !== "") {
         tasks.push(taskText);

         updateTaskList();
         taskInput.value = ""; // Clear the input field
     }
 }

 // Function to update the task list
 function updateTaskList() {
     const taskList = document.getElementById("taskList");
     taskList.innerHTML = ""; // Clear the existing list

     tasks.forEach((task, index) => {
         const listItem = document.createElement("li");
         listItem.innerHTML = `
             ${task}
             <button onclick="deleteTask(${index})">completed</button>
         `;
         taskList.appendChild(listItem);
     });
 }

 // Function to delete a task
 function deleteTask(index) {
     tasks.splice(index, 1);
     updateTaskList();
 }