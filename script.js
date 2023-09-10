const questionNumber = document.getElementById('question-number');
const questionContainer = document.getElementById('question');
const answerForm = document.getElementById('answer-form');
const nextButton = document.getElementById('next-button');
const recapButton = document.getElementById('recap-button'); // Rename to Recap button
const result = document.getElementById('result');
const previousAnswer = document.getElementById('previous-answer'); // Added Previous Answer element
const scoreDisplay = document.getElementById('score-display'); // Added Score Display element

let shuffledQuestions, currentQuestionIndex;
let correctAnswers = [];
let incorrectAnswers = [];

// Fetch the quiz data from the external JavaScript file (questions.js)
fetch('questions.json')
    .then((response) => response.json())
    .then((data) => {
        shuffledQuestions = data;
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
    
    // Calculate the score and display it
    const totalQuestions = currentQuestionIndex;
    const score = totalQuestions > 0 ? (correctAnswers.length / totalQuestions) * 100 : 0;
    scoreDisplay.textContent = `Score: ${score.toFixed(2)}%`;
}

function showQuestion(question) {
    questionNumber.innerText = `Question ${currentQuestionIndex + 1}`;
    questionContainer.innerText = question.question;
    answerForm.innerHTML = '';

    // Resize the question container
    questionContainer.style.height = 'fit-content';

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
        <h2>Your Score: ${scoreDisplay.textContent}</h2>
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
