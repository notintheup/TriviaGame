//Array of questions with data and game globals
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
var number = 10;
var intervalId;
var index;
var correct = 0;
var wrong = 0;
//Setup the game
function loadQuestion() {
  index = Math.floor(Math.random() * questionList.length);
  qOne = questionList[index];
  //kill question
  questionList.splice(index, 1);

  $("#question").empty();
  $("#question").text("Question: " + qOne.question);
  for (var i = 0; i < qOne.answers.length; i++) {
    var a = $("<button>")
      .addClass("pickButt")
      .html(qOne.answers[i])
      .attr("click-value", i)
    $("#choiceList").append(a)
  }

  //click function to select answer and outcomes
  $(".pickButt").on("click", function () {
    youPick = parseInt($(this).attr("click-value"));
    if (youPick === qOne.correctAnswer) {
      $("#correctCount").text("Good choices: " + ++correct)
      $("#chickenDinner").text("Yup!")
      stop();
      setTimeout(reset, 1000);

    } else {
      $("#wrongCount").text("Bad choices: " + ++wrong)
      $("#chickenDinner").text("Nope!")
      stop();
      setTimeout(reset, 1000);
    }
  })
}

$("#stop").on("click", stop);
$("#resume").on("click", run);
$("#reset").on("click", reset);
$("#startButton").on("click", function () {
  reset();
})

function reset() {
  $("#choiceList").empty();
  $("#question").empty();
  $("#chickenDinner").hide();
  run();
  loadQuestion();
}

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  clockRunning = true;
}

function stop() {
  clearInterval(intervalId);
  clockRunning = false;
}

function decrement() {
  number--;
  $("#show-number").html("<h2>" + number + "</h2>");
  if (number === 0) {
    stop();
    $("#ding").text(" LOSER! ");
    $("#choiceList").hide();
    $("#question").hide();
    $("#chickenDineer").hide();
  }
}