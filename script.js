let quizContainer = document.getElementById("quiz-container");
let scoreContainer = document.getElementById("score");

let questions = [
    { question: "Which is the highest peak in the world?", options: ["Mount Everest", "Manaslu", "Lho Tse"], answer: "Mount Everest" },
    { question: "Who is the Prime minister of nepal?", options: ["KP Oli", "Balen", "Bhagwat Singh"], answer: "Balen" },
    { question: "What is the most expensive thing in the world?", options: ["Diamond", "BMW 657", "Antimatter"], answer: "Antimatter" },
    { question: "Which country has least GDP in the world?", options: ["Burundi", "Tuvalu", "Nepal"], answer: "Burundi" }
];

let currentIndex = 0;
let userScore = 0;

function showquestion(){
    let current=questions[currentIndex];
    let html=`<h1>${current.question}</h1>`;
    
    current.options.forEach(option=>{
        html+=`<button class="option-btn" onclick="checkanswer('${option}')">${option}</button>`;

    })
    quizContainer.innerHTML=html;

}

function checkanswer(selected){
    let current=questions[currentIndex];
    if(selected===current.answer){
        userScore++;
    }
    currentIndex++;
    
    if(currentIndex<questions.length){
        showquestion();
    }else{
        showscore();
    }
}

function showscore(){
    quizContainer.innerHTML = `<h2 class="score-text" >Your Score: ${userScore}/${questions.length}</h2>`;
}
showquestion();