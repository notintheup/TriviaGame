//Array of questions with data
var questionList = [{
    question: "What % of people 10-29 sleep with their phones? ",
    answers: ["10%", "30%", "70%", "90%"],
    correctAnswer: 3,
    image: "assets/images/hand.jpg"
  },
  {
    question: "The larger the signature, the larger the self esteem ",
    answers: ["True", "False"],
    correctAnswer: 0,
    image: "assets/images/hand.jpg"
  },
  {
    question: "People who give you the best advice are the ones with the most problems",
    answers: ["True", "False"],
    correctAnswer: 0,
    image: "assets/images/hand.jpg"
  },
  {
    question: "Creative people tend to get bored easily? ",
    answers: ["True", "False"],
    correctAnswer: 0,
    image: "assets/images/hand.jpg"
  },
  {
    question: (" 90% of the things you cannot say in person you prefer? "),
    answers: ["Burying", "Tell someone else", "Texting", "Singing"],
    correctAnswer: 2,
    image: "assets/images/hand.jpg"
  }
]
var number = 30;
var intervalId;
var index;
//Setup the game

function loadQuestion() {
  index = Math.floor(Math.random() * questionList.length);
  qOne = questionList[index];
  //Load question in div
  $("#question").empty();
  $("#question").text("Question: " + qOne.question);
  for (var i = 0; i < qOne.answers.length; i++) {
    var a = $("<button>");
    a.addClass("pickButt");
    a.html(qOne.answers[i]);
    a.attr("click-value", i);
    $("#choiceList").append(a);
  }
}

$("#stop").on("click", stop);
$("#resume").on("click", run);
$("#startButton").on("click", function () {
  $("#choiceList").empty();
  loadQuestion();
  run();
})

function reset() {
  $("#reset").hide();
  $("#answerblock").empty();
  $("#questionblock").empty();
  for (var i = 0; i < holder.length; i++) {
    questionList.push(holder[i]);
  }
  runTimer();
  displayQuestion();

}

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  clockRunning = true;
}

function stop() {
  clockRunning = false;
  clearInterval(intervalId);
}

function decrement() {
  number--;
  $("#show-number").html("<h2>" + number + "</h2>");
  if (number === 0) {
    stop();
    alert("Loser!");
  }
}