const questionNumber = document.getElementById('question-number');
const questionContainer = document.getElementById('question');
const answerForm = document.getElementById('answer-form');
const nextButton = document.getElementById('next-button');
const result = document.getElementById('result');
const previousAnswer = document.getElementById('previous-answer'); // Added Previous Answer element
const scoreDisplay = document.getElementById('score'); // Score display element
const totalQuestionsDisplay = document.getElementById('total-questions'); // Total questions display element

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let totalAnswered = 0; // Track the total number of questions answered
let correctAnswers = [];
let incorrectAnswers = [];

// Shuffle function using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Fetch the quiz data from the external JSON file (questions.json)
fetch('questions.json')
    .then((response) => response.json())
    .then((data) => {
        shuffledQuestions = data;
        shuffleArray(shuffledQuestions); // Shuffle questions
        currentQuestionIndex = 0;
        showNextQuestion();
    })
    .catch((error) => {
        console.error('Error loading quiz data:', error);
    });

nextButton.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return;
    const answerCorrect = selectedAnswer.value === 'true';
    if (answerCorrect) {
        score++;
        showScore();
        correctAnswers.push(shuffledQuestions[currentQuestionIndex].question);
        showFeedback('Correct!', 'white', true);
    } else {
        incorrectAnswers.push(shuffledQuestions[currentQuestionIndex].question);
        showFeedback('Incorrect!', 'orange', false); // Change background color to orange
        showResult(); // Update the incorrect answers display
    }
    totalAnswered++; // Increment the total answered questions
    currentQuestionIndex++;
    showNextQuestion();
});

function showFeedback(text, color, isCorrect = false) {
    previousAnswer.textContent = `Previous answer: ${text}`;
    previousAnswer.style.backgroundColor = isCorrect ? '#4CAF50' : 'orange'; // Change background color to green or orange
    previousAnswer.style.color = 'white'; // Text color is always white
}

function showScore() {
    const percentage = totalAnswered === 0 ? 0 : ((score / totalAnswered) * 100).toFixed(2); // Calculate score percentage
    scoreDisplay.textContent = percentage + '%';
    totalQuestionsDisplay.textContent = totalAnswered;
}

function showNextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const answerCorrect = selectedAnswer.value === 'true';
        if (answerCorrect) {
            showFeedback('Correct!', 'white', true);
        } else {
            showFeedback('Incorrect!', 'orange', false); // Change background color to orange
        }
    } else {
        previousAnswer.textContent = '';
    }

    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        questionNumber.textContent = `${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
        showScore();
    } else {
        showResult();
    }
}

function showQuestion(question) {
    questionNumber.innerText = `Question ${currentQuestionIndex + 1}`;
    questionContainer.innerText = question.question;
    answerForm.innerHTML = '';

    // Shuffle the answers randomly
    const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach((answer, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = answer.correct;
        input.id = `answer${index}`;
        const label = document.createElement('label');
        label.htmlFor = `answer${index}`;
        label.innerText = answer.text;
        answerForm.appendChild(input);
        answerForm.appendChild(label);
        answerForm.appendChild(document.createElement('br'));
    });
}

function showResult() {
    result.innerHTML = '<h2>Questions Answered Incorrectly:</h2>';
    incorrectAnswers.forEach((question, index) => {
        result.innerHTML += `<p><strong>Question ${index + 1}:</strong> ${question}</p>`;
        const correctAnswer = findCorrectAnswer(question);
        if (correctAnswer) {
            result.innerHTML += `<p><em>Correct Answer:</em> ${correctAnswer}</p>`;
        }
    });
}

// Function to find the correct answer for a given question
function findCorrectAnswer(question) {
    for (const q of shuffledQuestions) {
        if (q.question === question) {
            const correctAnswer = q.answers.find(answer => answer.correct);
            return correctAnswer ? correctAnswer.text : null;
        }
    }
    return null;
}
