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
  // 2 Questions on What is JavaScript?
  {
    id: 1,
    question: "What is JavaScript used for in web development?",
    options: [
      "JavaScript is used to structure the content of a website.",
      "JavaScript is used to style the content of a website.",
      "JavaScript is used to add interactivity and functionality to websites.",
      "JavaScript is used to manage the server-side of a website.",
    ],
    correct:
      "JavaScript is used to add interactivity and functionality to websites.",
  },
  {
    id: 2,
    question: "Which of the following best describes JavaScript?",
    options: [
      "JavaScript is a programming language used to build and structure websites.",
      "JavaScript is a database management system for websites.",
      "JavaScript is used to add animations and graphics to a website.",
      "JavaScript is used to send emails directly from a website.",
    ],
    correct:
      "JavaScript is a programming language used to build and structure websites.",
  },

  // 10 Questions on Primitive Data Types
  {
    id: 3,
    question: "Which of the following is considered a number in JavaScript?",
    options: [
      "The number '42' is considered a string in JavaScript.",
      "The value 'true' is considered a number in JavaScript.",
      "The value 42 is a number in JavaScript.",
      "The value '42' is considered a number, not a string.",
    ],
    correct: "The value 42 is a number in JavaScript.",
  },
  {
    id: 4,
    question: "What happens when you add a number and a string in JavaScript?",
    options: [
      "The number gets converted into a string, and both values are concatenated.",
      "The number is converted to a boolean, and the operation results in false.",
      "The operation will return 'NaN' as the result.",
      "The string becomes a number and both are added together.",
    ],
    correct:
      "The number gets converted into a string, and both values are concatenated.",
  },
  {
    id: 5,
    question: "What does the 'undefined' value represent in JavaScript?",
    options: [
      "The variable has been declared, but it hasn't been assigned a value.",
      "The variable contains a value of 0.",
      "The variable is not declared at all.",
      "The variable has been assigned a null value.",
    ],
    correct:
      "The variable has been declared, but it hasn't been assigned a value.",
  },
  {
    id: 6,
    question:
      "Which of the following describes the 'null' value in JavaScript?",
    options: [
      "It is an empty string that can be used as a placeholder.",
      "It is a special object that represents no value or no object.",
      "It is a value that represents an empty array.",
      "It is a value that represents an undefined variable.",
    ],
    correct: "It is a special object that represents no value or no object.",
  },
  {
    id: 7,
    question: "Which data type does the Boolean value in JavaScript represent?",
    options: [
      "A Boolean represents true or false values only.",
      "A Boolean represents a number ranging from 0 to 1.",
      "A Boolean represents a string of either 'true' or 'false'.",
      "A Boolean represents null or undefined values.",
    ],
    correct: "A Boolean represents true or false values only.",
  },
  {
    id: 8,
    question:
      "Which of the following values would be considered 'falsy' in JavaScript?",
    options: [
      "The value '0' is considered falsy.",
      "The value 'false' is considered truthy.",
      "The value 'NaN' is considered truthy.",
      "The value 'undefined' is considered truthy.",
    ],
    correct: "The value '0' is considered falsy.",
  },
  {
    id: 9,
    question:
      "Which of the following represents an example of a string in JavaScript?",
    options: [
      "The value 100 is a string.",
      "The value 'true' is a string.",
      "The value undefined is a string.",
      "The value 0 is a string.",
    ],
    correct: "The value 'true' is a string.",
  },
  {
    id: 10,
    question: "What is the output of the following code: typeof 'hello'?",
    options: [
      "It will return 'undefined'.",
      "It will return 'string'.",
      "It will return 'boolean'.",
      "It will return 'number'.",
    ],
    correct: "It will return 'string'.",
  },
  {
    id: 11,
    question: "Which of the following represents a number in JavaScript?",
    options: [
      "The value 3.14 is a number in JavaScript.",
      "The value '3.14' is a number in JavaScript.",
      "The value true is considered a number.",
      "The value 'NaN' is considered a number.",
    ],
    correct: "The value 3.14 is a number in JavaScript.",
  },
  {
    id: 12,
    question:
      "Which of the following is the correct representation of a 'null' value?",
    options: [
      "null is a variable that has not been assigned any value yet.",
      "null is an object representing no value.",
      "null is used to store undefined values in variables.",
      "null is a primitive value representing 'no data'.",
    ],
    correct: "null is an object representing no value.",
  },

  // 5 Questions on JavaScript Variables
  {
    id: 13,
    question: "What is the scope of a variable declared using 'var'?",
    options: [
      "The scope of a 'var' variable is global, even if declared inside a function.",
      "The scope of a 'var' variable is limited to the block of code it is defined in.",
      "The scope of a 'var' variable is limited to the function where it is declared.",
      "The scope of a 'var' variable is private and cannot be accessed outside the function.",
    ],
    correct:
      "The scope of a 'var' variable is limited to the function where it is declared.",
  },
  {
    id: 14,
    question: "What does the 'let' keyword do in JavaScript?",
    options: [
      "It creates a variable that can be accessed outside its block of code.",
      "It declares a variable with a global scope, even within a function.",
      "It creates a variable that is scoped to the block of code where it is declared.",
      "It declares a variable but limits its value to numbers only.",
    ],
    correct:
      "It creates a variable that is scoped to the block of code where it is declared.",
  },
  {
    id: 15,
    question: "How is a constant variable declared in JavaScript?",
    options: [
      "A constant variable is declared using the 'const' keyword.",
      "A constant variable is declared using the 'let' keyword.",
      "A constant variable is declared using the 'var' keyword.",
      "A constant variable can be declared using the 'const' or 'var' keywords.",
    ],
    correct: "A constant variable is declared using the 'const' keyword.",
  },
  {
    id: 16,
    question:
      "What will happen if you try to reassign a constant variable in JavaScript?",
    options: [
      "The code will execute successfully, and the variable will be reassigned.",
      "The variable will be reassigned, but an error will be thrown.",
      "An error will be thrown because constant variables cannot be reassigned.",
      "The code will execute successfully, but the new value will be ignored.",
    ],
    correct:
      "An error will be thrown because constant variables cannot be reassigned.",
  },
  {
    id: 17,
    question:
      "Which of the following is a valid variable declaration in JavaScript?",
    options: [
      "const 5name = 'John';",
      "let 123name = 'Alice';",
      "var name_1 = 'Bob';",
      "let my-name = 'Anna';",
    ],
    correct: "var name_1 = 'Bob';",
  },

  // 5 Questions on JavaScript Scope
  {
    id: 18,
    question: "Where can a global variable be accessed in JavaScript?",
    options: [
      "Global variables can be accessed only within the function where they are declared.",
      "Global variables can be accessed anywhere in the entire JavaScript code.",
      "Global variables can only be accessed within the block of code where they are declared.",
      "Global variables can be accessed only from the browser console.",
    ],
    correct:
      "Global variables can be accessed anywhere in the entire JavaScript code.",
  },
  {
    id: 19,
    question:
      "What is the scope of a variable declared inside a function in JavaScript?",
    options: [
      "It can be accessed from any part of the program.",
      "It can be accessed only inside the function.",
      "It can be accessed within the global scope.",
      "It can be accessed inside the block of code where it was declared.",
    ],
    correct: "It can be accessed only inside the function.",
  },
  {
    id: 20,
    question:
      "What will happen if a variable is declared inside a block using 'let' in JavaScript?",
    options: [
      "It will be accessible outside of the block it was declared in.",
      "It will be accessible only within that block of code.",
      "It will be accessible throughout the entire program.",
      "It will have global scope, making it accessible from anywhere.",
    ],
    correct: "It will be accessible only within that block of code.",
  },
  {
    id: 21,
    question:
      "Can a variable declared with 'var' inside a block be accessed outside of the block?",
    options: [
      "Yes, the variable will be accessible outside the block.",
      "No, it will not be accessible outside the block.",
      "Yes, but only if the block is inside a function.",
      "No, but it can be accessed inside the function where it is declared.",
    ],
    correct: "Yes, the variable will be accessible outside the block.",
  },
  {
    id: 22,
    question: "What is a closure in JavaScript?",
    options: [
      "A closure is a function that can access variables from its outer function even after the outer function has finished executing.",
      "A closure is a function that cannot access any variables from outside its block.",
      "A closure is a function that stores its variables in the browser's local storage.",
      "A closure is a function that can only access global variables.",
    ],
    correct:
      "A closure is a function that can access variables from its outer function even after the outer function has finished executing.",
  },

  // 8 Questions on JavaScript Boolean Logic
  {
    id: 23,
    question: "What does the '&&' (AND) operator do in JavaScript?",
    options: [
      "It returns true if both conditions are false.",
      "It returns true only if both conditions are true.",
      "It returns false only if one condition is true.",
      "It always returns true if the first condition is true.",
    ],
    correct: "It returns true only if both conditions are true.",
  },
  {
    id: 24,
    question: "What does the '||' (OR) operator do in JavaScript?",
    options: [
      "It returns true only if both conditions are false.",
      "It returns false if both conditions are true.",
      "It returns true if at least one condition is true.",
      "It returns false if one of the conditions is false.",
    ],
    correct: "It returns true if at least one condition is true.",
  },
  {
    id: 25,
    question:
      "What is the result of the following expression: 10 > 5 && 3 < 4?",
    options: [
      "It will return true because both conditions are true.",
      "It will return false because the second condition is false.",
      "It will return false because the first condition is false.",
      "It will return true because only the first condition is true.",
    ],
    correct: "It will return true because both conditions are true.",
  },
  {
    id: 26,
    question: "What does the '!' (NOT) operator do in JavaScript?",
    options: [
      "It converts the value into a string.",
      "It inverts the truthiness of a value, making true false and false true.",
      "It checks if the condition is equal to null.",
      "It adds a boolean value to the variable.",
    ],
    correct:
      "It inverts the truthiness of a value, making true false and false true.",
  },
  {
    id: 27,
    question: "What is the result of the following expression: !false?",
    options: [
      "It will return false.",
      "It will return true.",
      "It will return null.",
      "It will return undefined.",
    ],
    correct: "It will return true.",
  },
  {
    id: 28,
    question:
      "Which of the following expressions will return true in JavaScript?",
    options: [
      "true && false",
      "false || false",
      "true || true",
      "false && true",
    ],
    correct: "true || true",
  },
  {
    id: 29,
    question: "What is the result of the following expression: '5' == 5?",
    options: [
      "It will return true because the values are equal.",
      "It will return false because the values are of different types.",
      "It will return false because the values are strings.",
      "It will return true because the '==' operator performs type coercion.",
    ],
    correct:
      "It will return true because the '==' operator performs type coercion.",
  },
  {
    id: 30,
    question:
      "What will be the result of the expression: false || false || true?",
    options: [
      "It will return true because at least one condition is true.",
      "It will return false because both conditions are false.",
      "It will return true because all conditions are true.",
      "It will return false because there is no true condition.",
    ],
    correct: "It will return true because at least one condition is true.",
  },

  // 10 Questions on JavaScript Conditionals
  {
    id: 31,
    question: "What does the 'if' statement do in JavaScript?",
    options: [
      "It allows the execution of a block of code if a specific condition is true.",
      "It loops over a set of values.",
      "It defines a new variable within the block of code.",
      "It compares two variables.",
    ],
    correct:
      "It allows the execution of a block of code if a specific condition is true.",
  },
  {
    id: 32,
    question: "What happens if the condition in an 'if' statement is false?",
    options: [
      "The code inside the 'if' block will be executed.",
      "The code inside the 'else' block will be executed, if defined.",
      "The program will stop executing.",
      "Nothing will happen.",
    ],
    correct: "The code inside the 'else' block will be executed, if defined.",
  },
  {
    id: 33,
    question: "How does a 'switch' statement work in JavaScript?",
    options: [
      "It checks if a variable matches one of several conditions and executes the corresponding block of code.",
      "It checks if multiple conditions are true and executes the first one.",
      "It executes one block of code regardless of the condition.",
      "It loops over a set of values and compares each one.",
    ],
    correct:
      "It checks if a variable matches one of several conditions and executes the corresponding block of code.",
  },
  {
    id: 34,
    question:
      "What is the purpose of the 'else' statement in an 'if-else' condition?",
    options: [
      "It defines a fallback block of code if the 'if' condition is true.",
      "It executes a block of code when the 'if' condition is false.",
      "It compares multiple conditions.",
      "It executes a default block of code.",
    ],
    correct: "It executes a block of code when the 'if' condition is false.",
  },
  {
    id: 35,
    question:
      "What will be the output of the following code? let x = 10; if (x > 5) { console.log('Yes'); } else { console.log('No'); }",
    options: ["Yes", "No", "undefined", "Error"],
    correct: "Yes",
  },
  {
    id: 36,
    question: "Can 'else if' be used multiple times in JavaScript?",
    options: [
      "Yes, you can have multiple 'else if' conditions in a single block.",
      "No, only one 'else if' is allowed in a conditional statement.",
      "Yes, but it should be used after an 'else' condition.",
      "No, only the first 'else if' condition will be executed.",
    ],
    correct:
      "Yes, you can have multiple 'else if' conditions in a single block.",
  },
  {
    id: 37,
    question: "What does the 'default' keyword do in a switch statement?",
    options: [
      "It specifies the block of code to execute when none of the case conditions match.",
      "It specifies the first case to match in the switch statement.",
      "It specifies the value to compare in the switch statement.",
      "It defines the default type for all variables.",
    ],
    correct:
      "It specifies the block of code to execute when none of the case conditions match.",
  },
  {
    id: 38,
    question:
      "What is the output of the following code: let num = 4; if (num == 4) { console.log('Four'); } else { console.log('Not Four'); }",
    options: ["Four", "Not Four", "undefined", "Error"],
    correct: "Four",
  },
  {
    id: 39,
    question:
      "What happens if no 'case' condition matches in a switch statement?",
    options: [
      "The 'switch' statement will ignore the entire block.",
      "It will execute the 'default' block if defined.",
      "It will return 'undefined'.",
      "The code will throw an error.",
    ],
    correct: "It will execute the 'default' block if defined.",
  },
  {
    id: 40,
    question:
      "Which of the following is the correct syntax for defining a method inside a JavaScript class?",
    options: [
      "function myMethod() { }",
      "myMethod: function() { }",
      "myMethod() { }",
      "class myMethod() { }",
    ],
    answer: "myMethod() { }",
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
