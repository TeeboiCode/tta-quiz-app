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

//// Questions 
const quizQuestions = [
  // ===== Array Questions =====
  {
    id: 1,
    question: "Which method adds one or more elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: "push()",
  },
  {
    id: 2,
    question: "What does the `pop()` method do?",
    options: ["Adds an element to the beginning", "Removes the first element", "Removes the last element", "Adds an element to the end"],
    correct: "Removes the last element",
  },
  {
    id: 3,
    question: "Which method returns a shallow copy of a portion of an array?",
    options: ["slice()", "splice()", "split()", "join()"],
    correct: "slice()",
  },
  {
    id: 4,
    question: "What will `Array.isArray([])` return?",
    options: ["true", "false", "undefined", "null"],
    correct: "true",
  },
  {
    id: 5,
    question: "How can you find the length of an array `arr`?",
    options: ["arr.size", "arr.count", "arr.length", "arr.getLength()"],
    correct: "arr.length",
  },
  {
    id: 6,
    question: "Which method merges two or more arrays?",
    options: ["concat()", "merge()", "join()", "append()"],
    correct: "concat()",
  },
  {
    id: 7,
    question: "What does `arr.indexOf(5)` do?",
    options: ["Adds 5 to array", "Returns index of value 5", "Removes 5 from array", "Replaces 5"],
    correct: "Returns index of value 5",
  },
  {
    id: 8,
    question: "What is the result of `[1,2,3].includes(2)`?",
    options: ["true", "false", "undefined", "null"],
    correct: "true",
  },
  {
    id: 9,
    question: "Which array method executes a function on each element?",
    options: ["map()", "filter()", "reduce()", "indexOf()"],
    correct: "map()",
  },
  {
    id: 10,
    question: "Which method filters array elements based on a condition?",
    options: ["filter()", "map()", "reduce()", "every()"],
    correct: "filter()",
  },

  // ===== Object Questions =====
  {
    id: 11,
    question: "How do you access the property 'name' in object `person`?",
    options: ["person.name", "person(name)", "person->name", "person::name"],
    correct: "person.name",
  },
  {
    id: 12,
    question: "How do you delete a property from a JavaScript object?",
    options: ["remove person.name", "delete person.name", "unset person.name", "cut person.name"],
    correct: "delete person.name",
  },
  {
    id: 13,
    question: "Which keyword is used to define an object?",
    options: ["const", "let", "var", "All of the above"],
    correct: "All of the above",
  },
  {
    id: 14,
    question: "What does `Object.keys(obj)` return?",
    options: ["Object values", "Array of keys", "Length of object", "Last key"],
    correct: "Array of keys",
  },
  {
    id: 15,
    question: "How to check if an object has a property?",
    options: ["hasKey()", "includes()", "hasOwnProperty()", "checkProp()"],
    correct: "hasOwnProperty()",
  },
  {
    id: 16,
    question: "What does `Object.values(obj)` return?",
    options: ["Array of values", "Array of keys", "String of keys", "Object itself"],
    correct: "Array of values",
  },
  {
    id: 17,
    question: "How do you create an object with no prototype?",
    options: ["Object.create()", "Object.make()", "Object()", "Object.create(null)"],
    correct: "Object.create(null)",
  },
  {
    id: 18,
    question: "Which method merges properties of objects?",
    options: ["Object.merge()", "Object.assign()", "Object.concat()", "Object.copy()"],
    correct: "Object.assign()",
  },
  {
    id: 19,
    question: "What is the type of `typeof {}`?",
    options: ["array", "object", "function", "null"],
    correct: "object",
  },
  {
    id: 20,
    question: "How can you iterate over all keys in an object?",
    options: ["for of", "for in", "foreach", "loop"],
    correct: "for in",
  },

  // ===== Function Questions =====
  {
    id: 21,
    question: "How do you define a function in JavaScript?",
    options: ["function myFunc(){}", "def myFunc(){}", "fn myFunc(){}", "fun myFunc(){}"],
    correct: "function myFunc(){}",
  },
  {
    id: 22,
    question: "What is a function expression?",
    options: ["A function defined inside a loop", "A named function", "An anonymous function assigned to a variable", "A built-in function"],
    correct: "An anonymous function assigned to a variable",
  },
  {
    id: 23,
    question: "What does `return` do in a function?",
    options: ["Prints a value", "Stops function execution and returns a value", "Stores a value", "Calls another function"],
    correct: "Stops function execution and returns a value",
  },
  {
    id: 24,
    question: "Which keyword declares an arrow function?",
    options: ["arrow", "=>", "lambda", "->"],
    correct: "=>",
  },
  {
    id: 25,
    question: "How do you call a function named `add`?",
    options: ["call add", "add()", "call(add)", "execute add"],
    correct: "add()",
  },
  {
    id: 26,
    question: "What does a callback function mean?",
    options: ["Function that runs only once", "Function passed into another function", "A built-in function", "A recursive function"],
    correct: "Function passed into another function",
  },
  {
    id: 27,
    question: "Which of the following defines an arrow function correctly?",
    options: ["const add = () => {}", "function = () => {}", "=> add = () {}", "function add => ()"],
    correct: "const add = () => {}",
  },
  {
    id: 28,
    question: "What is a pure function?",
    options: ["A function that returns no value", "A function that depends on global variables", "A function that returns the same output for same input", "A function that modifies its input"],
    correct: "A function that returns the same output for same input",
  },
  {
    id: 29,
    question: "What will `typeof function() {}` return?",
    options: ["function", "object", "method", "undefined"],
    correct: "function",
  },
  {
    id: 30,
    question: "Which function method allows setting the `this` value?",
    options: ["bind()", "set()", "call()", "Both call() and bind()"],
    correct: "Both call() and bind()",
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
