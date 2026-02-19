import {QuizUI,DispalyTach,FomulaireAI} from "./modal/ui.js";
import {calculateTaskScore,loadtasks} from "./modal/sorter.js";
import{Validation} from "./modal/validation.js"
import{addTask} from "./modal/storage.js"
// QuizUI()
// DispalyTach(calculateTaskScore())

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

FomulaireAI()
let btnAT=document.getElementById("addTask")
btnAT.addEventListener("click",()=>{
     let nameT=document.getElementById("nameT").value
     let urgence=document.getElementById("urgentR").value
     let imp=document.getElementById("impotanceR").value
     let efortR=document.getElementById("efforRR").value
      if(Validation(nameT)){
          addTask(nameT,urgence,imp,efortR)
      }else{
         alert("you should to update the name of the task to don't have any caractere specifique")
      }
})
