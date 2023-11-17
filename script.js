const questions=[
    {
        question : 'Which is largest animal in the world?',
        answers : [
            {text:'Shark', correct:false},
            {text:'Blue Whale', correct:true},
            {text:'Elephant', correct:false},
            {text:'Giraffe', correct:false},
        ]
    },
    {
        question : 'Which is the smallest country in the world?',
        answers : [
            {text:'Vatican City', correct:true},
            {text:'Bhutan', correct:false},
            {text:'Nepal', correct:false},
            {text:'Sri Lanka', correct:false},
        ]
    },
    {
        question : 'Which is the largest desert in the world?',
        answers : [
            {text:'Kalahari', correct:false},
            {text:'Gobi', correct:false},
            {text:'Sahara', correct:false},
            {text:'Antarctica', correct:true},
        ]
    },
    {
        question : 'Who is the father of Geometrry?',
        answers : [
            {text:'Aristotle', correct:false},
            {text:'Euclid', correct:true},
            {text:'Pythagoras', correct:false},
            {text:'Kepler', correct:false},
        ]
    },
    {
        question : 'Which is the smallest continent in the world?',
        answers : [
            {text:'Asia', correct:false},
            {text:'Australia', correct:true},
            {text:'Arctic', correct:false},
            {text:'Africa', correct:false},
        ]
    },
    {
        question : 'The International Literacy Day is observed on',
        answers : [
            {text:'Sep 8', correct:true},
            {text:'Nov 28', correct:false},
            {text:'May 2', correct:false},
            {text:'Sep 22', correct:false},
        ]
    },
    {
        question : 'The language of Lakshadweep. a Union Territory of India, is',
        answers : [
            {text:'Tamil', correct:false},
            {text:'Hindi', correct:false},
            {text:'Malyalam', correct:true},
            {text:'Telugu', correct:false},
        ]
    },
    {
        question : 'Bahubali festival is related to',
        answers : [
            {text:'Islam', correct:false},
            {text:'Hinduism', correct:false},
            {text:'Jainism', correct:true},
            {text:'Buddhism', correct:false},
        ]
    },
    {
        question : 'In which group of places the Kumbha Mela is held every twelve years?',
        answers : [
            {text:'Ujjain. Purl; Prayag. Haridwar', correct:false},
            {text:'Prayag. Haridwar, Ujjain,. Nasik', correct:true},
            {text:'Rameshwaram. Purl, Badrinath. Dwarika', correct:false},
            {text:'Chittakoot, Ujjain, Prayag,Haridwar', correct:false},
        ]
    },
    {
        question : 'Which of the followiing is a folk dance of India?',
        answers : [
            {text:'Kathakali', correct:false},
            {text:'Mohiniattam', correct:false},
            {text:'Garba', correct:true},
            {text:'Manipuri', correct:false},
        ]
    },
    {
        question : ' Which day is observed as the World Standards  Day',
        answers : [
            {text:'June 26', correct:false},
            {text:'Oct 14', correct:true},
            {text:'Nov 15', correct:false},
            {text:'Dec 2', correct:false},
        ]
    },
    {
        question : 'Central Salt and Marine Chemicals Research Institute is located at',
        answers : [
            {text:'Ahmedabad', correct:false},
            {text:'Bhavnagar', correct:false},
            {text:'Gandhinagar', correct:false},
            {text:'Panaji', correct:true},
        ]
    },
    {
        question : 'Nandyal is situated in',
        answers : [
            {text:'Karnataka', correct:true},
            {text:'Andhra Pradesh', correct:false},
            {text:'Maharashtra', correct:false},
            {text:'Madhya Pradesh', correct:false},
        ]
    },
];

const questionElement=document.getElementById('question');
const answerButton=document.getElementById('answer-button');
const nextButton=document.getElementById('next-btn');

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML='Next'
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+ '. '+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    });
}

function resetState(){
    nextButton.style.display='none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==='true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;

    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct==='true'){
            button.classList.add('correct');

        }
        button.disabled=true;
    });
    nextButton.style.display='block';
}

nextButton.addEventListener('click',() => {
    if(currentQuestionIndex<questions.length){
       handleNextButton();
    }else{
        startQuiz();
    }
});

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML='Play Again';
    nextButton.style.display='block';
}

startQuiz();