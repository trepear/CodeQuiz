// Our goal is to create a quiz with a start page, multiple questions (all being monitored by a timer), and then a high score page at the end where one can insert their initials and store their answers

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

// EVENT LISTENERS
    // start page
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", quizStart);
    // other pages
submitBtn.addEventListener("click", nextQuestion, checkAnswer);


// FUNCTION for quizStart
function quizStart() {
    console.log("started");
    hiddenParagraph.style.display = "none";
    startBtn.style.display = "none";
    showQuestion();
    showChoices();
    // *** ADD TIMER ***
}

// FUNCTION for questions populating pg
function showQuestion() {
    currentQuestion = myQuestions[questionIndex].question;
    questionsContainer.innerHTML = currentQuestion;
    
    console.log(myQuestions[questionIndex].question);
}

// FUNCTION for choices populating buttons
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
// *** INCOMPLETE FUNCTION for checking answer ***
    // set correct answer (found in myQuestions) = each correlating button
        // if correct answer = "a" then that = btnA ... and so on 
    // addEventListener for when btnA/B/C/D is clicked
        // when btn is clicked, checkAnswer will see if that btn corresponds with the right answer
    // if answer is right:
        // score++
        // alert("CORRECT")
    // if answer is wrong
        // subtract 5 seconds from timer 
function checkAnswer() {
var rightAnswer = myQuestions[questionIndex].correctAnswer;
}

// FUNCTION for setting up subsequent questions
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

// *** INCOMPLETE FUNCTION for lastQuestion ***
    // endQuizBtn should populate pg on last question
        // addEventListener - when user clicks endQuizBtn, they are taken to a highscores pg

// *** INCOMPLETE highscores.html ***
    // highscore pg will show user score and will have an input box for initials
        // when user enters their initials, they will populate pg alongside their score
        // save scores locally at the end of the game 
    


// QUESTIONS
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