window.onload = function () {
  // array of questions, choices and answers
  var questionList = [{
      ask: "What % of people 10-29 sleep with their phones? ",
      choice: ["10%", "30%", "70%", "90%"],
      ans: 3
    },
    {
      ask: "The larger the signature, the larger the self esteem ",
      choice: ["True", "False"],
      ans: 0
    },
    {
      ask: "People who give you the best advice are the ones with the most problems",
      choice: ["True", "False"],
      ans: 0
    },
    {
      ask: "Creative people tend to get bored easily? ",
      choice: ["True", "False"],
      ans: 0
    },
    {
      ask: (" 90% of the things you cannot say in person you prefer? "),
      choice: ["Burying", "Tell someone else", "Texting", "Singing"],
      ans: 2
    }
  ]
  var number = 30;
  var intervalId;
  var index;
  // var questionSpot = document.getElementsByClassName("#question");
  // var choiceSpot= document.getElementsByClassName("#choiceList");

  // Let"s declare some functions
  function loadQuestion() {
    index = Math.floor(Math.random() * questionList.length);
    questionSpot = questionList[index];
    $("#question").text("Question: " + questionSpot.ask);
    for (var i = 0; i < questionList.length; i++) {
      var userChoice = $("<div>");
      userChoice.addClass("")
    }
  }
  $("#stop").on("click", stop);
  $("#resume").on("click", run);
  $("#startButton").on("click", function () {
    // $("#startButton").hide();
    loadQuestion();
    run();
    for(var i = 0; i < questionList.length; i++) {
      choiceSpot.push(questionList[i]);
      consolelog(questionList[i]);
    }
  })

  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
  }

//timer stop
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
  //click function to select answer and outcomes
  $(".answerchoice").on("click", function () {
    //grab array position from userGuess
    userGuess = parseInt($(this).attr("data-guessvalue"));

    //correct guess or wrong guess outcomes
    if (userGuess === pick.answer) {
      stop();
      correctCount++;
      userGuess = "";
      $("#answerblock").html("<p>Correct!</p>");
      hidepicture();

    } else {
      stop();
      wrongCount++;
      userGuess = "";
      $("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
      hidepicture();
    }
  })
};