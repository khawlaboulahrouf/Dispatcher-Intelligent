import {QuizUI,DispalyTach,FomulaireAI} from "./modal/ui.js";
import {calculateTaskScore,loadtasks} from "./modal/sorter.js";
QuizUI()

DispalyTach(calculateTaskScore())

// let ter=document.getElementById("btnTr")
// let pass=document.getElementById("btnps")

// ter.addEventListener("click",()=>{
//     // hna l code mnin gadi tmxi l formulaire add
//     console.log("button terminer")
// })

// pass.addEventListener("click",()=>{
//     console.log("passer terminer")
//     // hna l code bach delete the task 
// })

// FomulaireAI()
// let btnAT=document.getElementById("addTask")
// btnAT.addEventListener("click",()=>{
//     console.log("Add Button")
// })
