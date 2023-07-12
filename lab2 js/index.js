const data = [{
    question: "What does HTML stand for?",
  a: "home tool markup language",
  b: "Hyperlinks and text markup language",
  c: "Hyper Text Markup Language",
  d: "Hyper text makeup language",
  correct: "c",
},{
    question: "Who is making the Web standards?",
  a: "Microsoft",
  b: "Mozilla",
  c: "The World wide web Consortium",
  d: "chrome",
  correct: "c",
}, {
    question: "Choose the correct HTML element for the largest heading?",
  a: "<head>",
  b: "<h1>",
  c: "<h6>",
  d: "<heading>",
  correct: "b",
}, {
    question: "Choose the correct HTML element to define important text",
    a: "<important>",
    b: "<b>",
    c: "<strong>",
    d: "<i>",
    correct: "c",
}, {
    question: "How is document type initialized in HTML5.?",
    a: "</DOCTYPE HTML>",
    b: "</DOCTYPE>",
    c: "<!DOCTYPE HTML>",
    d: "</DOCTYPE html> ",
    correct: "c",
}, ];

var question = document.getElementById("question");
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var currentDataIndex = 0;
var totalMark = 0;
var currentQuestionNumber = 0;

function loadQuiz() {
    if(currentQuestionNumber === data.length) {
        showScores();
    } else {
    var quizData = data[currentDataIndex];
    question.innerText = quizData.question;

    btn0.innerText = quizData.a;
    btn1.innerText = quizData.b;
    btn2.innerText = quizData.c;
    btn3.innerText = quizData.d;
    }
}

loadQuiz();
showProgress();


function clickButtonOne() {
    var quizData = data[currentDataIndex];
    if(btn0.value === quizData.correct) {
        totalMark += 1;
    } 
    currentDataIndex++;
    loadQuiz();
    showProgress();
}

function clickButtonTwo() {
    var quizData = data[currentDataIndex];
    if(btn1.value === quizData.correct) {
        totalMark += 1;
    } 
    currentDataIndex++;
    loadQuiz();
    showProgress();
}

function clickButtonThree() {
    var quizData = data[currentDataIndex];
    if(btn2.value === quizData.correct) {
        totalMark += 1;
    } 
    currentDataIndex++;
    loadQuiz();
    showProgress();
}

function clickButtonFour() {
    var quizData = data[currentDataIndex];
    if(btn3.value === quizData.correct) {
        totalMark += 1;
    } 
    currentDataIndex++;
    loadQuiz();
    showProgress();
}

function showProgress() {
    currentQuestionNumber = currentDataIndex + 1;
    var element = document.getElementById("progress");
    element.innerText = "Question " + currentQuestionNumber + " of " + data.length;
   
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + totalMark + " <br> and mark percentage is: "+(totalMark/data.length*100)+"%"+"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}  