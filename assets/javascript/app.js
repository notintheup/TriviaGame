window.onload = function () {
  $('.resetButton').click(reset);
  $('.startButton').click(start);
};
// Let's setup the game
var current = 0;
var timeElem = document.getElementsByClassName('.timeLeft');
var timerId = setInterval(count, 1000);
var questionSpot = document.getElementsByClassName('.question');
var choiceSpot = document.getElementsByClassName('.choiceList');
// Let's setup the questions in a object and the answers in an array inside the object. The correct 
// answer is the number at the end of the array.
questionList = {
  'What is the birthplace of Wild Willy? ': ['Man', 'Chesty', 'Burn my Hamm', 'ShortDon', 0],
  'What is the birthplace of Sexy Sally? ': ['Woman', 'Chesty', 'Burn my Hamm', 'ShortDon', 1],
  'What is the birthplace of Angry Alan? ': ['Dog', 'Chesty', 'Burn my Hamm', 'ShortDon', 3],
  'What is the birthplace of Barrel Bob? ': ['Cat', 'Chesty', 'Burn my Hamm', 'ShortDon', 4],
  'What is the birthplace of Crazy Jay? ': ['Monkey', 'Chesty', 'Burn my Hamm', 'ShortDon', 2],
};
// Let's declare some functions
function count() {
  time--;
  var converted = timeConverter(time);
  $('.timeLeft').text(converted);
}
function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 15);
  if (seconds === 0) {
    reset();
  }
  return seconds;
}
function reset() {
  time = 0;
  loadQuestion();
}
function start() {
  if (!timerId) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
    loadQuestion();
  }
}
function loadQuestion() {
  $('.question').text(Object.keys(questionList)[current]);
}
function loadAnswers() {
  var answers = questionList[Object.keys(questionList)[current]];
  for (var i = 0; i < answers.length - 1; i += 1) {
    $('.choiceList').text(answers[i]) 
  }
}
function checkAnswer(i, arr) {

}
// Let's do this
loadQuestion();
loadAnswers();
reset();
start();