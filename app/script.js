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
  // Variables (var, let, const)
  {
    id: 1,
    question: "Which keyword should be used to declare a constant variable?",
    options: ["var", "let", "const", "None of the above"],
    correct: "const",
  },
  {
    id: 2,
    question: "Which keyword allows you to reassign values to a variable?",
    options: ["var", "let", "const", "Both var and let"],
    correct: "Both var and let",
  },
  {
    id: 3,
    question: "What happens if you redeclare a 'let' variable in the same scope?",
    options: [
      "It throws an error",
      "It overwrites the previous value",
      "It creates a new variable",
      "It is allowed in strict mode",
    ],
    correct: "It throws an error",
  },
  {
    id: 4,
    question: "Which variable declaration is function-scoped?",
    options: ["var", "let", "const", "None of the above"],
    correct: "var",
  },
  {
    id: 5,
    question: "Which variable declaration is block-scoped?",
    options: ["var", "let", "const", "Both let and const"],
    correct: "Both let and const",
  },
  {
    id: 6,
    question: "Which keyword was introduced in ES6 to declare variables?",
    options: ["var", "let", "const", "Both let and const"],
    correct: "Both let and const",
  },
  {
    id: 7,
    question: "Which of the following can be reassigned a new value?",
    options: ["var", "let", "const", "Both var and let"],
    correct: "Both var and let",
  },
  {
    id: 8,
    question: "What will happen if you try to change a 'const' variable's value?",
    options: [
      "It will throw an error",
      "It will change the value",
      "It will create a new variable",
      "It will delete the variable",
    ],
    correct: "It will throw an error",
  },
  {
    id: 9,
    question: "Which variable declaration allows hoisting but initializes with 'undefined'?",
    options: ["var", "let", "const", "None of the above"],
    correct: "var",
  },
  {
    id: 10,
    question: "Which variable declaration is best for immutable values?",
    options: ["var", "let", "const", "None of the above"],
    correct: "const",
  },

  // Scope
  {
    id: 11,
    question: "Which type of scope does 'var' have?",
    options: ["Global", "Function", "Block", "Both Global and Function"],
    correct: "Both Global and Function",
  },
  {
    id: 12,
    question: "Which variables are block-scoped?",
    options: ["var", "let", "const", "Both let and const"],
    correct: "Both let and const",
  },
  {
    id: 13,
    question: "What happens if you access a variable before declaring it using 'let'?",
    options: [
      "It will be undefined",
      "It will throw an error",
      "It will return null",
      "It will work fine",
    ],
    correct: "It will throw an error",
  },
  {
    id: 14,
    question: "What is the scope of a 'const' variable?",
    options: ["Global", "Function", "Block", "All of the above"],
    correct: "Block",
  },
  {
    id: 15,
    question: "Which of the following will NOT be accessible outside a function?",
    options: ["var", "let", "const", "Function-declared variables"],
    correct: "Function-declared variables",
  },

  // Primitive Data Types (Strings & Numbers)
  {
    id: 16,
    question: "Which symbol is used for string concatenation in JavaScript?",
    options: ["+", "&", "%", "$"],
    correct: "+",
  },
  {
    id: 17,
    question: "How do you escape a double quote inside a string?",
    options: [
      "Using a backslash (\\)",
      "Using single quotes",
      "Using curly braces",
      "You cannot escape it",
    ],
    correct: "Using a backslash (\\)",
  },
  {
    id: 18,
    question: "Which property is used to find the length of a string?",
    options: ["size", "length", "count", "index"],
    correct: "length",
  },
  {
    id: 19,
    question: "What will be the output of 'Hello'.length?",
    options: ["4", "5", "6", "Undefined"],
    correct: "5",
  },
  {
    id: 20,
    question: "How can you get the first character of a string?",
    options: ["string[0]", "string.charAt(0)", "Both A and B", "None of the above"],
    correct: "Both A and B",
  },
  {
    id: 21,
    question: "What is the result of 10 % 3?",
    options: ["1", "3", "0", "10"],
    correct: "1",
  },
  {
    id: 22,
    question: "What will '5' + 3 return?",
    options: ["53", "8", "Error", "undefined"],
    correct: "53",
  },
  {
    id: 23,
    question: "What will '5' - 3 return?",
    options: ["2", "53", "Error", "undefined"],
    correct: "2",
  },
  {
    id: 24,
    question: "Which method is used to convert a string to a number?",
    options: ["parseInt()", "toNumber()", "convert()", "parseFloat()"],
    correct: "parseInt()",
  },
  {
    id: 25,
    question: "Which function returns the highest value from a list of numbers?",
    options: ["Math.max()", "Math.min()", "Math.ceil()", "Math.floor()"],
    correct: "Math.max()",
  },
  {
    id: 26,
    question: "What is the output of Math.floor(4.9)?",
    options: ["4", "5", "4.9", "Undefined"],
    correct: "4",
  },
  {
    id: 27,
    question: "What will 'Hello'.indexOf('e') return?",
    options: ["1", "2", "-1", "0"],
    correct: "1",
  },
  {
    id: 28,
    question: "What will 'Hello'.indexOf('x') return?",
    options: ["1", "-1", "0", "Error"],
    correct: "-1",
  },
  {
    id: 29,
    question: "What is the result of Math.ceil(4.1)?",
    options: ["4", "5", "4.5", "4.1"],
    correct: "5",
  },
  {
    id: 30,
    question: "Which method is used to find a character at a specific index in a string?",
    options: ["charAt()", "charIndex()", "getChar()", "indexOf()"],
    correct: "charAt()",
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
