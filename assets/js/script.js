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
let secondsLeft = 10;
let score = 0;
let lastQuestion = false;

let questionArray = [
  "Question Number 0",
  "Question Number 1",
  "Question Number 2",
  "Question Number 3",
  "Question Number 4",
];
let answerOptions_Q0 = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];
let correctAnswer_Q0 = "Answer 1";
let answerOptions_Q1 = ["Answer 11", "Answer 12", "Answer 13", "Answer 14"];
let correctAnswer_Q1 = "Answer 12";
let answerOptions_Q2 = ["Answer 21", "Answer 22", "Answer 23", "Answer 24"];
let correctAnswer_Q2 = "Answer 23";
let answerOptions_Q3 = ["Answer 31", "Answer 32", "Answer 33", "Answer 34"];
let correctAnswer_Q3 = "Answer 33";
let answerOptions_Q4 = ["Answer 41", "Answer 42", "Answer 43", "Answer 44"];
let correctAnswer_Q4 = "Answer 44";

function init() {
  orderedList.setAttribute("style", "visibility:hidden");
  timer.setAttribute("style", "visibility:show;text-align:right");

  highscore_E1.setAttribute("style", "visibility:hidden");
  scoreBoard.setAttribute("style", "visibility:hidden");
  userInfo.setAttribute("style", "visibility:show");
}

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
    lastQuestion = true;
  }
}

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
      finalScore.textContent = score;
      clearInterval(timerInterval);
    }
  }, 1000);
});
orderedList.addEventListener("click", function (event) {
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
goBack.addEventListener("click", function (event) {
  location.reload();
});

init();
