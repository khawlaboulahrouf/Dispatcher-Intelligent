function getTasks() {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(title, urgency, important, effort) {
  const tasks = getTasks();

  const newTask = {
    id: Date.now(), 
    title: title,
    urgency: urgency,     
    important: important, 
    effort: effort        
  };

  tasks.push(newTask);
  saveTasks(tasks);
  console.log("Task added:", newTask);
}

function displayTasks() {
  const tasks = getTasks();
  console.log("All tasks:", tasks);
  return tasks;
}



function deleteTask(id) {
  let tasks = getTasks();
  tasks = tasks.filter(task => task.id !== id);
  saveTasks(tasks);
  console.log("Task ${id} deleted.");
}
addTask("hhhhh",2,3,4)