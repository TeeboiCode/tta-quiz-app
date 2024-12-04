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
  // document.querySelector(".btn-start").classList.remove("hidden");

  Swal.fire({
    icon: "success",
    title: `Welcome ${playerName}!`,
    text: "Click Start Quiz when you're ready to begin.",
    confirmButtonText: "OK",
  });
});

// Modify your existing window.addEventListener('load') function
// window.addEventListener("load", () => {
//   setTimeout(() => {
//     preload.classList.add("hidden");
//     nameContainer.classList.remove("hidden"); // Show name form instead of start button
//   }, 2000);
// });

function saveQuizResult(score) {
  // Get existing results or initialize empty array
  let results = JSON.parse(localStorage.getItem("quizResults")) || [];

  // Create new result object
  const newResult = {
    name: playerName, // You'll need to collect this from the user
    score: correctPicked,
    total: quizQuestions.length,
    percentage: ((correctPicked / quizQuestions.length) * 100).toFixed(1),
    date: new Date().toLocaleDateString(),
  };

  // Add new result to array
  results.push(newResult);

  // Sort by score (highest first)
  results.sort((a, b) => b.percentage - a.percentage);

  // Store in localStorage
  localStorage.setItem("quizResults", JSON.stringify(results));

  // Redirect to results page
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
  }, 1000);
}

// =============================
//Questions and Options array
// =============================

// const quizQuestions = [
//   {
//     id: 1,
//     question: "What is the data type of `true` in JavaScript?",
//     options: ["String", "Boolean", "Number", "Object"],
//     correct: "Boolean",
//   },
//   {
//     id: 2,
//     question: "Which keyword is used to define a block-scoped variable?",
//     options: ["var", "let", "function", "global"],
//     correct: "let",
//   },
//   {
//     id: 3,
//     question: "What is the result of `typeof null` in JavaScript?",
//     options: ["null", "undefined", "object", "boolean"],
//     correct: "object",
//   },
//   {
//     id: 4,
//     question: "Variables declared with 'const' cannot:",
//     options: ["Be redeclared", "Be reassigned", "Be global", "Be block-scoped"],
//     correct: "Be reassigned",
//   },
//   {
//     id: 5,
//     question: "Which data type represents a sequence of characters?",
//     options: ["String", "Boolean", "Array", "Number"],
//     correct: "String",
//   },
//   {
//     id: 6,
//     question:
//       "What is the default value of an uninitialized variable in JavaScript?",
//     options: ["null", "undefined", "0", "''"],
//     correct: "undefined",
//   },
//   {
//     id: 7,
//     question: "Which loop is best for iterating a fixed number of times?",
//     options: ["while", "for", "do...while", "foreach"],
//     correct: "for",
//   },
//   {
//     id: 8,
//     question: "Where can a variable declared with 'var' be accessed?",
//     options: ["Block", "Function", "Global", "Both Function and Global"],
//     correct: "Both Function and Global",
//   },
//   {
//     id: 9,
//     question: "What will the 'if' condition evaluate to if the value is `0`?",
//     options: ["true", "false", "undefined", "null"],
//     correct: "false",
//   },
//   {
//     id: 10,
//     question: "What is the output of: `let x; console.log(x);`?",
//     options: ["null", "undefined", "0", "Error"],
//     correct: "undefined",
//   },
//   {
//     id: 11,
//     question: "Which statement best defines 'global scope'?",
//     options: [
//       "Variables accessible inside a single block",
//       "Variables accessible throughout the program",
//       "Variables declared inside a function",
//       "Variables declared inside a loop",
//     ],
//     correct: "Variables accessible throughout the program",
//   },
//   {
//     id: 12,
//     question: "What does `break` do inside a loop?",
//     options: [
//       "Skips the current iteration",
//       "Stops the loop completely",
//       "Exits the function",
//       "Continues to the next loop",
//     ],
//     correct: "Stops the loop completely",
//   },
//   {
//     id: 13,
//     question: "What is the correct syntax for a conditional 'if' statement?",
//     options: [
//       "if condition {}",
//       "if (condition)",
//       "if (condition) {}",
//       "if {condition}",
//     ],
//     correct: "if (condition) {}",
//   },
//   {
//     id: 14,
//     question: "How do you declare a constant in JavaScript?",
//     options: ["var", "let", "const", "constant"],
//     correct: "const",
//   },
//   {
//     id: 15,
//     question: "Which loop always executes at least once?",
//     options: ["for", "while", "do...while", "foreach"],
//     correct: "do...while",
//   },
//   {
//     id: 16,
//     question: "What is the main difference between 'let' and 'var'?",
//     options: [
//       "'let' is block-scoped, 'var' is function-scoped",
//       "'let' is function-scoped, 'var' is block-scoped",
//       "Both are function-scoped",
//       "Both are block-scoped",
//     ],
//     correct: "'let' is block-scoped, 'var' is function-scoped",
//   },
//   {
//     id: 17,
//     question: "How do you define an array in JavaScript?",
//     options: [
//       "Using parentheses ()",
//       "Using curly braces {}",
//       "Using square brackets []",
//       "Using angle brackets <>",
//     ],
//     correct: "Using square brackets []",
//   },
//   {
//     id: 18,
//     question: "What will `if ([]) { console.log('true') }` log?",
//     options: ["true", "false", "undefined", "Error"],
//     correct: "true",
//   },
//   {
//     id: 19,
//     question: "Which of the following is not a loop in JavaScript?",
//     options: ["for", "while", "foreach", "loop"],
//     correct: "loop",
//   },
//   {
//     id: 20,
//     question: "Which statement skips the current iteration of a loop?",
//     options: ["break", "continue", "skip", "exit"],
//     correct: "continue",
//   },
//   {
//     id: 21,
//     question: "What does `typeof NaN` return?",
//     options: ["Number", "String", "Boolean", "NaN"],
//     correct: "Number",
//   },
//   {
//     id: 22,
//     question:
//       "What happens if you declare a variable with 'var' multiple times?",
//     options: [
//       "Throws an error",
//       "Overwrites the previous declaration",
//       "Creates a new variable",
//       "Ignored",
//     ],
//     correct: "Overwrites the previous declaration",
//   },
//   {
//     id: 23,
//     question: "What is block scope in JavaScript?",
//     options: [
//       "Variables defined globally",
//       "Variables accessible only within a block",
//       "Variables declared with 'var'",
//       "Variables accessible anywhere",
//     ],
//     correct: "Variables accessible only within a block",
//   },
//   {
//     id: 24,
//     question: "Which loop will execute while a condition is true?",
//     options: ["for", "while", "foreach", "do...while"],
//     correct: "while",
//   },
//   {
//     id: 25,
//     question: "What is the result of `if (null)`?",
//     options: ["true", "false", "undefined", "Error"],
//     correct: "false",
//   },
//   {
//     id: 26,
//     question: "How do you check if two values are equal and of the same type?",
//     options: ["==", "===", "=", "!=="],
//     correct: "===",
//   },
//   {
//     id: 27,
//     question: "What is the result of `typeof undefined`?",
//     options: ["undefined", "null", "string", "Error"],
//     correct: "undefined",
//   },
//   {
//     id: 28,
//     question: "What does the `else` statement do?",
//     options: [
//       "Executes when 'if' condition is true",
//       "Executes when 'if' condition is false",
//       "Ends the program",
//       "Defines a new condition",
//     ],
//     correct: "Executes when 'if' condition is false",
//   },
//   {
//     id: 29,
//     question: "What is a conditional statement?",
//     options: [
//       "A loop",
//       "A block of code that runs if a condition is true",
//       "A function",
//       "A variable",
//     ],
//     correct: "A block of code that runs if a condition is true",
//   },
//   {
//     id: 30,
//     question: "Which of the following is a valid 'for' loop syntax?",
//     options: [
//       "for i = 0 to 10",
//       "for (i < 10; i++)",
//       "for (let i = 0; i < 10; i++)",
//       "for i in 10",
//     ],
//     correct: "for (let i = 0; i < 10; i++)",
//   },
// ];

const quizQuestions = [
  {
    id: 1,
    question: "What is the data type of `true` in JavaScript?",
    options: ["String", "Boolean", "Number", "Object"],
    correct: "Boolean",
  },
  {
    id: 2,
    question: "Which keyword is used to define a block-scoped variable?",
    options: ["var", "let", "function", "global"],
    correct: "let",
  },
  {
    id: 3,
    question: "What is the result of `typeof null` in JavaScript?",
    options: ["null", "undefined", "object", "boolean"],
    correct: "object",
  },
  {
    id: 4,
    question: "Variables declared with 'const' cannot:",
    options: ["Be redeclared", "Be reassigned", "Be global", "Be block-scoped"],
    correct: "Be reassigned",
  },
  {
    id: 5,
    question: "Which data type represents a sequence of characters?",
    options: ["String", "Boolean", "Array", "Number"],
    correct: "String",
  },
  {
    id: 6,
    question: "What is the default value of an uninitialized variable in JavaScript?",
    options: ["null", "undefined", "0", "''"],
    correct: "undefined",
  },
  {
    id: 7,
    question: "Which loop is best for iterating a fixed number of times?",
    options: ["while", "for", "do...while", "foreach"],
    correct: "for",
  },
  {
    id: 8,
    question: "Where can a variable declared with 'var' be accessed?",
    options: ["Block", "Function", "Global", "Both Function and Global"],
    correct: "Both Function and Global",
  },
  {
    id: 9,
    question: "What will the 'if' condition evaluate to if the value is `0`?",
    options: ["true", "false", "undefined", "null"],
    correct: "false",
  },
  {
    id: 10,
    question: "What is the output of: `let x; console.log(x);`?",
    options: ["null", "undefined", "0", "Error"],
    correct: "undefined",
  },
  {
    id: 11,
    question: "Which statement best defines 'global scope'?",
    options: [
      "Variables accessible inside a single block",
      "Variables accessible throughout the program",
      "Variables declared inside a function",
      "Variables declared inside a loop",
    ],
    correct: "Variables accessible throughout the program",
  },
  {
    id: 12,
    question: "What does `break` do inside a loop?",
    options: [
      "Skips the current iteration",
      "Stops the loop completely",
      "Exits the function",
      "Continues to the next loop",
    ],
    correct: "Stops the loop completely",
  },
  {
    id: 13,
    question: "What is the correct syntax for a conditional 'if' statement?",
    options: [
      "if condition {}",
      "if (condition)",
      "if (condition) {}",
      "if {condition}",
    ],
    correct: "if (condition) {}",
  },
  {
    id: 14,
    question: "How do you declare a constant in JavaScript?",
    options: ["var", "let", "const", "constant"],
    correct: "const",
  },
  {
    id: 15,
    question: "Which loop always executes at least once?",
    options: ["for", "while", "do...while", "foreach"],
    correct: "do...while",
  },
  {
    id: 16,
    question: "What is the main difference between 'let' and 'var'?",
    options: [
      "'let' is block-scoped, 'var' is function-scoped",
      "'let' is function-scoped, 'var' is block-scoped",
      "Both are function-scoped",
      "Both are block-scoped",
    ],
    correct: "'let' is block-scoped, 'var' is function-scoped",
  },
  {
    id: 17,
    question: "How do you define an array in JavaScript?",
    options: [
      "Using parentheses ()",
      "Using curly braces {}",
      "Using square brackets []",
      "Using angle brackets <>",
    ],
    correct: "Using square brackets []",
  },
  {
    id: 18,
    question: "What will `if ([]) { console.log('true') }` log?",
    options: ["true", "false", "undefined", "Error"],
    correct: "true",
  },
  {
    id: 19,
    question: "Which of the following is not a loop in JavaScript?",
    options: ["for", "while", "foreach", "loop"],
    correct: "loop",
  },
  {
    id: 20,
    question: "Which statement skips the current iteration of a loop?",
    options: ["break", "continue", "skip", "exit"],
    correct: "continue",
  },
  {
    id: 21,
    question: "What does `typeof NaN` return?",
    options: ["Number", "String", "Boolean", "NaN"],
    correct: "Number",
  },
  {
    id: 22,
    question: "What happens if you declare a variable with 'var' multiple times?",
    options: [
      "Throws an error",
      "Overwrites the previous declaration",
      "Creates a new variable",
      "Ignored",
    ],
    correct: "Overwrites the previous declaration",
  },
  {
    id: 23,
    question: "What is block scope in JavaScript?",
    options: [
      "Variables defined globally",
      "Variables accessible only within a block",
      "Variables declared with 'var'",
      "Variables accessible anywhere",
    ],
    correct: "Variables accessible only within a block",
  },
  {
    id: 24,
    question: "Which loop will execute while a condition is true?",
    options: ["for", "while", "foreach", "do...while"],
    correct: "while",
  },
  {
    id: 25,
    question: "What is the result of `if (null)`?",
    options: ["true", "false", "undefined", "Error"],
    correct: "false",
  },
  {
    id: 26,
    question: "How do you check if two values are equal and of the same type?",
    options: ["==", "===", "=", "!=="],
    correct: "===",
  },
  {
    id: 27,
    question: "What is the result of `typeof undefined`?",
    options: ["undefined", "null", "string", "Error"],
    correct: "undefined",
  },
  {
    id: 28,
    question: "What does the `else` statement do?",
    options: [
      "Executes when 'if' condition is true",
      "Executes when 'if' condition is false",
      "Ends the program",
      "Defines a new condition",
    ],
    correct: "Executes when 'if' condition is false",
  },
  {
    id: 29,
    question: "What is a conditional statement?",
    options: [
      "A loop",
      "A block of code that runs if a condition is true",
      "A function",
      "A variable",
    ],
    correct: "A block of code that runs if a condition is true",
  },
  {
    id: 30,
    question: "Which of the following is a valid 'for' loop syntax?",
    options: [
      "for i = 0 to 10",
      "for (i < 10; i++)",
      "for (let i = 0; i < 10; i++)",
      "for i in 10",
    ],
    correct: "for (let i = 0; i < 10; i++)",
  },
  {
    id: 31,
    question: "What does `const` stand for in JavaScript?",
    options: ["Constant", "Constructor", "Controller", "Condition"],
    correct: "Constant",
  },
  {
    id: 32,
    question: "Which of the following cannot be re-declared in JavaScript?",
    options: ["var", "let", "const", "None of the above"],
    correct: "const",
  },
  {
    id: 33,
    question: "Which type of loop is best for iterating over the properties of an object?",
    options: ["for", "while", "for...in", "forEach"],
    correct: "for...in",
  },
  {
    id: 34,
    question: "What will `if (undefined)` evaluate to?",
    options: ["true", "false", "undefined", "null"],
    correct: "false",
  },
  {
    id: 35,
    question: "Which of the following is not a data type in JavaScript?",
    options: ["Number", "Boolean", "Character", "String"],
    correct: "Character",
  },
  {
    id: 36,
    question: "What is the scope of a variable declared with 'var' in a function?",
    options: ["Global", "Local to the function", "Block", "Both Block and Global"],
    correct: "Local to the function",
  },
  {
    id: 37,
    question: "What does `let` allow you to do?",
    options: [
      "Declare a global variable",
      "Declare a variable with block scope",
      "Declare a constant",
      "Declare a variable without initialization",
    ],
    correct: "Declare a variable with block scope",
  },
  {
    id: 38,
    question: "Which statement about the 'while' loop is true?",
    options: [
      "It executes once regardless of condition",
      "It executes while the condition is true",
      "It initializes variables automatically",
      "It requires a counter variable",
    ],
    correct: "It executes while the condition is true",
  },
  {
    id: 39,
    question: "What will `if ('false')` evaluate to?",
    options: ["true", "false", "undefined", "Error"],
    correct: "true",
  },
  {
    id: 40,
    question: "Which keyword is used to terminate a loop in JavaScript?",
    options: ["continue", "exit", "break", "stop"],
    correct: "break",
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

    if (correctPercentage >= 80) {
      percentageContainer.style.color = "green";
    } else if (correctPercentage >= 60) {
      percentageContainer.style.color = "yellow";
    } else {
      percentageContainer.style.color = "red";
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
      window.location.href = "../index.html";
    }
  });
});

// form
// let userData = [];
// let idCount = 1;
// let firstNameValue = firstName.value;
// let lastNameValue = lastName.value;

// const userCorrectPercentage = (correctPicked / remainingQuestion.length) * 100;
// userForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   if (firstName.value === "") {
//     alert("No");
//   } else {
//     const userObject = {
//       id: idCount++,
//       firstName: firstNameValue,
//       lastName: lastNameValue,
//       scores: `${userCorrectPercentage}%`,
//     };
//     console.log(firstName.value);
//     console.log(lastName.value);

//     userData.push(userObject);
//     console.log(userData);
//   }
// });
