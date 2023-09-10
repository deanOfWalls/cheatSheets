const questionNumber = document.getElementById('question-number');
const questionContainer = document.getElementById('question');
const answerForm = document.getElementById('answer-form');
const nextButton = document.getElementById('next-button');
const result = document.getElementById('result');
const previousAnswer = document.getElementById('previous-answer');
const scoreDisplay = document.getElementById('score');
const totalQuestionsDisplay = document.getElementById('total-questions');

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let totalAnswered = 0;
let correctAnswers = [];
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

fetch('questions.json')
  .then((response) => response.json())
  .then((data) => {
    shuffledQuestions = data;
    shuffleArray(shuffledQuestions);
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
    correctAnswers.push(shuffledQuestions[currentQuestionIndex].question);
    showFeedback('Correct!', 'white', true);
  } else {
    incorrectAnswers.push(shuffledQuestions[currentQuestionIndex].question);
    showFeedback('Incorrect!', 'black', false);
  }
  totalAnswered++;
  currentQuestionIndex++;
  showNextQuestion();
});

function showFeedback(text, color, isCorrect = false) {
  previousAnswer.textContent = `Previous answer: ${text}`;
  previousAnswer.style.color = color;
  if (isCorrect) {
    previousAnswer.classList.add('correct');
  } else {
    previousAnswer.classList.remove('correct');
  }
}

function showScore() {
  const percentage = totalAnswered === 0 ? 0 : ((score / totalAnswered) * 100).toFixed(2);
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
      showFeedback('Incorrect!', 'black', false);
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
  });
}
