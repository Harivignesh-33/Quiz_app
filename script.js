const quizData = [
    {
        question: "1. How many hours in a day?",
        options: ["12", "14", "24", "25"],
        answer: "24"
    },
    {
        question: "2 . Which planet is known as the Red Planet?",
        options: ["Jupiter", "Mars", "Venus", "Mercury"],
        answer: "Mars"
    },
    {
        question: "3 . Who is captain  of CSK ?",
        options: ["Kedhar jadhav", "Rohit Sharma", "M.S.Dhoni", "Virat Kholi"],
        answer: "M.S.Dhoni"
    },
    {
        question: "4 . Current President of USA",
        options: ["M.K.Stalin", "Narendra Modi", "Donald Trump", "Putin"],
        answer: "Donald Trump"
    },
    {
        question: "5 . Complete the sequence 1,2,6,12,20,_",
        options: ["24", "25", "27", "30"],
        answer: "30"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question').querySelector('p');
const answersElement = document.getElementById('answers');
const scoreElement = document.getElementById('score-txt');
const restart_btn=document.getElementById('restart-btn');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';
    scoreElement.textContent = `Score: ${score}`;

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('h6');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(option, optionElement));
        answersElement.appendChild(optionElement);
    });
}

function selectOption(selectedOption, optionElement) {
    const currentQuestion = quizData[currentQuestionIndex];
    const allOptions = answersElement.querySelectorAll('h6');

    allOptions.forEach(opt => opt.classList.remove('selected'));
    optionElement.classList.add('selected');

    if (selectedOption === currentQuestion.answer) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }

    answersElement.style.pointerEvents = 'none';

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
            answersElement.style.pointerEvents = 'auto';
        } else {
            questionElement.textContent = 'Quiz Completed!';
            restart_btn.classList.remove('hidden');
            answersElement.innerHTML ='';
            scoreElement.textContent = `Final Score: ${score} out of ${quizData.length}`;
        }
    }, 500);
}
restart_btn.addEventListener('click',()=>{
    location.reload();
});



loadQuestion();