const questions=[
// Q1
    {
        question: "What is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
// Q 2
    {
        question: "What is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },

// Q 3
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true }
        ]
    },

// Q 4
{
    question: "What is the smallest continent in the world?",
    answers: [
        { text: "Asia", correct: false },
        { text: "Australia", correct: true },
        { text: "Arctic", correct: false },
        { text: "Africa", correct: false }
    ]
}
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score = 0;
//#region start the quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}
//#endregion end start quiz method

//#region Display question
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}
//#endregion end 
showQuestion();