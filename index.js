const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const container = document.querySelector('.question-container')
function appendQuestion(questions){
    container.innerHTML = questions.questionText;
};

// function appendQuestion(questions){
// questions.forEach(function(question) {
//   const paragraph = document.createElement('p')
//   // console.log(question.questionText)
//   paragraph.textContent = question.questionText
//   // console.log(paragraph)
//   console.log(paragraph);
//   console.log(typeof(paragraph));
//   container.appendChild(paragraph);
// })
// };


// askQuestionThen(time) - this assigns a global variable question to equal the first question; it also returns a promise that is resolved after a specified amount of time (so that we can expire the question after 5 seconds); the amount of time to wait is provided as an argument to the function
function askQuestionThen(time){
    return new Promise(function(resolve, reject) {
        question = questions[0]
        appendQuestion(question)

        setTimeout(function(){}, time)
    })
}


// removes the question from the "question-container"; it returns a promise so that the function is "thennable", meaning we can do something after the question
function removeQuestion() {
    return new Promise((resolve, reject) => {
        const container = document.querySelector('.question-container')
        container.textContent = ''
    })
};

// it appends the question to the "question-container" and after a specified amount of time removes the question; it takes an argument of "time" indicating the amount of time the question will be displayed
function askQuestionThenRemoveQuestion(time) {
    return askQuestionThen(time)
        .then(removeQuestion)
};


// - it returns the collection of true and false buttons already provided in the index.html file
function trueAndFalseButtons() {
    return btns = document.querySelectorAll('.btn.center-align')
};

// - it adds the hide class if not on the buttons, and removes the hide class if it is on the buttons
function toggleTrueAndFalseButtons() {
    trueAndFalseButtons().forEach(function(btn){
        btn.classList.toggle("hide")
    })
};

 // it adds both the true and false buttons and the question for five seconds, and then hides both of the true and false questions and removes the text of the question
function displayQuestionOnClick() {
    let a = document.querySelector('a')
    a.addEventListener('click', function(){
        toggleTrueAndFalseButtons()
        askQuestionThenRemoveQuestion(5000)
    });
};
