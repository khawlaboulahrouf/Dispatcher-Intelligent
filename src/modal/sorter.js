// NO CLASSES - just simple functions!

// Calculate how important a task is (returns score from 0-10)
export function calculateTaskScore() {
    // Start with urgency + importance (each 1-5, so total 2-10)
    let result = document.getElementById("btnQWIZ");
    let score = 0 ;
    result.addEventListener("click", () => {
        document.getElementById("QuizP").style.display = "none";
        let questionresult = {
        question1 : parseInt(document.getElementById("qestion1").value) ,
        question2 : parseInt(document.getElementById("qestion2").value) ,
        question3 : parseInt(document.getElementById("qestion3").value) 
    }
    score = questionresult.question1 + questionresult.question2 + questionresult.question3 ;
    })
    let tasklist0 = loadtasks();
    let tasklist = [];
    for(let i=0;i<tasklist0.length;i++){
        if(score > tasklist0[i]*3 ){
            tasklist.push(tasklist0[i])
        }
    }
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

export function loadtasks(){
    // localStorage.setItem('antiSaturator_tasks', JSON.stringify([
    // {
    //     id: "1",
    //     title: "Préparer présentation réunion",
    //     urgency: 5,
    //     importance: 5,
    //     effort: 4,
    // },
    // {
    //     id: "2",
    //     title: "Répondre emails clients",
    //     urgency: 4,
    //     importance: 3,
    //     effort: 2,
    //     createdAt: new Date(Date.now() - 172800000).toISOString() // 2 days ago
    // }]));
    let list = JSON.parse(localStorage.getItem('antiSaturator_tasks'));
    return list;

}
