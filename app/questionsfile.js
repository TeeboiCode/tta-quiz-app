// ======================
// ======================
// Questions
// ======================
// ======================


const quizQuestions =[
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
    question:
      "What is the default value of an uninitialized variable in JavaScript?",
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
    question:
      "What happens if you declare a variable with 'var' multiple times?",
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
    question:
      "Which type of loop is best for iterating over the properties of an object?",
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
    question:
      "What is the scope of a variable declared with 'var' in a function?",
    options: [
      "Global",
      "Local to the function",
      "Block",
      "Both Block and Global",
    ],
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
  },
  {
  id: 41,
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
  id: 42,
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
{
  id: 43,
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
  id: 44,
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
  id: 45,
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
  id: 46,
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
  id: 47,
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
  id: 48,
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
  id: 49,
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
  id: 50,
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
  id: 51,
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
  id: 52,
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
{
  id: 53,
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
  id: 54,
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
  id: 55,
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
  id: 56,
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
  id: 57,
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
{
  id: 58,
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
  id: 59,
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
  id: 60,
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
  id: 61,
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
  id: 62,
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
{
  id: 63,
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
  id: 64,
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
  id: 65,
  question: "What is the result of the following expression: 10 > 5 && 3 < 4?",
  options: [
    "It will return true because both conditions are true.",
    "It will return false because the second condition is false.",
    "It will return false because the first condition is false.",
    "It will return true because only the first condition is true.",
  ],
  correct: "It will return true because both conditions are true.",
},
{
  id: 66,
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
  id: 67,
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
  id: 68,
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
  id: 69,
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
  id: 70,
  question:
    "What will be the result of the expression: false || false || true?",
  options: [
    "It will return true because at least one condition is true.",
    "It will return false because both conditions are false.",
    "It will return true because all conditions are true.",
    "It will return false because there is no true condition.",
  ],
  correct: "It will return true because at least one condition is true.",
}

]
