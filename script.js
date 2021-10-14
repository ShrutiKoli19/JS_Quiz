const restartbtn = document.getElementById("restart");
const prevbtn = document.getElementById("prev");
const nextbtn = document.getElementById("next");
const submitbtn = document.getElementById("submit");
const truebtn = document.getElementById("True");
const falsebtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const questiontext = document.getElementById("qtext");

let currquestion = 0;
var score = 0;

let questions = [
  {
  question:"Inside which HTML element do we put the JavaScript file?",
  answer:[ 
    {option:"javascript", answer:false},
    {option:"script", answer:true}
  ]
},
{
  question:"What is the full form of HTML?",
  answer:[
    {option:"Hyperlinks tool makeup language", answer:false},
    {option:"Hyper Text markup language", answer:true}
  ]
},
{
  question:"Choose the correct HTML element for the largest heading:",
  answer:[
    {option:"h6", answer:false},
    {option:"h1", answer:true},
  ]
},
{
  question:"Which property is used to change the background color?",
  answer:[
    {option:"background-color", answer:true},
    {option:"backgroundcolor", answer:false}
  ]
},
{
  question:"JavaScript is the same as Java",
  answer:[
    {option:"True", answer:false},
    {option:"False", answer:true},
  ]
}
]


restartbtn.addEventListener('click', restart);
prevbtn.addEventListener('click', prev);
nextbtn.addEventListener('click', next);
submitbtn.addEventListener('click', submit);

function beginQuiz() {
  currentQuestion = 0;
  questiontext.innerHTML = questions[currentQuestion].question;
  truebtn.innerHTML = questions[currentQuestion].answer[0].option;
  truebtn.onClick = () => {
    let ano = 0;
    if (questions[currentQuestion].answer[ano].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      score++;
    }
  }
  falsebtn.innerHTML = questions[currentQuestion].answer[1].option;
  falsebtn.onClick = () => {
    let ano = 1;
    if (questions[currentQuestion].answer[ano].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  }
  prevbtn.classList.add("hide");
}
beginQuiz();

function restart() {
  currentQuestion = 0;
  prevbtn.classList.remove('hide');
  nextbtn.classList.remove('hide');
  submitbtn.classList.remove('hide');
  truebtn.classList.remove('hide');
  falsebtn.classList.remove('hide');
  score = 0;
  userScore.innerHTML = score;
  beginQuiz();
}

function next() {
  currentQuestion++;
  if (currentQuestion >= 4) {
    nextbtn.classList.add('hide');
    prevbtn.classList.remove('hide');
  }
  questiontext.innerHTML = questions[currentQuestion].question;
  truebtn.innerHTML = questions[currentQuestion].answer[0].option;
  truebtn.onclick = () => {
    let ano = 0;
    if (questions[currentQuestion].answer[ano].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  }
  falsebtn.innerHTML = questions[currentQuestion].answer[1].option;
  falsebtn.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answer[ano].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  }
  prevbtn.classList.remove('hide');
}

function prev() {
  currentQuestion--;
  if (currentQuestion <= 0) {
    nextbtn.classList.add('hide');
    prevbtn.classList.remove('hide');
  }
  questiontext.innerHTML = questions[currentQuestion].question;
  truebtn.innerHTML = questions[currentQuestion].answer[0].option;
  truebtn.onclick = () => {
    let ano = 0;
    if (questions[currentQuestion].answer[ano].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  }
  falsebtn.innerHTML = questions[currentQuestion].answer[1].option;
  falsebtn.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answer[ano].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  }
  prevbtn.classList.remove('hide');
}


function submit() {
  prevbtn.classList.add('hide');
  nextbtn.classList.add('hide');
  submitbtn.classList.add('hide');
  truebtn.classList.add('hide');
  falsebtn.classList.add('hide');
  questiontext.innerHTML = "Congratulations on submitting the quiz!";
}