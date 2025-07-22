alert(
  "This quiz is for entertainment purposes only. Each question will have 15 seconds to answer. \n" +
    "When a question is left unanswered within the given time, the system automatically selects any incorrect options with a red colour." +
    " It highlights the correct answer with a green colour."
);

const questions = [
  // Q1
  {
    question: "What is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },

  // Q 2
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Paries", correct: false },
      { text: "France", correct: false },
      { text: "Las Vagus", correct: false },
    ],
  },

  // Q 3
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Mar", correct: false },
      { text: "Antarctica", correct: false },
      { text: "Mars", correct: true },
    ],
  },

  // Q 4
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H20", correct: false },
      { text: "H2O", correct: true },
      { text: "H 2O", correct: false },
      { text: "Co2", correct: false },
    ],
  },

  // Q 5
  {
    question: "What is the smallest country in the world?",
    answers: [
      { text: "Vatican", correct: false },
      { text: "Vatican City", correct: true },
      { text: "Varticain City", correct: false },
      { text: "Togo", correct: false },
    ],
  },

  // Q 6
  {
    question: "What is the most common language in the world?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "French", correct: false },
      { text: "English", correct: false },
      { text: "Mandarin Chinese", correct: true },
    ],
  },

  // Q 7
  {
    question: "What was the United Nations established?",
    answers: [
      { text: "1944", correct: false },
      { text: "1945", correct: true },
      { text: "1930", correct: false },
      { text: "1953", correct: false },
    ],
  },

  // Q 8
  {
    question: "What Renaissance artist is buried in Rome's Pantheon?",
    answers: [
      { text: "Raphael", correct: true },
      { text: "Zaphael", correct: false },
      { text: "Hannibal", correct: false },
      { text: "Capone", correct: false },
    ],
  },

  // Q 9
  {
    question: "Who was the last Tsar of Russia?",
    answers: [
      { text: "Han Dynasty", correct: false },
      { text: "Marie Curie", correct: false },
      { text: "Nicholas II", correct: true },
      { text: "Blitzkrieg", correct: false },
    ],
  },

  // Q 10
  {
    question: "What was the name of the ancient Egyptian sun god?",
    answers: [
      { text: "Ra", correct: true },
      { text: "Fas", correct: false },
      { text: "Ras", correct: false },
      { text: "Rai", correct: false },
    ],
  },

  // Q 11
  {
    question: "How many elements are in the periodic table?",
    answers: [
      { text: "180", correct: false },
      { text: "118", correct: true },
      { text: "12O", correct: false },
      { text: "09", correct: false },
    ],
  },

  // Q 12
  {
    question: "How many bones do we have in an ear?",
    answers: [
      { text: "2", correct: false },
      { text: "4", correct: false },
      { text: "3", correct: true },
      { text: "1", correct: false },
    ],
  },

  // Q 13
  {
    question: "Which is the only body part that is fully grown from birth?",
    answers: [
      { text: "Hair", correct: false },
      { text: "Eyes", correct: true },
      { text: "Teeth", correct: false },
      { text: "Mouth", correct: false },
    ],
  },

  // Q 14
  {
    question:
      "What country has the longest total coastline (including mainland and offshore islands)?",
    answers: [
      { text: "Sweden", correct: false },
      { text: "Russia", correct: false },
      { text: "Canada", correct: true },
    ],
  },

  // Q 15
  {
    question:
      "Which of the these languages is the most spoken (native speakers only)?",
    answers: [
      { text: "Spanish", correct: true },
      { text: "English", correct: false },
      { text: "Hindi", correct: false },
      { text: "French", correct: false },
    ],
  },

  // Q 16
  {
    question: "Which country drinks the most coffee per capital?",
    answers: [
      { text: "USA", correct: false },
      { text: "Ghana", correct: false },
      { text: "Finland", correct: true },
    ],
  },

  // Q 17
  {
    question: "What is the world's best-selling stout beer?",
    answers: [
      { text: "Ghana Guinness", correct: false },
      { text: "Guinness", correct: true },
      { text: "Start beer", correct: false },
    ],
  },

  // Q 18
  {
    question: "Kratos is the main character of God of War video game series",
    answers: [
      { text: "False", correct: false },
      { text: "True", correct: true },
    ],
  },

  // Q 19
  {
    question: "Peregrine falcon is the world's fastest bird?",
    answers: [
      { text: "False", correct: false },
      { text: "True", correct: true },
    ],
  },

  // Q 20
  {
    question: "Snow White was the first Disney princess?",
    answers: [
      { text: "False", correct: false },
      { text: "True", correct: true },
    ],
  },
  // Q 21
  {
    question: "How many people have walked on the mood?",
    answers: [
      { text: "13", correct: false },
      { text: "12", correct: true },
    ],
  },
  // Q 22
  {
    question: "Andromeda Galaxy is the closest to the Milky Way Galaxy",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  // Q 23
  {
    question: "Who wrote 'Moby-Dick'?",
    answers: [
      { text: "George Orwell", correct: false },
      { text: "Sherlock Holmes", correct: false },
      { text: "Herman Melville", correct: true },
      { text: "J.D. Salinger", correct: false },
    ],
  },
  // Q 24
  {
    question: "In which book does the character Scout Finch appear?",
    answers: [
      { text: "To Kill a Mockingbird", correct: true },
      { text: "Oliver Twist", correct: false },
      { text: "The Picture of Dorian Gray", correct: false },
      { text: "The Hobbit", correct: false },
    ],
  },

  // Q 25
  {
    question: "Who wrote 'Pride and Prejudice'?",
    answers: [
      { text: "William Shakespeare", correct: false },
      { text: "Sherlock Holmes", correct: false },
      { text: "J.R.R. Tolkien", correct: false },
      { text: "Jane Austen", correct: true },
    ],
  },

  // Q 26
  {
    question: "What is the capital of Vietnam?",
    answers: [
      { text: "Saigon", correct: false },
      { text: "Manila", correct: false },
      { text: "Shanghai", correct: false },
      { text: "Hanoi", correct: true },
    ],
  },
  // Q 27
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Tokyo", correct: true },
      { text: "Beijing", correct: false },
      { text: "Seoul", correct: false },
      { text: "Bangkok", correct: false },
    ],
  },
  // Q 28
  {
    question: "What is the capital of South Korea?",
    answers: [
      { text: "Seoul", correct: true },
      { text: "Tokyo", correct: false },
      { text: "Beijing", correct: false },
      { text: "Bangkok", correct: false },
    ],
  },
  // Q 29
  {
    question: "How many bones does an adult human have?",
    answers: [
      { text: "Two hundred and six", correct: true },
      { text: "Two hundred and seven", correct: false },
      { text: "Two hundred and eight", correct: false },
      { text: "Two hundred and nine", correct: false },
    ],
  },
  // Q 30
  {
    question: "What is the capital of Canada?",
    answers: [
      { text: "Ottawa", correct: true },
      { text: "Toronto", correct: false },
      { text: "Vancouver", correct: false },
      { text: "Montreal", correct: false },
    ],
  },
];
const title = document.getElementById("title");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextbutton = document.getElementById("next-btn");
const timerShow = document.getElementById("timerShow"); // Make sure this element exists in your HTML

let currentQuestionIndex = 0;
let score = 0;
let timerInterval; // Declare timer interval variable here
let selectedQuestions = []; // Array to hold the 15 selected questions

//#region Shuffle array function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
//#endregion end Shuffle array function

//#region start the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  // Shuffle the questions and select the first 15
  const shuffledQuestions = shuffleArray([...questions]); // Create a copy to avoid modifying the original array
  selectedQuestions = shuffledQuestions.slice(0, 15);
  showQuestion();
}
//#endregion end start quiz method

//#region Display question
function showQuestion() {
  resetState();
  // Use selectedQuestions instead of the original questions array
  let currentQuestion = selectedQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  // Update the total number of questions displayed
  title.innerHTML = questionNo + "/(" + selectedQuestions.length + ")";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    if (questionNo === selectedQuestions.length) {
      nextbutton.innerHTML = "Finish Check Score";
    } else {
      nextbutton.innerHTML = "Next";
    }

    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });

  // Start the countdown timer display
  let timeLeft = 15; // Timer duration in seconds
  timerShow.innerHTML = `Time left: ${timeLeft} seconds`; // Display initial time

  timerInterval = setInterval(() => {
    timeLeft--;
    timerShow.innerHTML = `Time left: ${timeLeft} seconds`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval); // Stop the countdown

      // Check if an answer has already been selected (e.g., by checking if next button is visible)
      if (nextbutton.style.display === "none") {
        //console.log("Timer expired! Selecting an incorrect answer.");
        timerShow.innerHTML = `Time up ${timeLeft} seconds`;
        const incorrectAnswerButton = Array.from(answerButton.children).find(
          (button) => button.dataset.correct !== "true"
        );
        if (incorrectAnswerButton) {
          // Simulate click on an incorrect answer
          selectAnswer({ target: incorrectAnswerButton });
        } else {
          // Fallback if no incorrect answer is found (should not happen with current data)
          console.warn(
            "No incorrect answer found for automatic selection. Moving to next question."
          );
          handleNextButton();
        }
      }
    }
  }, 1000); // Update every 1 second
}
//#endregion end

//#region reset questions
function resetState() {
  nextbutton.style.display = "none";
  // Clear any existing timer interval when resetting state
  clearInterval(timerInterval);
  timerShow.innerHTML = `Time up 0 seconds`; // Clear timer display
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
//#endregion end

function selectAnswer(e) {
  // Clear the timer interval as soon as an answer is selected
  clearInterval(timerInterval);
  timerShow.innerHTML = `Time up 0 seconds`; // Clear timer display

  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbutton.style.display = "block";
}

function showScore() {
  resetState();
  // Use selectedQuestions.length for the total score
  questionElement.innerHTML = `Your scored ${score} out of ${selectedQuestions.length}!`;
  nextbutton.innerHTML = "Play again";
  nextbutton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  // Check against selectedQuestions.length
  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

//// Event listener for the next button
nextbutton.addEventListener("click", () => {
  // Check against selectedQuestions.length
  if (currentQuestionIndex < selectedQuestions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

// Start the quiz initially
startQuiz();
