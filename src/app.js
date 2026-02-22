import { QuizUI, DispalyTach, FomulaireAI } from "./modal/ui.js";
import { getBestTask } from "./modal/sorter.js";
import { Validation } from "./modal/validation.js";
import { addTask, saveEnergy, getEnergy, deleteTask } from "./modal/storage.js";

const skippedIds = new Set();

function getEnergySum() {
  const q1 = document.getElementById("qestion1");
  const q2 = document.getElementById("qestion2");
  const q3 = document.getElementById("qestion3");
  if (!q1 || !q2 || !q3) return 0;
  return (parseInt(q1.value, 10) || 0) + (parseInt(q2.value, 10) || 0) + (parseInt(q3.value, 10) || 0);
}

function showFocus() {
  const energy = getEnergy();
  const energySum = energy != null ? energy : 0;
  const task = getBestTask(energySum, skippedIds);
  DispalyTach(task);
  if (task) {
    attachTerminerEvent();
    attachPasserEvent();
  }
  attachAjouterEvent();
}

function showQuiz() {
  QuizUI();
  const btn = document.getElementById("btnQWIZ");
  if (btn) {
    btn.addEventListener("click", () => {
      const sum = getEnergySum();
      saveEnergy(sum);
      const quizEl = document.getElementById("QuizP");
      if (quizEl) quizEl.remove();
      showFocus();
    });
  }
}

function attachTerminerEvent() {
  const btn = document.getElementById("btnTr");
  const taskBody = document.getElementById("Taskbody");
  if (!btn || !taskBody) return;
  const taskId = taskBody.dataset.taskId;
  if (!taskId) return;
  btn.addEventListener("click", () => {
    deleteTask(Number(taskId));
    skippedIds.delete(Number(taskId));
    const energy = getEnergy();
    const task = getBestTask(energy != null ? energy : 0, skippedIds);
    DispalyTach(task);
    if (task) {
      attachTerminerEvent();
      attachPasserEvent();
    }
    attachAjouterEvent();
  });
}

function attachPasserEvent() {
  const btn = document.getElementById("btnPasser");
  const taskBody = document.getElementById("Taskbody");
  if (!btn || !taskBody) return;
  const taskId = taskBody.dataset.taskId;
  if (!taskId) return;
  btn.addEventListener("click", () => {
    skippedIds.add(Number(taskId));
    const energy = getEnergy();
    const task = getBestTask(energy != null ? energy : 0, skippedIds);
    DispalyTach(task);
    if (task) {
      attachTerminerEvent();
      attachPasserEvent();
    }
    attachAjouterEvent();
  });
}

function attachAjouterEvent() {
  const btn = document.getElementById("btnps");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const taskPage = document.getElementById("TaskPage");
    if (taskPage) taskPage.style.display = "none";
    FomulaireAI();
    const btnAT = document.getElementById("addTask");
    if (btnAT) {
      btnAT.addEventListener("click", () => {
        const nameT = document.getElementById("nameT").value.trim();
        const urgence = document.getElementById("urgentR").value;
        const imp = document.getElementById("impotanceR").value;
        const efortR = document.getElementById("efforRR").value;
        if (!Validation(nameT)) {
          alert("Task name should be 5–50 characters and contain only letters, numbers and spaces.");
          return;
        }
        addTask(nameT, urgence, imp, efortR);
        const formPage = document.getElementById("formPage");
        if (formPage) formPage.remove();
        const taskPage = document.getElementById("TaskPage");
        if (taskPage) taskPage.style.display = "";
        showFocus();
      });
    }
  });
}

showQuiz();
