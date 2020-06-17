// Our goal is to create a quiz with a start page, multiple questions (all being monitored by a timer), and then a high score page at the end where one can insert their initials 

// VARIABLES
var timer = document.getElementById("time");
const questionTitle = document.getElementById("question-number");
var questionsContainer = document.getElementById("questions");
const hiddenParagraph = document.getElementById("p-hidden");
const abcd = document.getElementById("abcd-container");
const correctWrong = document.getElementById("correct-wrong");
const submitBtn = document.getElementById("submit-btn");
var btnA = document.createElement("button");
var btnB = document.createElement("button");
var btnC = document.createElement("button");
var btnD = document.createElement("button");
var currentQuestion;
var questionIndex = 0;
var score = 0;

// START PAGE
// The start page will have a section briefly explaining what the page is
// The start page will also have a button at the bottom (similarly to the question pages)
const startBtn = document.getElementById("start-btn");

// when user clicks button, the quiz/timer will both start
startBtn.addEventListener("click", quizStart);

// FUNCTION for quizStart
function quizStart() {
    console.log("started");
    // hide p-hidden
    hiddenParagraph.style.display = "none";
    // hide start btn
    startBtn.style.display = "none";
    // and the question btns are shown
    abcd.style.display = "block";
    // for each question run show question
    showQuestion();
    // run show choices
    showChoices();
    // when submit is pressed, show next question/next choices
}
  
function showQuestion() {
    currentQuestion = myQuestions[questionIndex].question;
    questionsContainer.innerHTML = currentQuestion;
    
    console.log(myQuestions[questionIndex].question);
}

function showChoices() {
    btnA.innerHTML = myQuestions[questionIndex].choices.a;
    abcd.appendChild(btnA);
    btnB.innerHTML = myQuestions[questionIndex].choices.b;
    abcd.appendChild(btnB);
    btnC.innerHTML = myQuestions[questionIndex].choices.c;
    abcd.appendChild(btnC);
    btnD.innerHTML = myQuestions[questionIndex].choices.d;
    abcd.appendChild(btnD);
    console.log(myQuestions[questionIndex].choices.a);
}

function checkAnswer() {
var rightAnswer = myQuestions[questionIndex].correctAnswer;

}


function nextQuestion() {
console.log("next question", myQuestions[questionIndex++]);

currentQuestion = myQuestions[questionIndex].question;
questionsContainer.innerHTML = currentQuestion;

btnA.innerHTML = myQuestions[questionIndex].choices.a;
abcd.appendChild(btnA);
btnB.innerHTML = myQuestions[questionIndex].choices.b;
abcd.appendChild(btnB);
btnC.innerHTML = myQuestions[questionIndex].choices.c;
abcd.appendChild(btnC);
btnD.innerHTML = myQuestions[questionIndex].choices.d;
abcd.appendChild(btnD);

}
// EVENT LISTENERS
submitBtn.addEventListener("click", nextQuestion, checkAnswer);

    


// QUESTIONS
var userInput;

// ALL THE WHILE - a timer will be counting down 
// We'll make this a 10 question quiz, so we'll need to list out all of these questions with answers
const myQuestions = [
    {
        question: "What two films have the most Academy Award nominations?",
        choices: {
            a: "Gone With The Wind and Titanic",
            b: "Titanic and All About Eve",
            c: "All About Eve and Gone With The Wind",
            d: "Shakespeare in Love and Forrest Gump" 

        },
        corectAnswer: "b"   

    },
    {
        question: "In what year was the first Academy Awards ceremony held?",
        choices: {
            a: "1910",
            b: "1925",
            c: "1942",
            d: "1929"
        },
        correctAnswer: "d"
    },
    {
        question: "Who has won the most Academy Awards?",
        choices: {
            a: "Walt Disney",
            b: "Katherine Hepburn",
            c: "Meryl Streep",
            d: "Jack Nicholson"
        },
        correctAnswer: "a"
    },
    {
        question: "Which film series has won more than one Academy Award for Best Picture?",
        choices: {
            a: "James Bond",
            b: "The Godfather",
            c: "The Lord of the Rings",
            d: "Rocky"
        },
        correctAnswer: "b"
    },
    {
        question: "Who is the youngest winner of an acting Academy Award?",
        choices: {
            a: "Anna Paquin",
            b: "Mary Badham",
            c: "Abigail Breslin",
            d: "Tatum O'Neal"
        },
        correctAnswer: "d"
    },
    {
        question: "Who has hosted the most Academy Awards?",
        choices: {
            a: "Bob Hope",
            b: "Billy Crystal",
            c: "Johnny Carson",
            d: "Whoopi Goldberg"
        },
        correctAnswer: "a"
    },
    {
        question: "During the 2017 Academy Awards, La La Land was named the incorrect Best Picture winner by mistake. Which was the actual winner?",
        choices: {
            a: "The Revenant",
            b: "Fences",
            c: "Moonlight",
            d: "Get Out"
        },
        correctAnswer: "c"
    },
    {
        question: "Which movie does Academy Award winning actor Leonardo DiCaprio NOT star in?",
        choices: {
            a: "The Wolf of Wall Street",
            b: "Django Uncahined",
            c: "Fight Club",
            d: "Catch Me If You Can"
        },
        correctAnswer: "c"
    },
    {
        question: "Which actor won Best Actor for portraying Facebook creator, Mark Zuckerberg, in The Social Network?",
        choices: {
        a: "Jesse Eisenberg",
        b: "Michael Cera",
        c: "Andy Samberg",
        d: "Joseph Gordon-Levitt"
        },
        corectAnswer: "a"
    },
    {
        question: "Which, on this list, is Trier's favorite movie? ;)",
        choices: {
            a: "City of God",
            b: "Requiem for a Dream",
            c: "Hot Rod",
            d: "All of the above"
        },
        correctAnswer: "d"
    }
]



    // each answer will be formatted as a button that can be clicked on
    // if the user input is incorrect, an alert will appear in the footer of the HTML exclaiming "WRONG!"
    // if the user input is correct, an alert will appear in the footer of the HTML exclaiming "CORRECT!"
    // if userInput is correct, the score will go up +1 / if not, nothing will be added
// the quiz will be over when the timer runs out OR when the user finishes the questions 





// HIGH SCORE PAGE (separate HTML pg)
// This page will show the user's score 
// the user will write their initials 
    // save the score locally, so user can access their high scores in the future
// there should be additional buttons that can take the user back to start (if they want to do it again) & for reseting the high scores 