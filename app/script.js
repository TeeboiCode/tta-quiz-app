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


const quizQuestions = [
  // Function Declarations & Expressions (6)
  {
    id: 1,
    question: "How do you start a function in JavaScript?",
    options: [
      "function myFunc()",
      "myFunc() function",
      "create function myFunc()",
      "function = myFunc()",
    ],
    correct: "function myFunc()",
  },
  {
    id: 2,
    question: "Which one is a function expression?",
    options: [
      "function sayHi() {}",
      "const sayHi = function() {}",
      "sayHi function() {}",
      "sayHi = func() {}",
    ],
    correct: "const sayHi = function() {}",
  },
  {
    id: 3,
    question: "What does a function do?",
    options: [
      "Stores a number",
      "Repeats the page",
      "Groups code to run when called",
      "Changes the browser",
    ],
    correct: "Groups code to run when called",
  },
  {
    id: 4,
    question: "What keyword is used to make a function?",
    options: [
      "def",
      "func",
      "function",
      "fun",
    ],
    correct: "function",
  },
  {
    id: 5,
    question: "Can you call a function before it is written using a function declaration?",
    options: [
      "Yes",
      "No",
      "Only in strict mode",
      "Only with arrow functions",
    ],
    correct: "Yes",
  },
  {
    id: 6,
    question: "What is the name for a function without a name?",
    options: [
      "Regular function",
      "Default function",
      "Anonymous function",
      "Open function",
    ],
    correct: "Anonymous function",
  },

  // Parameters vs Arguments (14)
  {
    id: 7,
    question: "What are parameters?",
    options: [
      "The name of a function",
      "Values passed to a function",
      "Names used in a function to receive values",
      "The output of a function",
    ],
    correct: "Names used in a function to receive values",
  },
  {
    id: 8,
    question: "What are arguments?",
    options: [
      "Values you pass to a function when calling it",
      "Names of the function",
      "Numbers only",
      "Outputs from functions",
    ],
    correct: "Values you pass to a function when calling it",
  },
  {
    id: 9,
    question: "Can a function have more than one parameter?",
    options: [
      "Yes",
      "No",
      "Only in modern JavaScript",
      "Only with arrow functions",
    ],
    correct: "Yes",
  },
  {
    id: 10,
    question: "What happens if you pass fewer arguments than parameters?",
    options: [
      "It gives an error",
      "The missing ones become undefined",
      "The extra ones are added",
      "It returns false",
    ],
    correct: "The missing ones become undefined",
  },
  {
    id: 11,
    question: "What keyword is used to get all arguments in old-style functions?",
    options: [
      "args",
      "rest",
      "arguments",
      "params",
    ],
    correct: "arguments",
  },
  {
    id: 12,
    question: "What does the rest parameter (...) do?",
    options: [
      "Sums all values",
      "Returns the first value",
      "Puts all extra arguments into an array",
      "Skips the function",
    ],
    correct: "Puts all extra arguments into an array",
  },
  {
    id: 13,
    question: "How do you use the rest parameter?",
    options: [
      "function show(...items)",
      "function show(items...)",
      "function show(...items[])",
      "function show(items*)",
    ],
    correct: "function show(...items)",
  },
  {
    id: 14,
    question: "Which one is an argument?",
    options: [
      "a, b",
      "5, 10 in myFunc(5, 10)",
      "function myFunc(a, b)",
      "function",
    ],
    correct: "5, 10 in myFunc(5, 10)",
  },
  {
    id: 15,
    question: "How many arguments does myFunc(3, 4, 5) have?",
    options: [
      "1",
      "2",
      "3",
      "None",
    ],
    correct: "3",
  },
  {
    id: 16,
    question: "How can you give a parameter a default value?",
    options: [
      "let name := 'Guest'",
      "name = 'Guest'",
      "function hello(name = 'Guest')",
      "default name = 'Guest'",
    ],
    correct: "function hello(name = 'Guest')",
  },
  {
    id: 17,
    question: "What happens if you use more arguments than parameters?",
    options: [
      "The extra ones are ignored",
      "It breaks the code",
      "All values are used",
      "It returns null",
    ],
    correct: "The extra ones are ignored",
  },
  {
    id: 18,
    question: "Can you pass strings as arguments?",
    options: [
      "Yes",
      "No",
      "Only with arrow functions",
      "Only if converted to numbers",
    ],
    correct: "Yes",
  },
  {
    id: 19,
    question: "Which is true?",
    options: [
      "Arguments and parameters are the same",
      "Parameters are the values you give",
      "Arguments are the values you pass to a function",
      "Parameters are only in arrow functions",
    ],
    correct: "Arguments are the values you pass to a function",
  },
  {
    id: 20,
    question: "Can a function be called without arguments?",
    options: [
      "Yes",
      "No",
      "Only in ES6",
      "Only with default parameters",
    ],
    correct: "Yes",
  },

  // Return Values (5)
  {
    id: 21,
    question: "What does 'return' do?",
    options: [
      "Stops the whole program",
      "Prints text",
      "Saves a value from the function",
      "Starts the function again",
    ],
    correct: "Saves a value from the function",
  },
  {
    id: 22,
    question: "What happens if you don’t use return in a function?",
    options: [
      "It returns 0",
      "It returns undefined",
      "It returns null",
      "It returns true",
    ],
    correct: "It returns undefined",
  },
  {
    id: 23,
    question: "Can you save the result of a function?",
    options: [
      "No",
      "Yes, by using return and a variable",
      "Only with alerts",
      "Only with prompts",
    ],
    correct: "Yes, by using return and a variable",
  },
  {
    id: 24,
    question: "Where should you put the return statement?",
    options: [
      "At the top",
      "Anywhere",
      "Inside the function",
      "Outside the function",
    ],
    correct: "Inside the function",
  },
  {
    id: 25,
    question: "Can return stop a function?",
    options: [
      "Yes",
      "No",
      "Only in loops",
      "Only with alerts",
    ],
    correct: "Yes",
  },

  // Arrow Functions (5)
  {
    id: 26,
    question: "Which is an arrow function?",
    options: [
      "() => 5",
      "=> 5()",
      "function => 5",
      "(=>) 5",
    ],
    correct: "() => 5",
  },
  {
    id: 27,
    question: "What is the arrow function for: function add(a, b) { return a + b; }",
    options: [
      "add = a, b => a + b",
      "let add = (a, b) => a + b",
      "add => (a, b) = a + b",
      "a + b => add()",
    ],
    correct: "let add = (a, b) => a + b",
  },
  {
    id: 28,
    question: "Arrow functions are usually:",
    options: [
      "Short and simple",
      "Long and complex",
      "Used in HTML",
      "Only for numbers",
    ],
    correct: "Short and simple",
  },
  {
    id: 29,
    question: "Arrow functions use the symbol:",
    options: [
      "*",
      "=>",
      "==>",
      "->",
    ],
    correct: "=>",
  },
  {
    id: 30,
    question: "Can arrow functions return values?",
    options: [
      "Yes",
      "No",
      "Only in React",
      "Only in ES5",
    ],
    correct: "Yes",
  }
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
