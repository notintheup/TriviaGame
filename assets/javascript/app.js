window.onload = function () {
  $("#startButton").click(function () {
    $(".btn").hide();
  })
  // setup trivia format for game
  var questionList = [
    {
      ask: "What labor force is in highest demand? ",
      choice: ["Man", "Chesty", "BurnMyHamm", "ShortDon"],
      ans: false
    },
    {
      ask: "What is the birthplace of Sad Sally? ",
      choice: ["Woman", "Chesty", "BurnMyHammy", "ShortDon"],
      ans: true
    },
    {
      ask: "What is the birthplace of Angry Alan? ",
      choice: ["Dog", "Chesty", "BurnMyHammer", "ShortDon"],
      ans: false
    },
    {
      ask: "What is the birthplace of Barrel Bob? ",
      choice: ["Cat", "Chesty", "BurnMyHamoine", "ShortDon"],
      ans: false
    },
    {
      ask: (" What is the birthplace of Crazy Jay? "),
      choice: ["Monkey", "Chesty", "BurnMyHamlet", "TooTimer"],
      ans: true
    }
  ]
  var timer = 15;
  var clockRunning = false;
  var intervalId;
  var index;
  var questionSpot = document.getElementsByClassName(".question");
  var choiceSpot = document.getElementsByClassName(".choiceList");
  // Let"s declare some functions
  function loadQuestion() {
    
    index = Math.floor(Math.random() * questionList.length);
    
    questionSpot = questionList[index];
    
    $(".question").text("question goes here  " + questionList.ask);
    
    for (var i = 0; i < questionSpot.length; i++) {
      var userChoice = $("<div>");
      userChoice.addClass("")
    }
  }
  //click function to select answer and outcomes
$(".answerchoice").on("click", function () {
	//grab array position from userGuess
	userGuess = parseInt($(this).attr("data-guessvalue"));

	//correct guess or wrong guess outcomes
	if (userGuess === pick.answer) {
		stop();
		correctCount++;
		userGuess="";
		$("#answerblock").html("<p>Correct!</p>");
		hidepicture();

	} else {
		stop();
		wrongCount++;
		userGuess="";
		$("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
		hidepicture();
	}
})
  function start() {
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }
  function count() {
    $(".timeLeft").text(timer);
    timer--;
  // kill timer
    if (timer === 0) {
      stop();
      $(".timeLeft").text("<p> Boom! </p>")
    }
    var converted = timeConverter(timer);
    $(".timeLeft").text(converted);
  }
  function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 15);
    if (seconds === 0) {}
    return seconds;
  }
  function stop() {
    clockRunning = false;
    clearInterval(intervalId);

  }
  loadQuestion();
  start();
};

