// NO CLASSES - just simple functions!
import {displayTasks} from "./storage.js"

// Calculate how important a task is (returns score from 0-10)
export function calculateTaskScore() {
    // Start with urgency + important (each 1-5, so total 2-10)
    let result = document.getElementById("btnQWIZ");
    let score = 0 ;
    result.addEventListener("click", () => {
        document.getElementById("QuizP").style.display = "none";
        let questionresult = {
        question1 : parseInt(document.getElementById("qestion1").value) ,
        question2 : parseInt(document.getElementById("qestion2").value) ,
        question3 : parseInt(document.getElementById("qestion3").value) ,
    }
    console.log("hello word")
    score = questionresult.question1 + questionresult.question2 + questionresult.question3 ;
    })
    let tasklist = displayTasks();
    let finaltask = 0;
    let hiestscore = 0
    
    if(score > 11){
        for(let i=0;i<tasklist.length;i++){
            if(hiestscore < (tasklist[i].urgency+tasklist[i].important)){
                hiestscore = tasklist[i].urgency+tasklist[i].important;
                finaltask = tasklist[i] ;
            }
        }
    }else if(score > 7){
        for(let i=0;i<tasklist.length;i++){
            if(hiestscore < (tasklist[i].important + tasklist[i].urgency*0.3)){
                hiestscore = tasklist[i].important + tasklist[i].urgency*0.3;
                finaltask = tasklist[i] ;
            }
        }
    }else if(score > 4){
        for(let i=0;i<tasklist.length;i++){
            if(hiestscore < tasklist[i].urgency){
                hiestscore = tasklist[i].urgency;
                finaltask = tasklist[i] ;
            }
        }
    }else {
        for(let i=0;i<tasklist.length;i++){
            if(hiestscore > tasklist[i].effort ){
                hiestscore = tasklist[i].effort;
                finaltask = tasklist[i];
            }
        }
    }
    return finaltask;
}
