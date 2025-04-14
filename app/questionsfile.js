
// 10 beginner quiz questions based on "Getting Started with JavaScript"

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
  }
];

// Variables and Scope
const quizQuestions = [
  {
    id: 1,
    question: "Which keyword declares a variable with function scope?",
    options: ["let", "const", "var", "define"],
    correct: "var",
  },
  {
    id: 2,
    question: "Which keyword is used to declare a constant variable?",
    options: ["const", "let", "var", "static"],
    correct: "const",
  },
  {
    id: 3,
    question: "What is the scope of a variable declared with `let` inside a block?",
    options: ["Global", "Function", "Block", "Module"],
    correct: "Block",
  },
  {
    id: 4,
    question: "Which of the following is hoisted but not initialized?",
    options: ["const", "let", "var", "all of the above"],
    correct: "var",
  },
  {
    id: 5,
    question: "What will `typeof undeclaredVariable` return?",
    options: ["undefined", "null", "ReferenceError", "NaN"],
    correct: "undefined",
  },
  {
    id: 6,
    question: "What happens if you try to reassign a `const` variable?",
    options: [
      "It updates the value",
      "It throws an error",
      "It changes scope",
      "It becomes undefined",
    ],
    correct: "It throws an error",
  },
  {
    id: 7,
    question: "Which keyword can re-declare a variable in the same scope?",
    options: ["let", "var", "const", "None"],
    correct: "var",
  },
  {
    id: 8,
    question: "Where is a globally scoped variable accessible?",
    options: [
      "Only inside one function",
      "Only inside a block",
      "Anywhere in the code",
      "Only after it is declared",
    ],
    correct: "Anywhere in the code",
  },
  {
    id: 9,
    question: "What is hoisting in JavaScript?",
    options: [
      "Calling a function before declaration",
      "Variable/function declarations are moved to the top",
      "Loop execution is skipped",
      "Scope is reduced to block-level",
    ],
    correct: "Variable/function declarations are moved to the top",
  },
  {
    id: 10,
    question: "Which of the following cannot be hoisted?",
    options: ["Function declarations", "var variables", "let variables", "All can be hoisted"],
    correct: "let variables",
  },
];

// Data Types
// • Primitive vs Non-Primitive
// • Objects & Arrays Introduction
const quizQuestions = [
  {
    id: 1,
    question: "Which of the following is a primitive data type in JavaScript?",
    options: ["Array", "Object", "Number", "Function"],
    correct: "Number",
  },
  {
    id: 2,
    question: "What is the result of `typeof null` in JavaScript?",
    options: ["null", "undefined", "object", "string"],
    correct: "object",
  },
  {
    id: 3,
    question: "Which of the following is a non-primitive data type?",
    options: ["Boolean", "String", "Object", "Symbol"],
    correct: "Object",
  },
  {
    id: 4,
    question: "What is the data type of an array in JavaScript?",
    options: ["Array", "Object", "List", "Set"],
    correct: "Object",
  },
  {
    id: 5,
    question: "Which statement correctly creates an array?",
    options: [
      "let arr = {};",
      "let arr = '[]';",
      "let arr = new Array();",
      "let arr = (1,2,3);",
    ],
    correct: "let arr = new Array();",
  },
  {
    id: 6,
    question: "Which method is used to add a new element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: "push()",
  },
  {
    id: 7,
    question: "Which of these values is a Symbol?",
    options: [
      "`Symbol('id')`",
      "'Symbol'",
      "symbol",
      "'symbol(id)'"
    ],
    correct: "`Symbol('id')`",
  },
  {
    id: 8,
    question: "What does `typeof []` return?",
    options: ["array", "object", "list", "undefined"],
    correct: "object",
  },
  {
    id: 9,
    question: "Which of the following is TRUE about primitive data types?",
    options: [
      "They are passed by reference",
      "They are mutable",
      "They store single values",
      "They can hold multiple key-value pairs",
    ],
    correct: "They store single values",
  },
  {
    id: 10,
    question: "How do you access a property `name` in the object `{ name: 'Alex' }`?",
    options: [
      "obj(name)",
      "obj->name",
      "obj.name",
      "obj:name"
    ],
    correct: "obj.name",
  },
];

//  10 quiz questions on JavaScript Type Conversion
const quizQuestions = [
  {
    id: 1,
    question: "Which function is used for explicit conversion of a string to a number?",
    options: ["parseString()", "Number()", "String()", "toNumber()"],
    correct: "Number()",
  },
  {
    id: 2,
    question: "What is the result of '5' + 3 in JavaScript?",
    options: ["8", "'53'", "NaN", "'8'"],
    correct: "'53'",
  },
  {
    id: 3,
    question: "Which operator triggers implicit type coercion when combining a string and a number?",
    options: ["-", "*", "+", "/"],
    correct: "+",
  },
  {
    id: 4,
    question: "What does `Boolean(0)` return?",
    options: ["true", "false", "0", "undefined"],
    correct: "false",
  },
  {
    id: 5,
    question: "What is the result of `Number('123abc')`?",
    options: ["123", "'123abc'", "NaN", "undefined"],
    correct: "NaN",
  },
  {
    id: 6,
    question: "Which value is considered 'falsy' in JavaScript?",
    options: ["'false'", "1", "[]", "undefined"],
    correct: "undefined",
  },
  {
    id: 7,
    question: "What will `parseInt('20.5px')` return?",
    options: ["20.5", "20", "NaN", "'20.5px'"],
    correct: "20",
  },
  {
    id: 8,
    question: "What does `typeof NaN` return?",
    options: ["NaN", "undefined", "number", "object"],
    correct: "number",
  },
  {
    id: 9,
    question: "What is the result of `'10' - 2`?",
    options: ["'102'", "NaN", "8", "'8'"],
    correct: "8",
  },
  {
    id: 10,
    question: "Which of the following performs explicit type conversion to string?",
    options: ["toString()", "String()", "'' + value", "All of the above"],
    correct: "All of the above",
  },
];
