// Declare global variables and assign class or Id elements to the variables
let timer = document.querySelector(".timer");
let userInfo = document.querySelector(".User-Info");
let startButton = document.querySelector("#start");
let scoreBoard = document.querySelector(".score-board");
let quizContent = document.querySelector(".quiz-content");
let question = document.querySelector(".question");
let orderedList = document.querySelector(".ol");
let choice_1 = document.querySelector("#choice-list_1");
let choice_2 = document.querySelector("#choice-list_2");
let choice_3 = document.querySelector("#choice-list_3");
let choice_4 = document.querySelector("#choice-list_4");
let answerSelection = document.querySelector("#answer-selection");
let finalScore = document.querySelector("#final-score");
let sumbit = document.querySelector("#submit");
let initials = document.getElementById("initial");
let highscore_lbl = document.getElementById("highscore");
let highscore_E1 = document.querySelector(".high-score-cont");

let questionNumber = 0;
let secondsLeft = 20;
let score = 0;
let lastQuestion = false;
//  Set of Question stored in Array
let questionArray = [
  "Where is the correct place to insert a JavaScript?",
  'What is the correct syntax for referring to an external script called "xxx.js"?',
  'How do you write "Hello World" in a alert box ',
  'How do you call a function named "myFunction"?',
  "What is the syntax of FOR loop?",
];
//  Answer option to each question stored in different array
let answerOptions_Q0 = [
  "Either <head> or <body> section",
  "<head> section",
  "<body> section",
  "None",
];
let answerOptions_Q1 = [
  '<script name="xxx.js">',
  '<script href="xxx.js">',
  '<script src="xxx.js">',
  '<script link="xxx.js">',
];
let answerOptions_Q2 = [
  'msgBox("Hello World")',
  'alertBox("Hello World")',
  'alert("Hello World")',
  'msg("Hello World")',
];
let answerOptions_Q3 = [
  "myFunction()",
  "call myFunction()",
  "call function myFunction()",
  "All the above",
];
let answerOptions_Q4 = [
  "for(let i=0;i<=5;i++)",
  "for( i=0;i<=5)",
  "for( 1 to 5)",
  "for(i<=5;i++)",
];
// Correct options to each question stored in string varibale
let correctAnswer_Q0 = "<body> section";
let correctAnswer_Q1 = '<script src="xxx.js">';
let correctAnswer_Q2 = 'alert("Hello World")';
let correctAnswer_Q3 = "myFunction()";
let correctAnswer_Q4 = "for(let i=0;i<=5;i++)";

// function called during page load
function init() {
  orderedList.setAttribute("style", "visibility:hidden");
  timer.setAttribute("style", "visibility:show;text-align:right");
  highscore_E1.setAttribute("style", "visibility:hidden");
  scoreBoard.setAttribute("style", "visibility:hidden");
  userInfo.setAttribute("style", "visibility:show");
}
// function to display question and answer options in sequence
function DisplayOptions(questionNumber) {
  if (questionNumber == 0) {
    question.textContent = questionArray[0];
    choice_1.textContent = answerOptions_Q0[0];
    choice_2.textContent = answerOptions_Q0[1];
    choice_3.textContent = answerOptions_Q0[2];
    choice_4.textContent = answerOptions_Q0[3];
  } else if (questionNumber == 1) {
    question.textContent = questionArray[1];
    choice_1.textContent = answerOptions_Q1[0];
    choice_2.textContent = answerOptions_Q1[1];
    choice_3.textContent = answerOptions_Q1[2];
    choice_4.textContent = answerOptions_Q1[3];
  } else if (questionNumber == 2) {
    question.textContent = questionArray[2];
    choice_1.textContent = answerOptions_Q2[0];
    choice_2.textContent = answerOptions_Q2[1];
    choice_3.textContent = answerOptions_Q2[2];
    choice_4.textContent = answerOptions_Q2[3];
  } else if (questionNumber == 3) {
    question.textContent = questionArray[3];
    choice_1.textContent = answerOptions_Q3[0];
    choice_2.textContent = answerOptions_Q3[1];
    choice_3.textContent = answerOptions_Q3[2];
    choice_4.textContent = answerOptions_Q3[3];
  } else if (questionNumber == 4) {
    question.textContent = questionArray[4];
    choice_1.textContent = answerOptions_Q4[0];
    choice_2.textContent = answerOptions_Q4[1];
    choice_3.textContent = answerOptions_Q4[2];
    choice_4.textContent = answerOptions_Q4[3];
  } else lastQuestion = true;
}
// timer count down starts on click of startQuiz button, sequence of questions and answer options gets displayed
startButton.addEventListener("click", function () {
  userInfo.setAttribute("style", "visibility:hidden");
  DisplayOptions(0);
  quizContent.setAttribute("style", "visibility:show");
  orderedList.setAttribute("style", "visibility:show");

  let timerInterval = setInterval(function () {
    timer.textContent = "Timer " + secondsLeft;
    secondsLeft--;
    if (secondsLeft > 0 && lastQuestion == false) {
      DisplayOptions(questionNumber);
    } else if (secondsLeft == 0 || lastQuestion) {
      quizContent.setAttribute("style", "visibility:hidden");
      userInfo.setAttribute("style", "visibility:hidden");
      scoreBoard.setAttribute("style", "visibility:show");
      timer.textContent = "Timer " + secondsLeft;
      finalScore.textContent = score;
      clearInterval(timerInterval);
    }
  }, 1000);
});

//Validation of selected option
orderedList.addEventListener("click", function (event) {
  event.preventDefault();
  chosenOption = event.target.textContent;

  if (questionNumber == 0 && chosenOption == correctAnswer_Q0) {
    answerSelection.textContent = "Correct answer";
    score++;
  } else if (questionNumber == 1 && chosenOption == correctAnswer_Q1) {
    answerSelection.textContent = "Correct answer";
    score++;
  } else if (questionNumber == 2 && chosenOption == correctAnswer_Q2) {
    answerSelection.textContent = "Correct answer";
    score++;
  } else if (questionNumber == 3 && chosenOption == correctAnswer_Q3) {
    answerSelection.textContent = "Correct answer";
    score++;
  } else if (questionNumber == 4 && chosenOption == correctAnswer_Q4) {
    answerSelection.textContent = "Correct answer";
    score++;
  } else answerSelection.textContent = "Wrong answer";

  questionNumber++;
  DisplayOptions(questionNumber);
});
// display the high score
function DisplayHighscore() {
  scoreBoard.setAttribute("style", "visibility:hidden");
  highscore_E1.setAttribute("style", "visibility:show");
  let highScore = JSON.parse(localStorage.getItem("finalScore"));
  if (highScore !== null) {
    if (highScore.score > score) {
      highscore_lbl.textContent = "HighScore: " + highScore.score;
    } else {
      highscore_lbl.textContent = "HighScore: " + score;
    }
  }
}

// compare the current score with the high score stored in localstorage.
sumbit.addEventListener("click", function (event) {
  event.preventDefault();

  let finalScore = {
    initial: initial.value,
    score: score,
  };
  let highScore = JSON.parse(localStorage.getItem("finalScore"));
  if (highScore !== null) {
    if (highScore.score >= score) {
      highscore_lbl.textContent = "HighScore: " + highScore.score;
    } else {
      highscore_lbl.textContent = "HighScore: " + score;
      localStorage.setItem("finalScore", JSON.stringify(finalScore));
    }
  } else {
    localStorage.setItem("finalScore", JSON.stringify(finalScore));
  }
  DisplayHighscore();
});

goBack.addEventListener("click", function () {
  location.reload();
});

init();
