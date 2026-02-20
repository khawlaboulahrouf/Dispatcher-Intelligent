import { QuizUI, DispalyTach, FomulaireAI } from "./modal/ui.js";
import { calculateTaskScore } from "./modal/sorter.js";
import { Validation } from "./modal/validation.js";
import { addTask } from "./modal/storage.js";
QuizUI();
let final = calculateTaskScore()
console.log(final)
DispalyTach(final);
attachAjouterEvent();
function attachAjouterEvent() {
    let Ajouter = document.getElementById("btnps");
    if (Ajouter) {
        Ajouter.addEventListener("click", () => {
            console.log("hello word");
            document.getElementById("TaskPage").style.display = "none";
            FomulaireAI();
            let btnAT = document.getElementById("addTask");
            btnAT.addEventListener("click", () => {
                let nameT = document.getElementById("nameT").value;
                let urgence = document.getElementById("urgentR").value;
                let imp = document.getElementById("impotanceR").value;
                let efortR = document.getElementById("efforRR").value;
                if (Validation(nameT)) {
                    addTask(nameT, urgence, imp, efortR);
                    document.getElementById("formPage").remove();
                    QuizUI();
                    DispalyTach(calculateTaskScore());
                    attachAjouterEvent();
                } else {

                    alert("Task name should not contain special characters");

                }

            });

        });

    }
}