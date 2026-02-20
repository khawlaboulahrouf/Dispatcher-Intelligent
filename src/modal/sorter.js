// NO CLASSES - just simple functions!
import {displayTasks,getTasks} from "./storage.js"

// Calculate how important a task is (returns score from 0-10)
// export function calculateTaskScore() {
//     // Start with urgency + important (each 1-5, so total 2-10)
//     let result = document.getElementById("btnQWIZ");
//     let score = 0 ;
//     result.addEventListener("click", () => {
//         document.getElementById("QuizP").style.display = "none";
//         let questionresult = {
//         question1 : parseInt(document.getElementById("qestion1").value) ,
//         question2 : parseInt(document.getElementById("qestion2").value) ,
//         question3 : parseInt(document.getElementById("qestion3").value) ,
//     }
//     console.log("hello word")
//     score = questionresult.question1 + questionresult.question2 + questionresult.question3 ;
//     })
//     let tasklist0 = loadtasks();
//     let tasklist = [];
//     for(let i=0;i<tasklist0.length;i++){
//         if(score > tasklist0[i]*3 ){
//             tasklist.push(tasklist0[i])
//         }
//     }
//     let finaltask = 0;
//     let hiestscore = 0
    
//     if(score > 11){
//         for(let i=0;i<tasklist.length;i++){
//             if(hiestscore < (tasklist[i].urgency+tasklist[i].important)){
//                 hiestscore = tasklist[i].urgency+tasklist[i].important;
//                 finaltask = tasklist[i] ;
//             }
//         }
//     }else if(score > 7){
//         for(let i=0;i<tasklist.length;i++){
//             if(hiestscore < (tasklist[i].important + tasklist[i].urgency*0.3)){
//                 hiestscore = tasklist[i].important + tasklist[i].urgency*0.3;
//                 finaltask = tasklist[i] ;
//             }
//         }
//     }else if(score > 4){
//         for(let i=0;i<tasklist.length;i++){
//             if(hiestscore < tasklist[i].urgency){
//                 hiestscore = tasklist[i].urgency;
//                 finaltask = tasklist[i] ;
//             }
//         }
//     }else {
//         for(let i=0;i<tasklist.length;i++){
//             if(hiestscore > tasklist[i].effort ){
//                 hiestscore = tasklist[i].effort;
//                 finaltask = tasklist[i];
//             }
//         }
//     }
//     return finaltask;
// }


// begin

export function calculateTaskScore() {
    // Get the quiz button and add event listener
    let result = document.getElementById("btnQWIZ");
    let score = 0;
    
    result.addEventListener("click", () => {
        document.getElementById("QuizP").style.display = "none";
        
        let questionresult = {
            question1: parseInt(document.getElementById("qestion1").value),
            question2: parseInt(document.getElementById("qestion2").value),
            question3: parseInt(document.getElementById("qestion3").value),
        }
        
        score = questionresult.question1 + questionresult.question2 + questionresult.question3;
        
        // Now find and display the best task
        let bestTask = findBestTask(score);
        console.log("Best task:", bestTask);
        return bestTask;
    });
}

function findBestTask(score) {
    let tasklist0 = getTasks();
    let tasklist = [];
    
    // Filter tasks based on energy score
    for (let i = 0; i < tasklist0.length; i++) {
        if (score > tasklist0[i].effort * 3) {
            tasklist.push(tasklist0[i]);
        }
    }
    
    let finaltask = null;
    let highestscore = 0;
    
    // Different prioritization based on energy level
    if (score > 11) { // High energy - prioritize urgency + importance
        for (let i = 0; i < tasklist.length; i++) {
            let currentScore = tasklist[i].urgency + tasklist[i].important;
            if (highestscore < currentScore) {
                highestscore = currentScore;
                finaltask = tasklist[i];
            }
        }
    } 
    else if (score > 7) { // Medium energy - importance matters more
        for (let i = 0; i < tasklist.length; i++) {
            let currentScore = tasklist[i].important + (tasklist[i].urgency * 0.3);
            if (highestscore < currentScore) {
                highestscore = currentScore;
                finaltask = tasklist[i];
            }
        }
    } 
    else if (score > 4) { // Low energy - just urgency
        for (let i = 0; i < tasklist.length; i++) {
            if (highestscore < tasklist[i].urgency) {
                highestscore = tasklist[i].urgency;
                finaltask = tasklist[i];
            }
        }
    } 
    else { // Very low energy - easiest task
        for (let i = 0; i < tasklist.length; i++) {
            if (i === 0 || tasklist[i].effort < highestscore) {
                highestscore = tasklist[i].effort;
                finaltask = tasklist[i];
            }
        }
    }
    
    return finaltask;
}

// fin