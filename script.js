const questionNumber = document.getElementById('question-number');
const questionContainer = document.getElementById('question');
const answerForm = document.getElementById('answer-form');
const nextButton = document.getElementById('next-button');
const recapButton = document.getElementById('finish-button'); // Rename to Recap button
const result = document.getElementById('result');
const previousAnswer = document.getElementById('previous-answer'); // Added Previous Answer element

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let correctAnswers = [];
let incorrectAnswers = [];

// Fetch the quiz data from the external text file (quiz-data.txt)
fetch('quiz-data.txt')
    .then((response) => response.text())
    .then((data) => {
        // Parse the text data to extract questions and answers
        shuffledQuestions = parseQuizData(data);
        currentQuestionIndex = 0;
        showNextQuestion(); // Move this call here
    })
    .catch((error) => {
        console.error('Error loading quiz data:', error);
    });

// Function to parse quiz data from the text
function parseQuizData(data) {
    const lines = data.split('\n');
    const questions = [];

    for (let i = 0; i < lines.length; i += 6) {
        const question = lines[i].trim();
        const answers = [];

        for (let j = i + 1; j < i + 5; j++) {
            const answerText = lines[j].trim();
            const isCorrect = j === i + 1 ? 'true' : 'false';
            answers.push({ text: answerText, correct: isCorrect });
        }

        questions.push({ question, answers });
    }

    return questions;
}

nextButton.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return;
    const answerCorrect = selectedAnswer.value === 'true';
    if (answerCorrect) {
        score++;
        correctAnswers.push(shuffledQuestions[currentQuestionIndex].question);
        showFeedback('Correct!', 'green');
    } else {
        incorrectAnswers.push(shuffledQuestions[currentQuestionIndex].question);
        showFeedback('Incorrect!', 'red');
    }
    currentQuestionIndex++;
    showNextQuestion();
});

// Rename the "Finish" button to "Recap"
recapButton.textContent = 'Recap';

recapButton.addEventListener('click', () => {
    recapQuiz();
});

function showFeedback(text, color) {
    previousAnswer.textContent = `Previous answer: ${text}`;
    previousAnswer.style.color = color;
}

function showNextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const answerCorrect = selectedAnswer.value === 'true';
        if (answerCorrect) {
            showFeedback('Correct!', 'green');
        } else {
            showFeedback('Incorrect!', 'red');
        }
    } else {
        previousAnswer.textContent = '';
    }

    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        questionNumber.textContent = `${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
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
    result.innerHTML = `
        <h2>Your Score: ${score}</h2>
        <h3>Correct Answers:</h3>
        <ul>${correctAnswers.map(q => `<li>${q}</li>`).join('')}</ul>
        <h3>Incorrect Answers:</h3>
        <ul>${incorrectAnswers.map(q => `<li>${q}</li>`).join('')}</ul>
    `;
}

// Function to display incorrectly answered questions
function recapQuiz() {
    const recapContainer = document.getElementById('result');
    recapContainer.innerHTML = '<h2>Recap of Incorrect Answers</h2>';
    
    incorrectAnswers.forEach((question, index) => {
        recapContainer.innerHTML += `<p><strong>Question ${index + 1}:</strong> ${question}</p>`;
    });
}
