let startbutton = document.querySelector('.startgame')
let btnTimer = document.querySelector('.timerbtn');
let answer = document.querySelector('.answer');
let quizboxpage = document.querySelector('.quiz-box');
let questioncontent = document.querySelector('.question');
let answerbtn = document.querySelector('.answer');
let optionContiner = document.querySelector('.option-container');
let answer1 = document.querySelector('.answer-a');
let answer2 = document.querySelector('.answer-b');
let answer3 = document.querySelector('.answer-c');
let answer4 = document.querySelector('.answer-d');
let nextbtn = document.querySelector('.next');
let checkbtn = document.querySelector('.check');
let flipbtn = document.querySelector('.flipbtn');
let fiftybtn = document.querySelector('.fiftybtn');
let gamewon = document.querySelector('.gameover');
let gameexit = document.querySelector('.gameExit');
let selectingOption = document.querySelectorAll(".btn-option");
let lines = document.querySelectorAll('li');
let currentQuestionObj;
let priceAmounts = document.querySelectorAll(".price-amt");
let winPrize = document.querySelector('.winprize');
let winAmount = 0;
// Question Starts
const myQuestions = [
  {
    question: "What is capital of India?",
    answer: {
      a: "Gandhinagar", b: "Surat", c: "Delhi", d: "Mumbai"
    },
    correctAnswer: "Delhi"
  },
  {
    question: "Which built-in method calls a function element in the array?",
    answer: {
      a: "while()", b: "loop()", c: "forEach()", d: "None of these"
    },
    correctAnswer: "forEach()"
  },
  {
    question: "Water boils at 212 degrees on which temperature scale?",
    answer: {
      a: "Kelvin", b: "Fahrenheit", c: "Celsius", d: "None of these"
    },
    correctAnswer: "Fahrenheit"
  },
  {
    question: "Which of the following code creates an object?",
    answer: {
      a: "var book = Object();", b: "var book = new Object();", c: "var book = new OBJECT();", d: "var book = new Book();"
    },
    correctAnswer: "var book = new Object();"
  },
  {
    question: "What is the capital of Gujarat?",
    answer: {
      a: "Surat", b: "Vadodara", c: "Gandhinagar", d: "Rajkot"
    },
    correctAnswer: "Gandhinagar"
  },
  {
    question: "Which two metals is pewter made from?",
    answer: {
      a: "Copper and Bronze", b: "Tin and lead", c: "Zinc and gold", d: "None of these"
    },
    correctAnswer: "Tin and lead"
  },
  {
    question: "What takes place in Hong Kong's Happy Valley?",
    answer: {
      a: "Monkey racing", b: "Dog racing.", c: "Horse racing", d: "None of these"
    },
    correctAnswer: "Horse racing"
  },
  {
    question: "Who was the first Prime Minister id india?",
    answer: {
      a: "Mahatma Gandhi", b: "Indira Gandhi", c: "Jawaharlal Nehru", d: "Rajendra Prasad"
    },
    correctAnswer: "Jawaharlal Nehru"
  },
  {
    question: "How many sides, in total, would three triangles and three rectangles have?",
    answer: {
      a: "21", b: "19", c: "12", d: "None of these"
    },
    correctAnswer: "21"
  },
  {
    question: "Mother Teresa recived Nobel Prize in the year",
    answer: {
      a: "1979", b: "1980", c: "1982", d: "1985"
    },
    correctAnswer: "1979"
  },
  {
    question: "which is the third highest civilian award in india?",
    answer: {
      a: "Bharat Ratna", b: "Padma Bhushan", c: "Padma shri", d: "Padma Vibhushan"
    },
    correctAnswer: "Padma Bhushan"
  },
  {
    question: "What is the national song of india?",
    answer: {
      a: "Vabde Mataram", b: "Jana Gana Mana", c: "sare jahan se Accha", d: "Mere Desh ki dharti"
    },
    correctAnswer: "Vabde Mataram"
  },
  {
    question: "Name the river bank on which Taj Mahal is situated?",
    answer: {
      a: "Ganges", b: "Yamuna", c: "Godavari", d: "Indus"
    },
    correctAnswer: "Yamuna"
  },
  {
    question: "Where was mahatma gandhi born?",
    answer: {
      a: "Porbandar", b: "Allahabad", c: "Cuttack", d: "Dhudike"
    },
    correctAnswer: "Porbandar"
  },
  {
    question: "Whic one of the below state's Pincode starts with 2?",
    answer: {
      a: "Rajasthan", b: "Maharashtra", c: "Chandigarh", d: "Uttar pradesh"
    },
    correctAnswer: "Uttar pradesh"
  },
  {

    question: "Whic is the longest river flowing in india?",
    answer: {
      a: "Indus", b: "Godavari", c: "Brahmaputra", d: "Ganga"
    },
    correctAnswer: "Ganga"
  },
  {

    question: "Name the Hero of the Hindi film 'Lagaan'?",
    answer: {
      a: "Salman Khan", b: "Shah Rukh Khan", c: "Aamir Khan", d: "Zayhed Khan"
    },
    correctAnswer: "Aamir Khan"
  },
];
// Question Ends 
// prize Money
// const pirceMoney = [{ price: '1000' }, { price: '3000' }, { price: '5000' }, { price: '10,000' }, { price: '20,000' },
// { price: '40,000' }, { price: '60,000' }, { price: '80,000' }, { price: '1,60,000' }, { price: '3,10,000' },
// { price: '6,40,000' }, { price: '12,50,00' }, { price: '25,00,000' }, { price: '50,00,000' }, { price: '1 crores' },
// { price: '3 crores' }, { price: '7 crores' },
// ]
//Global Variable
let ques_count = 0;
let timeleft = 30;
let timerid;

function startTimer() {
  function countdown() {
    if (timeleft == -1) {
      clearTimeout(timerid);
      gamewon.classList.remove('hide');
      gameexit.style.width = "100vw";
      gameexit.style.height = "100vh";
      winPrize.innerHTML = `You Won ${winAmount} 🤩🥳!!!`;
    } else {
      if (timeleft < 10) {
        btnTimer.innerHTML = "00:0" + timeleft + " Sec";
      }
      else {
        btnTimer.innerHTML = "00:" + timeleft + " Sec";
      }
      timeleft--;
    }
  }
  timerid = setInterval(countdown, 1000);
}
// Start Button Starts
startbutton.addEventListener('click', () => {
  if (ques_count < myQuestions.length - 1) {
    console.log(myQuestions[ques_count])
    showQuestion(myQuestions[ques_count]);
  }
  else {

  }
  ques_count++;
  // alert(ques_count);
  startbutton.classList.add('hide');
  quizboxpage.classList.remove('hide');
  startTimer();
})
// Gets the current question
let currentQuestion;
let currentAnswer;
let coutQuestion = 0;

//Fuction Question Show
function showQuestion(ques) {
  priceAmounts[countQuestionNumber - 1].classList.add("active-question")
  currentQuestion = ques;
  questioncontent.innerHTML = `${ques.question}`;
  answer1.innerHTML = `${ques.answer.a}`
  // alert(ques.answer.a);
  answer1.setAttribute("data-option", ques.answer.a);
  answer2.innerHTML = `${ques.answer.b}`
  answer2.setAttribute("data-option", ques.answer.b);
  answer3.innerHTML = `${ques.answer.c}`
  answer3.setAttribute("data-option", ques.answer.c);
  answer4.innerHTML = `${ques.answer.d}`
  answer4.setAttribute("data-option", ques.answer.d);
}
selectingOption.forEach(el=>{
  el.addEventListener("click", ekFunction);
})
function ekFunction(){
  this.classList.add("selected")
  selectingOption.forEach(el=>{
    if(el!= this)
    el.classList.remove("selected");
  }) 
}
selectingOption.forEach(option => {
  option.addEventListener("click", function () {
    currentAnswer = option.getAttribute("data-option");
  })
})
// for(i=0;i<selectingOption.length;i++)
// {
// selectingOption[i].addEventListener("click", function () {
//   currentAnswer = this.getAttribute("data-option");
// })
//}
// Next button and method  
nextbtn.classList.add('disabled');
nextbtn.addEventListener("click", () => {
  ques_count++;
  checkbtn.classList.remove("disabled");
  timeleft = 30;
  clearTimeout(timerid);
  startTimer();

  setTimeout(() => {
    if (ques_count < myQuestions.length - 1) {
      showQuestion(myQuestions[ques_count]);
      document.querySelector(".answer-a").style.backgroundColor = "";
      document.querySelector(".answer-b").style.backgroundColor = "";
      document.querySelector(".answer-c").style.backgroundColor = "";
      document.querySelector(".answer-d").style.backgroundColor = "";
      selectingOption.forEach(el=>{
        el.classList.remove("selected");
      }) 
      flipbtn.classList.remove('disabled');
      fiftybtn.classList.remove('disabled');
      nextbtn.classList.add('disabled');
      // currentQuestionObj = myQuestions[ques_count] 
    }
    ques_count++;
    document.querySelectorAll(".btn-option").forEach(option => {
      option.classList.remove("disabled")
    })
  }, 1000);
})
countQuestionNumber = Array.from(priceAmounts).length;
// Check Question
function checkQuestion(currentQuestion, currentAnswer) {
  if (currentQuestion.correctAnswer == currentAnswer) {
    priceAmounts[--countQuestionNumber].classList.add("correct-question")
    winAmount = priceAmounts[countQuestionNumber].textContent;
    checkbtn.classList.add("disabled");
    if (answer1.textContent == currentAnswer) {
      document.querySelector(".answer-a").style.backgroundColor = "lightgreen";
    }
    if (answer2.textContent == currentAnswer) {
      document.querySelector(".answer-b").style.backgroundColor = "lightgreen";
    }
    if (answer3.textContent == currentAnswer) {
      document.querySelector(".answer-c").style.backgroundColor = "lightgreen";
    }
    if (answer4.textContent == currentAnswer) {
      document.querySelector(".answer-d").style.backgroundColor = "lightgreen";
    }
  }
  else {
    if (currentQuestion.correctAnswer != currentAnswer) {
      winPrize.innerHTML = `You Won ${winAmount} 🤩🥳!!!`;
      if (answer1.textContent == currentAnswer) {
        document.querySelector(".answer-a").style.backgroundColor = "red";
        gameexit.style.width = "100%";
        gameexit.style.height = "100%";
        gamewon.classList.remove('hide');
        checkbtn.classList.add("disabled");
        nextbtn.classList.add('disabled');
      }
      if (answer2.textContent == currentAnswer) {
        document.querySelector(".answer-b").style.backgroundColor = "red";
        gameexit.style.width = "100vw";
        gameexit.style.height = "100vh";
        gamewon.classList.remove('hide');
        checkbtn.classList.add("disabled");
      }
      if (answer3.textContent == currentAnswer) {
        document.querySelector(".answer-c").style.backgroundColor = "red";
        gameexit.style.width = "100vw";
        gameexit.style.height = "100vh";
        gamewon.classList.remove('hide');
        checkbtn.classList.add("disabled");
      }
      if (answer4.textContent == currentAnswer) {
        document.querySelector(".answer-d").style.backgroundColor = "red";
        gameexit.style.width = "100vw";
        gameexit.style.height = "100vh";
        gamewon.classList.remove('hide');
        checkbtn.classList.add("disabled");
      }
    }
  }
}
checkbtn.addEventListener("click", () => {
  nextbtn.classList.remove('disabled');
  checkQuestion(currentQuestion, currentAnswer);
  ques_count--;
  alert(ques_count)
  clearTimeout(timerid);
  flipbtn.classList.add('disabled');
  fiftybtn.classList.add('disabled');
})
// flip Button
flipbtn.addEventListener("click", () => {
  timeleft = 30;
  clearTimeout(timerid);
  startTimer();
  if (ques_count < myQuestions.length - 1) {
    showQuestion(myQuestions[ques_count]);
    flipbtn.classList.add('disabled');
    flipbtn.style.backgroundColor = "red";
  }
  ques_count++;
})
//fifty fifty button
fiftybtn.addEventListener("click", () => {
  function5050();
  fiftybtn.classList.add('disabled');
  fiftybtn.style.backgroundColor = "red";
})
function function5050() {
  let correctOption = "";
  Object.values(currentQuestion.answer).forEach((el, i) => {
    if (document.querySelectorAll(".btn-option")[i].innerText != currentQuestion.correctAnswer) {
      correctOption = i - 1;
      document.querySelectorAll(".btn-option")[i].classList.add("disabled");
    }
  })
  randomOption = Math.floor(Math.random() * 4);
  if (randomOption == correctOption && correctOption == 3) {
    document.querySelectorAll(".btn-option")[randomOption - 1].classList.remove("disabled");
  }
  if (randomOption == correctOption && correctOption == 0) {
    document.querySelectorAll(".btn-option")[randomOption + 1].classList.remove("disabled");
  }
  if (randomOption == correctOption) {
    document.querySelectorAll(".btn-option")[randomOption + 1].classList.remove("disabled");
  }
  if (randomOption != correctOption) {
    document.querySelectorAll(".btn-option")[randomOption].classList.remove("disabled");
  }
  // 
} 