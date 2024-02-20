const questions = [
  {
    id: 1,
    question: 'What does HTML stand for?',
    options: [
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language',
      'Hyper Text Markup Language',
      'Hyper Text Makeup Language',
    ],
    answer: 'Hyper Text Markup Language',
    skills: ['HTML'],
  },
  {
    id: 2,
    question: 'Which tag is used to define an internal style sheet?',
    options: [`<style>`, '<css>', '<script>', '<html>'],
    answer: '<style>',
    skills: ['HTML'],
  },
  {
    id: 3,
    question:
      'Which attribute is used to provide an image with alternative text?',
    options: ['src', 'alt', 'title', 'href'],
    answer: 'alt',
    skills: ['HTML'],
  },
  {
    id: 4,
    question: 'What is the correct HTML element for inserting a line break?',
    options: [`<br>`, '<break>', '<lb>', '<linebreak>'],
    answer: '<br>',
    skills: ['HTML'],
  },
  {
    id: 5,
    question: 'Which tag is used to define a table row?',
    options: [`<th>`, '<td>', '<table>', '<tr>'],
    answer: '<tr>',
    skills: ['HTML'],
  },
  {
    id: 6,
    question: 'Which tag is used to create a hyperlink in HTML?',
    options: ['<link>', '<a>', '<href>', '<hyperlink>'],
    answer: '<a>',
    skills: ['HTML'],
  },
  {
    id: 7,
    question: 'How can you make a numbered list in HTML?',
    options: ['<ol>', '<ul>', '<list>', '<li>'],
    answer: '<ol>',
    skills: ['HTML'],
  },
  {
    id: 8,
    question: 'What does the <iframe> tag do in HTML?',
    options: [
      'It creates a floating image.',
      'It defines an image map.',
      'It creates an inline frame for embedding another document.',
      'It specifies a list of pre-defined options for an input element.',
    ],
    answer: 'It creates an inline frame for embedding another document.',
    skills: ['HTML'],
  },
  {
    id: 9,
    question:
      'Which attribute is used to specify that an input field must be filled out?',
    options: ['necessary', 'mandatory', 'validate', 'required'],
    answer: 'required',
    skills: ['HTML'],
  },
  {
    id: 10,
    question: 'What is the correct HTML for making a text input field?',
    options: [
      '<input type="text">',
      '<textfield>',
      '<textinput>',
      '<input type="textbox">',
    ],
    answer: '<input type="text">',
    skills: ['HTML'],
  },
  {
    id: 11,
    question: 'What does CSS stand for?',
    options: [
      'Creative Style Sheets',
      'Computer Style Sheets',
      'Cascading Style Sheets',
      'Colorful Style Sheets',
    ],
    answer: 'Cascading Style Sheets',
    skills: ['CSS'],
  },
  {
    id: 12,
    question:
      'Which CSS property is used to change the text color of an element?',
    options: ['text-color', 'color', 'font-color', 'text-style'],
    answer: 'color',
    skills: ['CSS'],
  },
  {
    id: 13,
    question:
      'How can you apply a background color to a webpage element in CSS?',
    options: [
      'color-background',
      'bg-color',
      'background-color',
      'backgroundColors',
    ],
    answer: 'background-color',
    skills: ['CSS'],
  },
  {
    id: 14,
    question: 'Which CSS property is used to set the font size of text?',
    options: ['font-size', 'text-size', 'size', 'text-font'],
    answer: 'font-size',
    skills: ['CSS'],
  },
  {
    id: 15,
    question: 'How can you center align text in CSS?',
    options: [
      'text-align: center',
      'align: center',
      'center-text: true',
      'text-center: true',
    ],
    answer: 'text-align: center',
    skills: ['CSS'],
  },
  {
    id: 16,
    question: 'Which CSS property is used to add shadows to text?',
    options: ['shadow-text', 'text-effect', 'shadow-effect', 'text-shadow'],
    answer: 'text-shadow',
    skills: ['CSS'],
  },
  {
    id: 17,
    question:
      'Which CSS property is used to create a responsive, flexible grid layout?',
    options: ['grid-template', 'display: flex', 'grid-layout', 'display: grid'],
    answer: 'display: grid',
    skills: ['CSS'],
  },
  {
    id: 18,
    question:
      'How can you create a sticky element that remains fixed at the top of the viewport during scrolling?',
    options: [
      'position: sticky;',
      'position: fixed;',
      'position: top;',
      'position: scroll;',
    ],
    answer: 'position: sticky;',
    skills: ['CSS'],
  },
  {
    id: 19,
    question:
      'Which CSS property is used to create a shadow effect that makes an element appear elevated above the content behind it?',
    options: ['elevation', 'box-shadow', 'layer', 'z-index'],
    answer: 'box-shadow',
    skills: ['CSS'],
  },
  {
    id: 20,
    question:
      'Which CSS property is used to control the spacing between lines of text?',
    options: ['text-height', 'text-spacing', 'line-height', 'line-spacing'],
    answer: 'line-height',
    skills: ['CSS'],
  },
  {
    id: 21,
    question: 'What does JavaScript primarily add to a webpage?',
    options: ['Content', 'Structure', 'Behavior', 'Styling'],
    answer: 'Behavior',
    skills: ['JavaScript'],
  },
  {
    id: 22,
    question: 'How do you write "Hello, World!" in an alert box in JavaScript?',
    options: [
      'msg("Hello, World!");',
      'alert("Hello, World!");',
      'alertBox("Hello, World!");',
      'msgBox("Hello, World!");',
    ],
    answer: 'alert("Hello, World!");',
    skills: ['JavaScript'],
  },
  {
    id: 23,
    question: 'Which symbol is used for comments in JavaScript?',
    options: ['//', '#', '/', '*'],
    answer: '//',
    skills: ['JavaScript'],
  },
  {
    id: 24,
    question:
      'What is the correct JavaScript syntax to change the content of an HTML element with id "demo"?',
    options: [
      'document.getElement("demo").innerHTML = "Hello, World!";',
      'document.getElementByName("demo").innerHTML = "Hello, World!";',
      'document.getElementById("demo").innerHTML = "Hello, World!";',
      'document.getElementById("demo").innerText = "Hello, World!";',
    ],
    answer: 'document.getElementById("demo").innerHTML = "Hello, World!";',
    skills: ['JavaScript'],
  },
  {
    id: 25,
    question: 'How do you declare a JavaScript variable?',
    options: ['variable myVar;', 'v myVar;', 'myVar = variable;', 'var myVar;'],
    answer: 'var myVar;',
    skills: ['JavaScript'],
  },
  {
    id: 26,
    question: 'Which operator is used to assign a value to a variable?',
    options: ['==', '=', '===', ':'],
    answer: '=',
    skills: ['JavaScript'],
  },
  {
    id: 27,
    question: 'What is the correct way to write a JavaScript array?',
    options: [
      ' var colors = "red", "green", "blue";',
      'var colors = 1=("red"), 2=("green"), 3=("blue");',
      'var colors = ["red", "green", "blue"];',
      'var colors = {0:"red", 1:"green", 2:"blue"};',
    ],
    answer: 'var colors = ["red", "green", "blue"];',
    skills: ['JavaScript'],
  },
  {
    id: 28,
    question: 'How do you round the number 7.25 to the nearest integer?',
    options: [
      'Math.round(7.25);',
      'round(7.25);',
      'Math.rnd(7.25);',
      'rnd(7.25);',
    ],
    answer: 'Math.round(7.25);',
    skills: ['JavaScript'],
  },
  {
    id: 29,
    question: 'How do you find the number with the highest value of x and y?',
    options: ['top(x, y);', 'Math.max(x, y);', 'ceil(x, y);', 'maximum(x, y);'],
    answer: 'Math.max(x, y);',
    skills: ['JavaScript'],
  },
  {
    id: 30,
    question:
      'What is the correct JavaScript syntax for opening a new window called "myWindow"?',
    options: [
      'myWindow = window.open("http://www.example.com");',
      ' myWindow = open("http://www.example.com");',
      'window.new("http://www.example.com");',
      'window.open("http://www.example.com");',
    ],
    answer: 'window.open("http://www.example.com");',
    skills: ['JavaScript'],
  },
  {
    id: 31,
    question:
      'How do you write a conditional statement that executes some code if "x" is equal to 2 AND "y" is equal to 3?',
    options: [
      'if (x == 2 & y == 3)',
      'if (x == 2 && y == 3)',
      'if (x == 2 and y == 3)',
      'if (x == 2 || y == 3)',
    ],
    answer: 'if (x == 2 && y == 3)',
    skills: ['JavaScript'],
  },
  {
    id: 32,
    question: 'Which event occurs when the user clicks on an HTML element?',
    options: ['onchange', 'onmouseover', 'onclick', 'onmouseclick'],
    answer: 'onclick',
    skills: ['JavaScript'],
  },
  {
    id: 33,
    question: 'What is a closure in JavaScript?',
    options: [
      'A way to store values for later use',
      'A function that returns another function',
      'The combination of a function and the lexical environment within which that function was declared',
      'A way to create private variables in JavaScript',
    ],
    answer:
      'The combination of a function and the lexical environment within which that function was declared',
    skills: ['Advanced Js'],
  },
  {
    id: 34,
    question: 'What is the purpose of the bind method in JavaScript?',
    options: [
      'To create a new array with the results of calling a provided function on every element in the array',
      'To create a new function that, when called, has its this keyword set to a specified value',
      'To check if every element in an array passes a test specified by a function',
      'To execute a function once for each array element',
    ],
    answer:
      'To create a new function that, when called, has its this keyword set to a specified value',
    skills: ['Advanced Js'],
  },
  {
    id: 35,
    question: 'What does the map method do in JavaScript?',
    options: [
      'Executes a function once for each array element',
      'Creates a new array with the results of calling a provided function on every element in the array',
      'Checks if every element in an array passes a test specified by a function',
      'Returns the first element in an array that passes a test specified by a function',
    ],
    answer:
      'Creates a new array with the results of calling a provided function on every element in the array',
    skills: ['Advanced Js'],
  },
  {
    id: 36,
    question: 'What does the reduce method do in JavaScript?',
    options: [
      'Executes a function once for each array element',
      'Creates a new array with the results of calling a provided function on every element in the array',
      'Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value',
      'Checks if every element in an array passes a test specified by a function',
    ],
    answer:
      'Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value',
    skills: ['Advanced Js'],
  },
  {
    id: 37,
    question: 'What is a promise in JavaScript?',
    options: [
      'A guaranteed return value from a function',
      'An object representing the eventual completion or failure of an asynchronous operation',
      'A function that returns a value based on a condition',
      'An object that allows you to perform asynchronous operations in a synchronous manner',
    ],
    answer:
      'An object representing the eventual completion or failure of an asynchronous operation',
    skills: ['Advanced Js'],
  },
  {
    id: 38,
    question:
      'What is the purpose of the async and await keywords in JavaScript?',
    options: [
      'To define a function that returns a promise',
      'To pause the execution of a function until a promise is settled',
      'To handle errors in asynchronous code',
      'To define a block of code that should be executed asynchronously',
    ],
    answer: 'To pause the execution of a function until a promise is settled',
    skills: ['Advanced Js'],
  },
  {
    id: 39,
    question:
      'How do you define a getter and setter for a class property in JavaScript?',
    options: [
      'Using the defineProperty method',
      'Using the getset keyword',
      'Using the get and set keywords',
      'Using the property keyword',
    ],
    answer: 'Using the get and set keywords',
    skills: ['Advanced Js'],
  },
  {
    id: 40,
    question:
      'What is the difference between setTimeout and setInterval in JavaScript?',
    options: [
      'setTimeout executes a function repeatedly at a specified interval, while setInterval executes a function once after a specified delay',
      'setTimeout executes a function once after a specified delay, while setInterval executes a function repeatedly at a specified interval',
      'There is no difference between them',
      'setTimeout and setInterval are not valid JavaScript functions',
    ],
    answer:
      'setTimeout executes a function once after a specified delay, while setInterval executes a function repeatedly at a specified interval',
    skills: ['Advanced Js'],
  },
  {
    id: 41,
    question: 'What is React?',
    options: [
      'A programming language',
      'A JavaScript library for building user interfaces',
      'A CSS framework',
      'An operating system',
    ],
    answer: 'A JavaScript library for building user interfaces',
    skills: ['React (Basic)'],
  },
  {
    id: 42,
    question: 'How does React handle rendering?',
    options: [
      'It directly manipulates the real DOM',
      'It uses canvas for rendering',
      "It doesn't handle rendering",
      'It uses virtual DOM to improve performance',
    ],
    answer: 'It uses virtual DOM to improve performance',
    skills: ['React (Basic)'],
  },
  {
    id: 43,
    question: 'What is JSX?',
    options: [
      'A JavaScript framework for building web applications',
      'JavaScript XML, a syntax extension for JavaScript',
      'JavaScript XML, a data interchange format',
      "JavaScript's syntax for creating arrays",
    ],
    answer: 'JavaScript XML, a syntax extension for JavaScript',
    skills: ['React (Basic)'],
  },
  {
    id: 44,
    question: 'How do you render a component in React?',
    options: [
      'Using the React.renderComponent() method',
      'Using the ReactDOM.renderComponent() method',
      'Using the ReactDOM.render() method',
      'Using the React.render() method',
    ],
    answer: 'Using the ReactDOM.render() method',
    skills: ['React (Basic)'],
  },
  {
    id: 45,
    question: 'What is the purpose of state in React?',
    options: [
      'To store data that can change over time',
      'To store static data',
      'To store data only once',
      'To store data that is constant',
    ],
    answer: 'To store data that can change over time',
    skills: ['React (Basic)'],
  },
  {
    id: 46,
    question: 'How do you update the state in React?',
    options: [
      'By calling setState()',
      'By directly modifying this.state',
      'By using this.state = ...',
      'By using state.update()',
    ],
    answer: 'By calling setState()',
    skills: ['React (Basic)'],
  },
  {
    id: 47,
    question: 'What is the purpose of props in React?',
    options: [
      'To store data that can change over time',
      'To store static data',
      'To pass data from parent to child components',
      'To pass data from child to parent components',
    ],
    answer: 'By calling setState()',
    skills: ['React (Basic)'],
  },
  {
    id: 48,
    question: 'What is the purpose of the key prop in React?',
    options: [
      'To style elements',
      'To pass data between components',
      'To uniquely identify elements in an array',
      'To handle events',
    ],
    answer: 'To uniquely identify elements in an array',
    skills: ['React (Basic)'],
  },
  {
    id: 49,
    question: 'How do you handle events in React?',
    options: [
      'By using inline event handlers',
      'By using addEventListener()',
      'By using onClick prop',
      'By using eventHandler() method',
    ],
    answer: 'By using inline event handlers',
    skills: ['React (Basic)'],
  },
  {
    id: 50,
    question: 'What is the purpose of the React.Fragment component?',
    options: [
      'To create a new React component',
      'To group multiple elements without adding extra nodes to the DOM',
      'To create a placeholder for dynamic content',
      'To conditionally render components',
    ],
    answer: 'To group multiple elements without adding extra nodes to the DOM',
    skills: ['React (Basic)'],
  },
];

export default questions;
