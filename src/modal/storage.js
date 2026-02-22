const STORAGE_KEY_TASKS = "tasks";
const STORAGE_KEY_ENERGY = "antiSaturator_energy";

export function getTasks() {
  const data = localStorage.getItem(STORAGE_KEY_TASKS);
  return data ? JSON.parse(data) : [];
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(tasks));
}

export function saveEnergy(energy) {
  localStorage.setItem(STORAGE_KEY_ENERGY, JSON.stringify(energy));
}

export function getEnergy() {
  const data = localStorage.getItem(STORAGE_KEY_ENERGY);
  return data != null ? JSON.parse(data) : null;
}

export function addTask(title, urgency, important, effort) {
  const tasks = getTasks();
  const newTask = {
    id: Date.now(),
    title: String(title).trim(),
    urgency: Math.min(5, Math.max(1, Number(urgency) || 1)),
    important: Math.min(5, Math.max(1, Number(important) || 1)),
    effort: Math.min(5, Math.max(1, Number(effort) || 1)),
  };
  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
}

export function deleteTask(id) {
  const tasks = getTasks().filter((task) => task.id !== id);
  saveTasks(tasks);
}
