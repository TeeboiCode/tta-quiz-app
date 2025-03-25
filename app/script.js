const preload = document.querySelector(".preload");
const startBtn = document.querySelector("#btn_start");
const quizRulesCard = document.querySelector("#quiz_rules");
const continueBtn = document.querySelector("#continueBtn");
const countdownContainer = document.querySelector(".count-down-container ");
const exitBtn = document.querySelector("#exitBtn");
let quizCard = document.querySelector("#quiz_card");
let countdownText = document.getElementById("countdownText");
let countdownNum = document.getElementById("countdownNum");
let countdownTime = document.querySelector(".tym");
let questions = document.querySelector("#question");
let optionAnswerBtn = document.querySelector("#answer-option");
let complete = document.querySelector("#complete");
let correctScore = document.querySelector(".correct-score");
let totalQuestion = document.querySelector(".total-question");
let totalQuestion2 = document.querySelector(".total-question2");
let nextQuestion = document.querySelector(".next-question");
let replayBtn = document.querySelector(".replay-btn");
let quitBtn = document.querySelector(".quit-btn");
let questionNextNum = document.querySelector(".questionNextNum");
let percentageScore = document.querySelector(".percentage-score");
let percentageContainer = document.querySelector("#percentage");
const playerForm = document.getElementById("playerForm");
const playerNameInput = document.getElementById("playerName");
const nameContainer = document.querySelector("#nameContainer");
let playerName = "";

// form
let userForm = document.querySelector("#userForm");
let firstName = document.querySelector("#firstNameInput");
let lastName = document.querySelector("#lastNameInput");
let isEventDisabled;

// setting setTimeout for preloading
stopLoad();
function stopLoad() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      preload.classList.add("hidden");
      nameContainer.classList.remove("hidden");
      // startBtn.classList.remove("hidden");
    }, 2000);
  });
}

// name submit
playerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  playerName = playerNameInput.value.trim();

  if (playerName === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter your name!",
    });
    return;
  }

  nameContainer.classList.add("hidden");
  startBtn.classList.remove("hidden");

  Swal.fire({
    icon: "success",
    title: `Welcome ${playerName}!`,
    text: "Click Start Quiz when you're ready to begin.",
    confirmButtonText: "OK",
  });
});

function saveQuizResult(score) {
  let results = JSON.parse(localStorage.getItem("quizResults")) || [];

  const newResult = {
    name: playerName,
    score: correctPicked,
    total: quizQuestions.length,
    percentage: ((correctPicked / quizQuestions.length) * 100).toFixed(1),
    date: new Date().toLocaleDateString(),
  };

  results.push(newResult);

  results.sort((a, b) => b.percentage - a.percentage);

  localStorage.setItem("quizResults", JSON.stringify(results));

  // window.location.href = "results.html";
}

// adding Event Listener to start btn
startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  preload.style.display = "flex";
  setTimeout(() => {
    preload.classList.add("hidden");
    quizRulesCard.classList.remove("hidden");
  }, 2000);
});

// Start Quiz
continueBtn.addEventListener("click", continueGo);

function continueGo() {
  countdownContainer.classList.remove("hidden");
  quizRulesCard.classList.add("hidden");

  let countdown = 3;
  countdownText.textContent = "Get ready... The game starts in ";
  countdownNum.textContent = "3";

  const interval = setInterval(() => {
    if (countdown > 1) {
      countdown--;
      countdownText.textContent = `Get ready... The game starts in `;
      countdownNum.textContent = countdown;
    } else {
      clearInterval(interval);
      countdownText.textContent = "Go!";
      countdownNum.classList.add("hidden");
      countdownContainer.classList.add("hidden");
      quizCard.classList.remove("hidden");
      startCountDown();
      //   const goInterval = setInterval(() => {

      //   }, 500);
    }
  }, 1000);
}

// Exit Button
exitBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure you want to exit?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0a69ed",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      // window.close();
      preload.style.display = "flex";
      quizRulesCard.classList.add("hidden");
      window.setTimeout(() => {
        preload.style.display = "none";
        startBtn.classList.remove("hidden");
      }, 1000);
    }
  });
});

// Next question counting down
let isClicked = false;
function startCountDown() {
  countingDown = 30;

  countdownTime.innerHTML = countingDown;

  let countingDownInterval = setInterval(() => {
    countingDown--;
    // console.log(countingDown);

    countdownTime.innerHTML = countingDown;
    if (countingDown === 0) {
      // isClicked = false;
      clearInterval(countingDownInterval);
      load();
      // next();
      return;
    } else if (isClicked) {
      isClicked = false;
      clearInterval(countingDownInterval);
      next();
      return;
    }
  }, 2000);
}

// ======================
// ======================
// Questions
// ======================
// ======================

// HTML

const quizQuestions = [
  // Null and Undefined (7 Questions)
  {
    id: 1,
    question: "What does 'null' represent in JavaScript?",
    options: [
      "An empty string",
      "A non-existent or invalid value",
      "Undefined",
      "Zero",
    ],
    correct: "A non-existent or invalid value",
  },
  {
    id: 2,
    question: "What is the type of 'null' in JavaScript?",
    options: ["null", "undefined", "object", "string"],
    correct: "object",
  },
  {
    id: 3,
    question: "What does 'undefined' mean in JavaScript?",
    options: [
      "A declared but uninitialized variable",
      "An error",
      "A null value",
      "A string",
    ],
    correct: "A declared but uninitialized variable",
  },
  {
    id: 4,
    question: "What is the result of 'typeof undefined'?",
    options: ["null", "undefined", "object", "string"],
    correct: "undefined",
  },
  {
    id: 5,
    question: "Which of these values is falsy?",
    options: ["null", "undefined", "all", "Neither"],
    correct: "all",
  },
  {
    id: 6,
    question: "What happens when you compare null and undefined with '=='?",
    options: [
      "They are equal",
      "They are not equal",
      "It throws an error",
      "They are strictly equal",
    ],
    correct: "They are equal",
  },
  {
    id: 7,
    question: "What is the strict comparison result of null === undefined?",
    options: ["true", "false", "null", "undefined"],
    correct: "false",
  },

  // Scope (Global, Block, Function Scope) (8 Questions)
  {
    id: 8,
    question: "Which keyword declares a block-scoped variable?",
    options: ["var", "let", "const", "Both let and const"],
    correct: "Both let and const",
  },
  {
    id: 9,
    question: "Which variables are accessible globally?",
    options: [
      "Variables declared with var",
      "Variables declared with let",
      "Variables declared inside a function",
      "All variables",
    ],
    correct: "Variables declared with var",
  },
  {
    id: 10,
    question: "What is function scope?",
    options: [
      "Variables declared inside a function are accessible only inside it",
      "Variables can be accessed globally",
      "Only const variables are function scoped",
      "Variables declared inside loops",
    ],
    correct:
      "Variables declared inside a function are accessible only inside it",
  },
  {
    id: 11,
    question: "What happens when a variable is declared without any keyword?",
    options: [
      "It becomes a global variable",
      "It throws an error",
      "It is block-scoped",
      "It is undefined",
    ],
    correct: "It becomes a global variable",
  },
  {
    id: 12,
    question:
      "Which keyword is used to define a variable with a global scope inside a function?",
    options: ["var", "let", "const", "None"],
    correct: "var",
  },
  {
    id: 13,
    question: "What is the scope of variables declared using 'let'?",
    options: ["Function scope", "Block scope", "Global scope", "None"],
    correct: "Block scope",
  },
  {
    id: 14,
    question: "Can a variable declared with 'const' be reassigned?",
    options: ["Yes", "No", "Only if it's a string", "Only in a block"],
    correct: "No",
  },
  {
    id: 15,
    question: "What is the scope of a 'var' variable?",
    options: [
      "Global or function scope",
      "Block scope",
      "Only within loops",
      "None",
    ],
    correct: "Global or function scope",
  },

  // Boolean (10 Questions)
  {
    id: 16,
    question: "What is the Boolean value of an empty string?",
    options: ["true", "false", "null", "undefined"],
    correct: "false",
  },
  {
    id: 17,
    question: "What does Boolean(0) return?",
    options: ["true", "false", "null", "undefined"],
    correct: "false",
  },
  {
    id: 18,
    question: "What is the Boolean value of 'false' == '0'?",
    options: ["true", "false", "null", "undefined"],
    correct: "true",
  },
  {
    id: 19,
    question: "Which of these values is truthy?",
    options: ["0", "false", "'false'", "null"],
    correct: "'false'",
  },
  {
    id: 20,
    question: "Which of these evaluates to false?",
    options: ["null", "undefined", "NaN", "All of the above"],
    correct: "All of the above",
  },
  {
    id: 21,
    question: "What is the result of Boolean([])?",
    options: ["true", "false", "undefined", "null"],
    correct: "true",
  },
  {
    id: 22,
    question: "What is the result of 'true && false'?",
    options: ["true", "false", "null", "undefined"],
    correct: "false",
  },
  {
    id: 23,
    question: "What is the result of 'false || true'?",
    options: ["true", "false", "null", "undefined"],
    correct: "true",
  },
  {
    id: 24,
    question: "Which logical operator returns true if both operands are true?",
    options: ["&&", "||", "!", "None"],
    correct: "&&",
  },
  {
    id: 25,
    question: "Which logical operator negates a Boolean value?",
    options: ["&&", "||", "!", "??"],
    correct: "!",
  },

  // Variables (5 Questions)
  {
    id: 26,
    question: "Which keyword should be used to declare a constant variable?",
    options: ["var", "let", "const", "None of the above"],
    correct: "const",
  },
  {
    id: 27,
    question: "Which keyword allows you to reassign values to a variable?",
    options: ["var", "let", "const", "Both var and let"],
    correct: "Both var and let",
  },
  {
    id: 28,
    question: "What is the default value of an uninitialized variable?",
    options: ["null", "undefined", "0", "NaN"],
    correct: "undefined",
  },
  {
    id: 29,
    question: "Which variable declaration is preferred for block scope?",
    options: ["var", "let", "const", "Both let and const"],
    correct: "Both let and const",
  },
  {
    id: 30,
    question: "Which keyword is function-scoped by default?",
    options: ["var", "let", "const", "None"],
    correct: "var",
  },
];

let remainingQuestion = [...quizQuestions];
// console.log(remainingQuestion);

let wrongPicked = 0;
let correctPicked = 0;
let askedQuestionIndex = [];
totalQuestion2.textContent = quizQuestions.length;

function getRandomNumber() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * remainingQuestion.length);
  } while (askedQuestionIndex.includes(randomIndex));
  askedQuestionIndex.push(randomIndex);

  return randomIndex;
}

displayQuestion();
function displayQuestion() {
  if (askedQuestionIndex.length === remainingQuestion.length) {
    quizCard.classList.add("hidden");
    preload.style.display = "flex";
    setTimeout(() => {
      preload.classList.add("hidden");
      complete.classList.remove("hidden");
    }, 3000);

    // Calculate scores
    const correctPercentage = (
      (correctPicked / remainingQuestion.length) *
      100
    ).toFixed(1);
    correctScore.textContent = correctPicked;
    totalQuestion.textContent = quizQuestions.length;
    percentageScore.textContent = correctPercentage;

    if (correctPercentage >= 70) {
      percentageContainer.style.color = "#00cc00";
    } else if (correctPercentage >= 50) {
      percentageContainer.style.color = "#cca300";
    } else {
      percentageContainer.style.color = "#e62e00";
    }

    console.log("Complete!" + correctPercentage);
    console.log("Wrong Answers: " + wrongPicked);
    console.log("Correct Answers: " + correctPicked);

    // Save results
    saveQuizResult();

    return;
  }

  let randomOptionIndex = [0, 1, 2, 3];
  randomOptionIndex.sort(() => Math.random() - 0.5);
  randomOptionIndex.forEach((num) => {
    num;
  });

  const currentQuestionIndex = getRandomNumber();
  const currentQuestion = remainingQuestion[currentQuestionIndex];
  questions.textContent = currentQuestion.question;
  optionAnswerBtn.innerHTML = "";

  currentQuestion.options.forEach((option, i) => {
    const button = document.createElement("p");
    button.textContent = option;
    button.classList.add("answer-option");
    optionAnswerBtn.appendChild(button);
    button.textContent = currentQuestion.options[randomOptionIndex[i]];

    isEventDisabled = true;

    button.addEventListener("click", () => {
      if (isEventDisabled) {
        if (button.textContent === currentQuestion.correct) {
          correctAns();
          correctPicked++;
        } else {
          correctAns();
          wrongPicked++;
          button.classList.add("wrong");
        }
        isEventDisabled = false;
      }
    });
  });

  let optionAnswerBtnNew = document.querySelectorAll(".answer-option");
  // ====================
  // Correct Function
  // ====================
  function correctAns() {
    optionAnswerBtnNew.forEach((btn) => {
      if (btn.textContent === currentQuestion.correct) {
        btn.classList.add("success");
      }
    });
    isClicked = true;
  }

  questionNextNum.textContent = `${askedQuestionIndex.length}. `;
  nextQuestion.textContent = askedQuestionIndex.length;
  console.log(askedQuestionIndex);
}

function next() {
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  load();
});

function load() {
  displayQuestion();
  startCountDown();
  nextBtn.classList.add("hidden");
}

replayBtn.addEventListener("click", () => {
  // complete.classList.add("hidden");
  window.location.reload();
});

// Quit Button
quitBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure you want to quit the game?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0a69ed",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../ttaJavaScript.html";
    }
  });
});
