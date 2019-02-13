var timer = 30;
var choice;
var results;

function setupGame() {
  var questions = [{
      question: "What is the birthplace of Wild Willy?",
      choices: ["Man's Chesty", "Burn my Hamm", "ShortDon", "Burn my Hamm"],
      answer: 2
    },
    {
      question: "What is the birthplace of Wild Willy?",
      choices: ["Man's Chesty", "Burn my Hamm", "ShortDon", "Burn my Hamm"],
      answer: 2
    },
    {
      question: "What is the birthplace of Wild Willy?",
      choices: ["Man's Chesty", "Burn my Hamm", "ShortDon", "Burn my Hamm"],
      answer: 2
    },
    {
      question: "What is the birthplace of Wild States?",
      choices: ["Callnforya", "New York", "Meeamee", "Floorider"],
      answer: 1
    }
  ];

  for (var i = 0; i < questions.length; i++) {
    var question = questions[i].question;
    document.write(question);
    var options = questions[i].choices;
    document.body.appendChild(document.createElement("br"));
    var name = "radio" + i;
    for (var opt in options) {

      var radioEle = document.createElement("input");
      radioEle.type = "radio";
      radioEle.value = options[opt];
      radioEle.name = name;
      document.body.appendChild(radioEle);
      var label = document.createElement("Label");
      label.innerHTML = options[opt];
      document.body.appendChild(label);
      document.body.appendChild(document.createElement("br"));
    }

    document.body.appendChild(document.createElement("br"));

  }
}

function setupGame();

function resetGame();