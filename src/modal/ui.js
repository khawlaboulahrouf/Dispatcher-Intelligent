export function QuizUI() {
  const oldQuiz = document.getElementById("QuizP");
  if (oldQuiz) oldQuiz.remove();

  const divP = document.createElement("div");
  divP.id = "QuizP";
  divP.className = "QuizP";

  const divB = document.createElement("div");
  divB.className = "QuizB";
  divB.innerHTML = `
    <h1>Welcome</h1>
    <div class="qes">
      <label for="qestion1">How awake do you feel this morning?</label>
      <input type="range" id="qestion1" min="0" max="5" value="0" aria-valuemin="0" aria-valuemax="5">
      <span id="pqes1" class="slider-value">0</span>
    </div>
    <div class="qes">
      <label for="qestion2">How much energy do you have to complete your tasks today?</label>
      <input type="range" id="qestion2" min="0" max="5" value="0" aria-valuemin="0" aria-valuemax="5">
      <span id="pqes2" class="slider-value">0</span>
    </div>
    <div class="qes">
      <label for="qestion3">How motivated do you feel to start new activities today?</label>
      <input type="range" id="qestion3" min="0" max="5" value="0" aria-valuemin="0" aria-valuemax="5">
      <span id="pqes3" class="slider-value">0</span>
    </div>
    <button type="button" class="btnQWIZ" id="btnQWIZ">Let's Go</button>
  `;

  divP.appendChild(divB);
  document.body.appendChild(divP);

  const q1 = document.getElementById("qestion1");
  const q2 = document.getElementById("qestion2");
  const q3 = document.getElementById("qestion3");
  const updateDisplay = () => {
    document.getElementById("pqes1").textContent = q1.value;
    document.getElementById("pqes2").textContent = q2.value;
    document.getElementById("pqes3").textContent = q3.value;
  };

  q1.addEventListener("input", updateDisplay);
  q2.addEventListener("input", updateDisplay);
  q3.addEventListener("input", updateDisplay);
  updateDisplay();
}

export function DispalyTach(finaltask) {
  const oldTask = document.getElementById("TaskPage");
  if (oldTask) oldTask.remove();

  const divP = document.createElement("div");
  divP.id = "TaskPage";
  divP.className = "TaskPage";

  const divb = document.createElement("div");
  divb.className = "Taskbody";
  divb.id = "Taskbody";

  if (!finaltask) {
    divb.innerHTML = `
      <h2 class="no-tasks-title">No tasks yet</h2>
      <p class="no-tasks-text">Add a task to get started.</p>
      <div class="btnBlock">
        <button type="button" id="btnps">Ajouter</button>
      </div>
    `;
  } else {
    divb.dataset.taskId = String(finaltask.id);
    divb.innerHTML = `
      <h1 id="nameTask">${escapeHtml(finaltask.title)}</h1>
      <div id="infoCont" class="infoCont">
        <div class="info"><span class="emoji" aria-hidden="true">⚠️</span><p>${finaltask.urgency}/5</p></div>
        <div class="info"><span class="emoji" aria-hidden="true">⭐</span><p>${finaltask.important}/5</p></div>
        <div class="info"><span class="emoji" aria-hidden="true">⚡</span><p>${finaltask.effort}/5</p></div>
      </div>
      <div class="btnBlock">
        <button type="button" id="btnTr">Terminer</button>
        <button type="button" id="btnPasser">Passer</button>
        <button type="button" id="btnps">Ajouter</button>
      </div>
    `;
  }

  const h1 = document.createElement("h1");
  h1.className = "page-title";
  h1.textContent = "Mode Focus";
  divP.appendChild(h1);
  divP.appendChild(divb);
  document.body.appendChild(divP);
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

export function FomulaireAI() {
  const oldForm = document.getElementById("formPage");
  if (oldForm) oldForm.remove();

  const divP = document.createElement("div");
  divP.className = "formPage";
  divP.id = "formPage";
  divP.innerHTML = `
    <h1>Add Task</h1>
    <input id="nameT" type="text" placeholder="Write the name of the task" maxlength="50" autocomplete="off">
    <input id="urgentR" type="number" placeholder="Urgence (1-5)" min="1" max="5" value="3" aria-label="Urgence 1-5">
    <input id="impotanceR" type="number" placeholder="Importance (1-5)" min="1" max="5" value="3" aria-label="Importance 1-5">
    <input id="efforRR" type="number" placeholder="Effort requis (1-5)" min="1" max="5" value="3" aria-label="Effort 1-5">
    <button type="button" id="addTask">Add Task</button>
  `;
  document.body.appendChild(divP);
}
