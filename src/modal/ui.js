
export function QuizUI(){
    let divP=document.createElement("div")
    divP.id="QuizP"
    divP.className="QuizP"
    let divB=document.createElement("div")
    divB.className="QuizB"
    divB.innerHTML=`
    <h1>Welcome</h1>
    <div class="qes">
      <label for="" style="display: block;">How awake do you feel this morning?</label>
      <input type="range" name="" id="qestion1" min="0" max="5" value="0"  ><p id="pqes1"></p>
    </div>
    <div class="qes">
      <label for="" style="display: block;">How much energy do you have to complete your tasks today?</label>
      <input type="range" name="" id="qestion2" min="0" max="5" value="0"  ><p id="pqes2"></p>
    </div>
    <div class="qes">
      <label for="" style="display: block;">How motivated do you feel to start new activities today?</label>
      <input type="range" name="" id="qestion3" min="0" max="5" value="0"  ><p id="pqes3"></p>
    </div>
    <button class="btnQWIZ" id="btnQWIZ">Let's Go </button> 
    `
    divP.appendChild(divB)
    document.body.appendChild(divP)   
    document.getElementById("qestion1").addEventListener("input",()=>{
        document.getElementById("pqes1").innerText=document.getElementById("qestion1").value
    })
    document.getElementById("qestion2").addEventListener("input",()=>{
        document.getElementById("pqes2").innerText=document.getElementById("qestion2").value
    })
    document.getElementById("qestion3").addEventListener("input",()=>{
        document.getElementById("pqes3").innerText=document.getElementById("qestion3").value
    })
}


export function DispalyTach() {
  let divP=document.createElement("div")
  divP.className="TaskPage"
  let h1=document.createElement("h1")
  h1.innerText="Mode Focus"
  divP.appendChild(h1)
  let divb=document.createElement("div")
  divb.className="Taskbody"
  divb.id="Taskbody"
  divb.innerHTML=`
  <h1 id="nameTask">Finiliser Présentation Canva</h1>
  <div id="infoCont" style="display: flex; flex-direction: row">
    <div class="info">
    <i class="ri-alert-fill" style="color:red; font-size: 40px;"></i>
      <p>3/5</p>
    </div>
    <div class="info">
    <i class="ri-star-fill" style="color:purple; font-size: 40px;"></i>
      <p>2/5</p>
    </div>
    <div class="info">
    <i class="ri-charging-pile-fill" style="color:green; font-size: 40px;"></i>
      <p>2/5</p>
    </div>
  </div>
  <div class="btnBlock">
    <button id="btnTr">TERMINE</button>
    <button id="btnps">PASSER</button>
  </div>
  `
  divP.appendChild(divb)
  document.body.appendChild(divP)
}


export function FomulaireAI() {
  let divP=document.createElement("div")
  divP.className="formPage"
  divP.id="formPage"
  divP.innerHTML=`
  <h1>Add Task</h1>
  <input id="nameT" type="text" placeholder="Write the name of the task " style="width: 200px;text-align: center;">
  <input id="urgentR" type="number" placeholder="Urgence (1-5)" max="5"  min="1" style="width: 200px;text-align: center;">
  <input id="impotanceR" type="number" placeholder="Importance (1-5)" min="1" max="5" style="width: 200px;text-align: center;">
  <input id="efforRR" type="number" placeholder="Effort requis (1-5)" min="1" max="5" style="width: 200px;text-align: center;">
  <button id="addTask">Add Task</button>
  `
  document.body.appendChild(divP)
}