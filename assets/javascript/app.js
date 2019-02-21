window.onload = function () {
  // array of questions, answers and correctAnswers
  var questionList = [{
      question: "What % of people 10-29 sleep with their phones? ",
      answers: ["10%", "30%", "70%", "90%"],
      correctAnswer: 3
    // },
    // {
    //   question: "The larger the signature, the larger the self esteem ",
    //   answers: ["True", "False"],
    //   correctAnswer: 0
    // },
    // {
    //   question: "People who give you the best advice are the ones with the most problems",
    //   answers: ["True", "False"],
    //   correctAnswer: 0
    // },
    // {
    //   question: "Creative people tend to get bored easily? ",
    //   answers: ["True", "False"],
    //   correctAnswer: 0
    // },
    // {
    //   question: (" 90% of the things you cannot say in person you prefer? "),
    //   answers: ["Burying", "Tell someone else", "Texting", "Singing"],
    //   correctAnswer: 2
    // }
  }]
  var number = 30;
  var intervalId;
  var index;
  // Let"s declare some functions
  function loadQuestion() {
    index = Math.floor(Math.random() * questionList.length);
    questionSpot = questionList[index];
    //Load question in div
    $("#question").text("Question: " + questionSpot.question);
    for (var i = 0; i < questionSpot.answers.length; i++) {
      var a = $("<div>");
      a.addClass("#choiceList");
      a.html(questionSpot.answers[i]);
      a.attr("click-value", i);
      $("#choiceList").append(a);
    }
  }
  $("#choiceList").on("click", function (a) {
    a = parseInt($(questionList).attr("click-value"));
    if ("a" === questionList.answer) {
      stop();
      $("#chickenDinner").html("<p>Correct! </p>");
    } else {
      stop();
      $("#chickenDinner").html("<p>Wrong! </p>");
    }
  })

  $("#stop").on("click", stop);
  $("#resume").on("click", run);
  $("#startButton").on("click", function () {
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

};