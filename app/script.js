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
  {
    id: 1,
    question: "What is the main difference between variables declared with var and let in JavaScript?",
    options: [
      "Variables declared with var are block-scoped while those declared with let are function-scoped.",
      "Variables declared with var are function-scoped, while those declared with let are block-scoped.",
      "Both var and let are block-scoped in JavaScript.",
      "Variables declared with var cannot be reassigned after initialization.",
    ],
    correct: "Variables declared with var are function-scoped, while those declared with let are block-scoped.",
  },
  {
    id: 2,
    question: "What happens when you try to redeclare a variable using let in the same scope?",
    options: [
      "The variable is redeclared and no error is thrown.",
      "The browser silently ignores the second declaration.",
      "A syntax error is thrown because let does not allow redeclaration in the same scope.",
      "The variable's value is overwritten with the new value.",
    ],
    correct: "A syntax error is thrown because let does not allow redeclaration in the same scope.",
  },
  {
    id: 3,
    question: "Which of the following best describes a variable declared with const?",
    options: [
      "A variable declared with const can be reassigned but not redeclared.",
      "A variable declared with const cannot be reassigned or redeclared.",
      "A variable declared with const can be used before it is declared.",
      "A variable declared with const can only be used inside a loop.",
    ],
    correct: "A variable declared with const cannot be reassigned or redeclared.",
  },
  {
    id: 4,
    question: "Where is a globally scoped variable accessible in a JavaScript program?",
    options: [
      "It is only accessible within the function where it is declared.",
      "It is accessible throughout the entire script, including inside functions and blocks.",
      "It is only accessible in the block in which it is declared.",
      "It is accessible only after the declaration line.",
    ],
    correct: "It is accessible throughout the entire script, including inside functions and blocks.",
  },
  {
    id: 5,
    question: "What is function scope in JavaScript?",
    options: [
      "Function scope means a variable is only accessible within the block it is declared.",
      "Function scope means a variable is accessible only within the file it is declared.",
      "Function scope means a variable is accessible only within the function in which it is declared.",
      "Function scope means a variable is automatically global when declared inside a function.",
    ],
    correct: "Function scope means a variable is accessible only within the function in which it is declared.",
  },
  {
    id: 6,
    question: "What happens when you declare a variable with var inside a block like an if statement?",
    options: [
      "The variable is block-scoped and cannot be accessed outside the block.",
      "The variable is function-scoped and can be accessed outside the block if within the same function.",
      "The variable becomes a global variable automatically.",
      "The variable is hoisted to the top of the block.",
    ],
    correct: "The variable is function-scoped and can be accessed outside the block if within the same function.",
  },
  {
    id: 7,
    question: "What does hoisting mean in the context of JavaScript variables?",
    options: [
      "Hoisting means variables are automatically converted into global variables.",
      "Hoisting means the variable values are moved to the top of the scope.",
      "Hoisting means variable declarations are moved to the top of their scope before code execution.",
      "Hoisting means variables can be accessed only after they are declared.",
    ],
    correct: "Hoisting means variable declarations are moved to the top of their scope before code execution.",
  },
  {
    id: 8,
    question: "How does let behave with respect to hoisting in JavaScript?",
    options: [
      "Variables declared with let are not hoisted at all.",
      "Variables declared with let are hoisted but remain in a temporal dead zone until declared.",
      "Variables declared with let are hoisted and initialized with undefined.",
      "Variables declared with let are hoisted and accessible before declaration.",
    ],
    correct: "Variables declared with let are hoisted but remain in a temporal dead zone until declared.",
  },
  {
    id: 9,
    question: "What is the temporal dead zone in JavaScript?",
    options: [
      "The time when a variable is declared but not hoisted.",
      "The time before a variable is declared where it cannot be accessed, even though it is hoisted.",
      "The period after a variable is declared where it is still undefined.",
      "The time after a variable is redeclared in a different scope.",
    ],
    correct: "The time before a variable is declared where it cannot be accessed, even though it is hoisted.",
  },
  {
    id: 10,
    question: "Why would you choose const over let when declaring a variable?",
    options: [
      "You choose const because it allows redeclaration which let does not.",
      "You choose const because it automatically assigns a global scope.",
      "You choose const because it prevents reassignment, ensuring the variable value remains constant.",
      "You choose const because it supports hoisting with initialization.",
    ],
    correct: "You choose const because it prevents reassignment, ensuring the variable value remains constant.",
  },
  {
    id: 11,
    question: "What is block scope in JavaScript?",
    options: [
      "Block scope refers to variables that are only accessible inside a block, such as inside an if or for statement.",
      "Block scope refers to variables declared in the entire document.",
      "Block scope means variables can only be used inside functions.",
      "Block scope means a variable declared with var will not be hoisted.",
    ],
    correct: "Block scope refers to variables that are only accessible inside a block, such as inside an if or for statement.",
  },
  {
    id: 12,
    question: "What will happen if you try to access a let variable before its declaration?",
    options: [
      "The program will return undefined for the variable.",
      "The variable will be automatically declared as global.",
      "The code will throw a ReferenceError due to the temporal dead zone.",
      "The code will execute successfully and the variable will be hoisted.",
    ],
    correct: "The code will throw a ReferenceError due to the temporal dead zone.",
  },
  {
    id: 13,
    question: "Which type of scope does const have in JavaScript?",
    options: [
      "Variables declared with const have global scope regardless of where they are declared.",
      "Variables declared with const have function scope.",
      "Variables declared with const have block scope similar to let.",
      "Variables declared with const have no scope limitations.",
    ],
    correct: "Variables declared with const have block scope similar to let.",
  },
  {
    id: 14,
    question: "How are variables declared with var hoisted in JavaScript?",
    options: [
      "They are hoisted and initialized with undefined.",
      "They are hoisted and maintain their assigned values.",
      "They are not hoisted at all.",
      "They are hoisted and thrown into the global scope by default.",
    ],
    correct: "They are hoisted and initialized with undefined.",
  },
  {
    id: 15,
    question: "What happens if you declare a variable with var after it is used in code?",
    options: [
      "The variable cannot be accessed before its declaration and throws an error.",
      "The code throws an error because var variables are not hoisted.",
      "The variable is hoisted and is accessible with an undefined value before its declaration.",
      "The variable is not accessible at all due to the temporal dead zone.",
    ],
    correct: "The variable is hoisted and is accessible with an undefined value before its declaration.",
  },
  {
    id: 16,
    question: "What is implicit type conversion in JavaScript?",
    options: [
      "Implicit type conversion is when the developer manually converts one data type into another.",
      "Implicit type conversion is when JavaScript automatically converts one data type into another during evaluation.",
      "Implicit type conversion is when the code explicitly uses conversion functions.",
      "Implicit type conversion refers to converting functions into objects.",
    ],
    correct: "Implicit type conversion is when JavaScript automatically converts one data type into another during evaluation.",
  },
  {
    id: 17,
    question: "Which of the following is an example of implicit type conversion in JavaScript?",
    options: [
      "Using Number('123') to convert a string into a number.",
      "Using String(123) to convert a number into a string.",
      "Adding a number and a string together, like 5 + '10'.",
      "Using Boolean(0) to convert a number into a boolean.",
    ],
    correct: "Adding a number and a string together, like 5 + '10'.",
  },
  {
    id: 18,
    question: "What is explicit type conversion in JavaScript?",
    options: [
      "Explicit type conversion is when JavaScript guesses the type of a variable.",
      "Explicit type conversion is when JavaScript changes the type during logical operations.",
      "Explicit type conversion is when the programmer manually converts one data type into another using conversion functions.",
      "Explicit type conversion is only available in strict mode.",
    ],
    correct: "Explicit type conversion is when the programmer manually converts one data type into another using conversion functions.",
  },
  {
    id: 19,
    question: "Which of the following shows explicit conversion of a boolean to a string?",
    options: [
      "Using true + 'value' to combine boolean and string.",
      "Using String(true) to convert a boolean to a string.",
      "Using 'true' == true in a comparison.",
      "Using +true to convert to a number.",
    ],
    correct: "Using String(true) to convert a boolean to a string.",
  },
  {
    id: 20,
    question: "What will be the result of the expression '5' - 2 in JavaScript?",
    options: [
      "The result will be the string '52' due to string concatenation.",
      "The result will be 3 because JavaScript converts the string '5' into a number.",
      "The result will be '3' as a string.",
      "The expression will throw a syntax error.",
    ],
    correct: "The result will be 3 because JavaScript converts the string '5' into a number.",
  },
  {
    id: 21,
    question: "Which of the following is a primitive data type in JavaScript?",
    options: [
      "An array is a primitive data type in JavaScript.",
      "An object is a primitive data type in JavaScript.",
      "A number is a primitive data type in JavaScript.",
      "A function is a primitive data type in JavaScript.",
    ],
    correct: "A number is a primitive data type in JavaScript.",
  },
  {
    id: 22,
    question: "What is the value of a variable that has been declared but not assigned in JavaScript?",
    options: [
      "The value is null by default.",
      "The value is undefined by default.",
      "The value is zero by default.",
      "The value is false by default.",
    ],
    correct: "The value is undefined by default.",
  },
  {
    id: 23,
    question: "What does the typeof operator return when checking the type of null in JavaScript?",
    options: [
      "It returns 'null'.",
      "It returns 'object'.",
      "It returns 'undefined'.",
      "It returns 'null object'.",
    ],
    correct: "It returns 'object'.",
  },
  {
    id: 24,
    question: "What type of data does the Boolean type represent in JavaScript?",
    options: [
      "The Boolean type represents numbers only.",
      "The Boolean type represents text values.",
      "The Boolean type represents true or false values.",
      "The Boolean type represents objects and arrays.",
    ],
    correct: "The Boolean type represents true or false values.",
  },
  {
    id: 25,
    question: "Which data type would you use to store a series of characters in JavaScript?",
    options: [
      "You would use a Boolean to store characters.",
      "You would use a number to store characters.",
      "You would use an object to store characters.",
      "You would use a string to store characters.",
    ],
    correct: "You would use a string to store characters.",
  },
  {
    id: 26,
    question: "Which of the following is a non-primitive data type in JavaScript?",
    options: [
      "A number is a non-primitive data type in JavaScript.",
      "An object is a non-primitive data type in JavaScript.",
      "A string is a non-primitive data type in JavaScript.",
      "A boolean is a non-primitive data type in JavaScript.",
    ],
    correct: "An object is a non-primitive data type in JavaScript.",
  },
  {
    id: 27,
    question: "How do you create an object in JavaScript?",
    options: [
      "An object is created using square brackets.",
      "An object is created using parentheses.",
      "An object is created using curly braces.",
      "An object is created using quotation marks.",
    ],
    correct: "An object is created using curly braces.",
  },
  {
    id: 28,
    question: "How do you access a property of an object using dot notation?",
    options: [
      "You access it with object('property').",
      "You access it with object->property.",
      "You access it with object.property.",
      "You access it with object[property()].",
    ],
    correct: "You access it with object.property.",
  },
  {
    id: 29,
    question: "How can you add a new property to an object in JavaScript?",
    options: [
      "You can add it using object.add('property', value).",
      "You can add it using object.property = value.",
      "You can add it using object += value.",
      "You can add it using object.addProperty().",
    ],
    correct: "You can add it using object.property = value.",
  },
  {
    id: 30,
    question: "What is the correct way to update the value of an existing property in a JavaScript object?",
    options: [
      "You update it by reassigning the object itself.",
      "You update it by creating a new object from scratch.",
      "You update it using object.property = newValue.",
      "You update it using the updateProperty function.",
    ],
    correct: "You update it using object.property = newValue.",
  },
  {
    id: 31,
    question: "How can you delete a property from a JavaScript object?",
    options: [
      "You delete it by setting it to undefined.",
      "You delete it using the delete keyword.",
      "You delete it by assigning null.",
      "You delete it by removing the object.",
    ],
    correct: "You delete it using the delete keyword.",
  },
  {
    id: 32,
    question: "Which of the following correctly creates an array in JavaScript?",
    options: [
      "An array is created with curly braces like {1, 2, 3}.",
      "An array is created using parentheses like (1, 2, 3).",
      "An array is created using square brackets like [1, 2, 3].",
      "An array is created using the array() function.",
    ],
    correct: "An array is created using square brackets like [1, 2, 3].",
  },
  {
    id: 33,
    question: "How do you access the first element of a JavaScript array?",
    options: [
      "You use array.first().",
      "You use array[0].",
      "You use array.get(1).",
      "You use array.index(0).",
    ],
    correct: "You use array[0].",
  },
  {
    id: 34,
    question: "What does the push() method do in a JavaScript array?",
    options: [
      "It removes the last element of the array.",
      "It adds an element to the beginning of the array.",
      "It adds an element to the end of the array.",
      "It replaces all elements in the array.",
    ],
    correct: "It adds an element to the end of the array.",
  },
  {
    id: 35,
    question: "What does the pop() method do in a JavaScript array?",
    options: [
      "It adds a new item to the beginning of the array.",
      "It removes the first item of the array.",
      "It removes the last item of the array.",
      "It clears all items from the array.",
    ],
    correct: "It removes the last item of the array.",
  },
  {
    id: 36,
    question: "What does the unshift() method do in a JavaScript array?",
    options: [
      "It adds an item to the end of the array.",
      "It removes an item from the end of the array.",
      "It adds an item to the beginning of the array.",
      "It removes an item from the beginning of the array.",
    ],
    correct: "It adds an item to the beginning of the array.",
  },
  {
    id: 37,
    question: "What is the purpose of the shift() method in JavaScript arrays?",
    options: [
      "The shift() method adds a new item to the start of the array.",
      "The shift() method removes the first item of the array.",
      "The shift() method reverses the array.",
      "The shift() method removes the last item of the array.",
    ],
    correct: "The shift() method removes the first item of the array.",
  },
  {
    id: 38,
    question: "How can you check if an array contains a specific value in JavaScript?",
    options: [
      "You use the contains() method on the array.",
      "You use the hasValue() method on the array.",
      "You use the includes() method on the array.",
      "You use the find() method on the array.",
    ],
    correct: "You use the includes() method on the array.",
  },
  {
    id: 39,
    question: "What does the map() method do in JavaScript?",
    options: [
      "It removes duplicate items from an array.",
      "It modifies the array in place by multiplying each value.",
      "It creates a new array by applying a function to each element.",
      "It sorts the array based on the provided function.",
    ],
    correct: "It creates a new array by applying a function to each element.",
  },
  {
    id: 40,
    question: "What does the join() method do in JavaScript arrays?",
    options: [
      "It joins two arrays together into one.",
      "It converts the array into a string by joining its elements.",
      "It removes all items and resets the array.",
      "It combines the values into an object.",
    ],
    correct: "It converts the array into a string by joining its elements.",
  },
  {
    id: 41,
    question: "What is the purpose of an if statement in JavaScript?",
    options: [
      "An if statement is used to declare variables inside a function.",
      "An if statement is used to create reusable blocks of code.",
      "An if statement is used to execute code only if a specified condition is true.",
      "An if statement is used to repeat code while a condition is true.",
    ],
    correct: "An if statement is used to execute code only if a specified condition is true.",
  },
  {
    id: 42,
    question: "What does an else block do in an if...else statement?",
    options: [
      "The else block executes only if the if condition is true.",
      "The else block executes when the if condition is false.",
      "The else block defines a function inside the if statement.",
      "The else block skips the next block of code.",
    ],
    correct: "The else block executes when the if condition is false.",
  },
  {
    id: 43,
    question: "How can you check multiple conditions using if...else if in JavaScript?",
    options: [
      "You use multiple if statements one after another without else.",
      "You can nest switch statements inside each other.",
      "You use else if to evaluate additional conditions if the previous ones are false.",
      "You use the try block to handle all conditions.",
    ],
    correct: "You use else if to evaluate additional conditions if the previous ones are false.",
  },
  {
    id: 44,
    question: "What is the main use of a switch statement in JavaScript?",
    options: [
      "A switch statement is used to handle different types of loops.",
      "A switch statement is used to compare a value against multiple possible cases.",
      "A switch statement is used to declare constants based on conditions.",
      "A switch statement is used to execute asynchronous code.",
    ],
    correct: "A switch statement is used to compare a value against multiple possible cases.",
  },
  {
    id: 45,
    question: "What keyword is used to exit a switch case once a match is found and executed?",
    options: [
      "You use the break keyword to exit a switch case.",
      "You use the continue keyword to exit a switch case.",
      "You use the return keyword to exit a switch case.",
      "You use the exit keyword to stop the switch statement.",
    ],
    correct: "You use the break keyword to exit a switch case.",
  },
  {
    id: 46,
    question: "What happens if you omit the break keyword in a switch case?",
    options: [
      "Only the matched case will run, and the rest will be ignored.",
      "All cases will be skipped entirely.",
      "The code will stop and throw a syntax error.",
      "All subsequent cases will execute until a break is encountered or the switch ends.",
    ],
    correct: "All subsequent cases will execute until a break is encountered or the switch ends.",
  },
  {
    id: 47,
    question: "When is the default case in a switch statement executed?",
    options: [
      "The default case is executed before all other cases.",
      "The default case is executed only if none of the other cases match.",
      "The default case is executed when the switch value is null.",
      "The default case is executed if the first case matches.",
    ],
    correct: "The default case is executed only if none of the other cases match.",
  },
  {
    id: 48,
    question: "What is the purpose of the try block in a try...catch statement?",
    options: [
      "The try block defines the code that should always run no matter what.",
      "The try block contains code that is ignored if an error occurs.",
      "The try block is used to handle errors after they occur.",
      "The try block contains code that may throw an error and should be tested for exceptions.",
    ],
    correct: "The try block contains code that may throw an error and should be tested for exceptions.",
  },
  {
    id: 49,
    question: "What happens when an error occurs inside a try block?",
    options: [
      "The program stops immediately without any message.",
      "The code inside the catch block is executed to handle the error.",
      "The code inside the try block continues running normally.",
      "The error is ignored and the next line runs.",
    ],
    correct: "The code inside the catch block is executed to handle the error.",
  },
  {
    id: 50,
    question: "What is the use of the catch block in a try...catch statement?",
    options: [
      "The catch block contains code that will execute if the try block throws an error.",
      "The catch block is used to define a new function.",
      "The catch block checks conditions and executes based on truthy values.",
      "The catch block runs automatically before the try block.",
    ],
    correct: "The catch block contains code that will execute if the try block throws an error.",
  },
  {
    id: 51,
    question: "What is the primary purpose of a for loop in JavaScript?",
    options: [
      "A for loop is used to test a condition once and then stop execution.",
      "A for loop is used to repeatedly execute a block of code a specific number of times.",
      "A for loop is used to handle errors during code execution.",
      "A for loop is used to call a function once.",
    ],
    correct: "A for loop is used to repeatedly execute a block of code a specific number of times.",
  },
  {
    id: 52,
    question: "Which of the following is the correct syntax of a basic for loop?",
    options: [
      "for (i = 0; i++; i < 5) { }",
      "for i from 0 to 5 { }",
      "for (let i = 0; i < 5; i++) { }",
      "for (i < 5; let i = 0; i++) { }",
    ],
    correct: "for (let i = 0; i < 5; i++) { }",
  },
  {
    id: 53,
    question: "What does the condition part of a for loop do in JavaScript?",
    options: [
      "The condition part determines whether the loop should continue running.",
      "The condition part increments the loop variable after each iteration.",
      "The condition part declares the loop variable.",
      "The condition part deletes unused variables.",
    ],
    correct: "The condition part determines whether the loop should continue running.",
  },
  {
    id: 54,
    question: "When does the while loop in JavaScript stop executing?",
    options: [
      "A while loop stops when the loop counter reaches 10.",
      "A while loop stops after exactly one execution.",
      "A while loop stops when its condition evaluates to false.",
      "A while loop stops after the first error is thrown.",
    ],
    correct: "A while loop stops when its condition evaluates to false.",
  },
  {
    id: 55,
    question: "Which of the following best describes a while loop?",
    options: [
      "A while loop runs a block of code as long as a specified condition is true.",
      "A while loop runs code once and stops automatically.",
      "A while loop runs code only if an error is caught.",
      "A while loop is used to define constant values.",
    ],
    correct: "A while loop runs a block of code as long as a specified condition is true.",
  },
  {
    id: 56,
    question: "What will happen if the condition in a while loop is always true?",
    options: [
      "The loop will stop immediately.",
      "The loop will execute only once.",
      "The loop will run indefinitely, creating an infinite loop.",
      "The loop will throw a syntax error.",
    ],
    correct: "The loop will run indefinitely, creating an infinite loop.",
  },
  {
    id: 57,
    question: "What is a common use case for using a while loop over a for loop?",
    options: [
      "A while loop is better when the number of iterations is known in advance.",
      "A while loop is used when you want to iterate through array elements.",
      "A while loop is preferred when the loop should continue until a condition becomes false, and the number of iterations is not known.",
      "A while loop is used to define object properties dynamically.",
    ],
    correct: "A while loop is preferred when the loop should continue until a condition becomes false, and the number of iterations is not known.",
  },
  {
    id: 58,
    question: "What part of a for loop is responsible for updating the loop control variable?",
    options: [
      "The initialization part updates the loop control variable.",
      "The condition part updates the loop control variable.",
      "The iteration (final) part of the for loop updates the loop control variable.",
      "The body of the loop automatically updates the loop control variable.",
    ],
    correct: "The iteration (final) part of the for loop updates the loop control variable.",
  },
  {
    id: 59,
    question: "How many times will this loop run? for (let i = 0; i < 3; i++)",
    options: [
      "The loop will run three times.",
      "The loop will run once.",
      "The loop will run four times.",
      "The loop will run until the browser stops it.",
    ],
    correct: "The loop will run three times.",
  },
  {
    id: 60,
    question: "Which loop is better suited for scenarios where you check the condition after executing the code at least once?",
    options: [
      "A standard for loop is required for this scenario.",
      "A switch statement is better for this use case.",
      "A do...while loop is better because it checks the condition after running the code once.",
      "A while loop is preferred since it skips the first execution.",
    ],
    correct: "A do...while loop is better because it checks the condition after running the code once.",
  },
  {
    id: 61,
    question: "What does the addition operator (+) do in JavaScript when used with two numbers?",
    options: [
      "It subtracts the second number from the first.",
      "It adds the two numbers together and returns their sum.",
      "It compares the two numbers for equality.",
      "It multiplies the two numbers together.",
    ],
    correct: "It adds the two numbers together and returns their sum.",
  },
  {
    id: 62,
    question: "What does the modulus operator (%) return in JavaScript?",
    options: [
      "It returns the quotient of a division operation.",
      "It returns the result of multiplying two numbers.",
      "It returns the remainder after dividing one number by another.",
      "It returns the sum of two numbers.",
    ],
    correct: "It returns the remainder after dividing one number by another.",
  },
  {
    id: 63,
    question: "What is the result of the logical AND (&&) operator when both conditions are true?",
    options: [
      "It returns false.",
      "It returns null.",
      "It returns true.",
      "It throws an error.",
    ],
    correct: "It returns true.",
  },
  {
    id: 64,
    question: "What does the logical OR (||) operator do in JavaScript?",
    options: [
      "It returns true only if both operands are true.",
      "It returns true if at least one of the operands is true.",
      "It negates the result of a condition.",
      "It compares two values for strict equality.",
    ],
    correct: "It returns true if at least one of the operands is true.",
  },
  {
    id: 65,
    question: "Which assignment operator adds a value to a variable and reassigns it?",
    options: [
      "The -= operator subtracts and assigns the result.",
      "The == operator adds and compares the value.",
      "The += operator adds the right value to the left variable and reassigns it.",
      "The := operator adds and reassigns the result.",
    ],
    correct: "The += operator adds the right value to the left variable and reassigns it.",
  },
  {
    id: 66,
    question: "What is the main difference between == and === in JavaScript?",
    options: [
      "The == operator checks both value and type, while === checks only value.",
      "The == operator compares strings only, while === compares numbers.",
      "The == operator checks only value, while === checks both value and type.",
      "The == operator is used for logical operations, while === is used for arithmetic.",
    ],
    correct: "The == operator checks only value, while === checks both value and type.",
  },
  {
    id: 67,
    question: "What does the expression 5 > 3 evaluate to in JavaScript?",
    options: [
      "It evaluates to undefined.",
      "It evaluates to true because 5 is greater than 3.",
      "It evaluates to false because 3 is less than 5.",
      "It evaluates to NaN.",
    ],
    correct: "It evaluates to true because 5 is greater than 3.",
  },
  {
    id: 68,
    question: "What does the ! (logical NOT) operator do in JavaScript?",
    options: [
      "It combines two conditions together.",
      "It converts a number into a boolean value.",
      "It inverts the truthiness of a value.",
      "It checks if a condition is both true and false.",
    ],
    correct: "It inverts the truthiness of a value.",
  },
  {
    id: 69,
    question: "Which of the following uses the ternary (conditional) operator correctly?",
    options: [
      "x == 5 ? 'Yes' or 'No';",
      "x > 10 : 'Greater' ? 'Smaller';",
      "x > 10 ? 'Greater' : 'Smaller';",
      "x > 10 if true then 'Yes' else 'No';",
    ],
    correct: "x > 10 ? 'Greater' : 'Smaller';",
  },
  {
    id: 70,
    question: "What will be the result of the expression true || false in JavaScript?",
    options: [
      "The result will be false because both conditions are not true.",
      "The result will be true because at least one condition is true.",
      "The result will be undefined because the condition is mixed.",
      "The result will be null because the condition is incomplete.",
    ],
    correct: "The result will be true because at least one condition is true.",
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
