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
  {
    id: 1,
    question: "What is JavaScript primarily used for in web development?",
    options: ["Styling web pages", "Creating server hardware", "Adding interactivity to websites", "Database management"],
    correct: "Adding interactivity to websites",
  },
  {
    id: 2,
    question: "Which tag is used to include JavaScript in an HTML file?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    correct: "<script>",
  },
  {
    id: 3,
    question: "Where does JavaScript run by default?",
    options: ["Inside a compiler", "In the browser", "In a database", "Only on a server"],
    correct: "In the browser",
  },
  {
    id: 4,
    question: "Which tool allows JavaScript to run outside the browser?",
    options: ["WordPress", "Node.js", "React", "HTML"],
    correct: "Node.js",
  },
  {
    id: 5,
    question: "Which function displays a message in a popup alert box?",
    options: ["console.log()", "alert()", "popup()", "msg()"],
    correct: "alert()",
  },
  {
    id: 6,
    question: "Which method prints output to the browser console?",
    options: ["print()", "alert()", "console.log()", "log.print()"],
    correct: "console.log()",
  },
  {
    id: 7,
    question: "Which attribute is used in the <script> tag to load an external JS file?",
    options: ["href", "src", "link", "file"],
    correct: "src",
  },
  {
    id: 8,
    question: "What file extension does a JavaScript file typically use?",
    options: [".html", ".css", ".js", ".json"],
    correct: ".js",
  },
  {
    id: 9,
    question: "Which of the following is NOT a way to run JavaScript?",
    options: ["In the browser console", "With Node.js", "Inside an HTML file", "In a Word document"],
    correct: "In a Word document",
  },
  {
    id: 10,
    question: "What does 'interpreted language' mean?",
    options: [
      "It must be compiled before running",
      "It runs line by line without compiling",
      "It requires special hardware",
      "It only runs on Linux",
    ],
    correct: "It runs line by line without compiling",
  },
  {
    id: 11,
    question: "What is JavaScript primarily used for in web development?",
    options: ["Styling web pages", "Creating server hardware", "Adding interactivity to websites", "Database management"],
    correct: "Adding interactivity to websites",
  },
  {
    id: 12,
    question: "Which tag is used to include JavaScript in an HTML file?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    correct: "<script>",
  },
  {
    id: 13,
    question: "Where does JavaScript run by default?",
    options: ["Inside a compiler", "In the browser", "In a database", "Only on a server"],
    correct: "In the browser",
  },
  {
    id: 14,
    question: "Which tool allows JavaScript to run outside the browser?",
    options: ["WordPress", "Node.js", "React", "HTML"],
    correct: "Node.js",
  },
  {
    id: 15,
    question: "Which function displays a message in a popup alert box?",
    options: ["console.log()", "alert()", "popup()", "msg()"],
    correct: "alert()",
  },
  {
    id: 16,
    question: "Which method prints output to the browser console?",
    options: ["print()", "alert()", "console.log()", "log.print()"],
    correct: "console.log()",
  },
  {
    id: 17,
    question: "Which attribute is used in the <script> tag to load an external JS file?",
    options: ["href", "src", "link", "file"],
    correct: "src",
  },
  {
    id: 18,
    question: "What file extension does a JavaScript file typically use?",
    options: [".html", ".css", ".js", ".json"],
    correct: ".js",
  },
  {
    id: 19,
    question: "Which of the following is NOT a way to run JavaScript?",
    options: ["In the browser console", "With Node.js", "Inside an HTML file", "In a Word document"],
    correct: "In a Word document",
  },
  {
    id: 20,
    question: "What does 'interpreted language' mean?",
    options: [
      "It must be compiled before running",
      "It runs line by line without compiling",
      "It requires special hardware",
      "It only runs on Linux",
    ],
    correct: "It runs line by line without compiling",
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
