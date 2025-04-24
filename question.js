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
];


const quizQuestions1 = [
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

//

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


//?/////////////////////
////////////////////////
// Variables and Scope in JavaScript,
///////////////////////
//////////////////////

const quizQuestions1 = [
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
  }
];

//////////////////////////////
////////////////////////////////
// Primitive vs Non-Primitive Data Types
///////////////////////////////
/////////////////////////////////

const quizQuestions2 = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
    question: "What does the join() method do in JavaScript arrays?",
    options: [
      "It joins two arrays together into one.",
      "It converts the array into a string by joining its elements.",
      "It removes all items and resets the array.",
      "It combines the values into an object.",
    ],
    correct: "It converts the array into a string by joining its elements.",
  }
];


///////////////////
//////////////////
// Type Conversion
///////////////////////
////////////////////////
const quizQuestions3 = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    question: "What will be the result of the expression '5' - 2 in JavaScript?",
    options: [
      "The result will be the string '52' due to string concatenation.",
      "The result will be 3 because JavaScript converts the string '5' into a number.",
      "The result will be '3' as a string.",
      "The expression will throw a syntax error.",
    ],
    correct: "The result will be 3 because JavaScript converts the string '5' into a number.",
  }
];


////////////////////////////
/////////////////////////////
/// Control Flow
// • `if...else`, `switch`, `try/catch`
////////////////////////////
////////////////////////////

const quizQuestions4 = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
    question: "What is the use of the catch block in a try...catch statement?",
    options: [
      "The catch block contains code that will execute if the try block throws an error.",
      "The catch block is used to define a new function.",
      "The catch block checks conditions and executes based on truthy values.",
      "The catch block runs automatically before the try block.",
    ],
    correct: "The catch block contains code that will execute if the try block throws an error.",
  }
];

////////////////////////////////
////////////////////////////////
// Loops
// • `for`, `while`
////////////////////////////////

const quizQuestions5 = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
    question: "Which loop is better suited for scenarios where you check the condition after executing the code at least once?",
    options: [
      "A standard for loop is required for this scenario.",
      "A switch statement is better for this use case.",
      "A do...while loop is better because it checks the condition after running the code once.",
      "A while loop is preferred since it skips the first execution.",
    ],
    correct: "A do...while loop is better because it checks the condition after running the code once.",
  }
];

////////////////////////////
////////////////////////////
// Expressions & Operators
// • Arithmetic, Logical, Assignment, Comparison, Conditional
//////////////////////////////
//////////////////////////////

const quizQuestions6 = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
