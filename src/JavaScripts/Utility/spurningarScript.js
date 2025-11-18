import { decodeHtml, attachTerminateQuiz } from "../helper.js";

let apiUrl = '';
let startBtn = null;
let questions = [];
let currentIndex = 0;
let score = 0;

let incorrectScore = 0;

const questionArea = document.getElementById('questionArea');
const questionText = document.getElementById('questionText');
const answersDiv = document.getElementById('answers');
const nextBtn = document.getElementById('nextBtn');
const scoreDiv = document.getElementById('score');
const questionNumber = document.getElementById('questionNumber');
const endQuizBtn = document.getElementById('end_Quiz');

// allow api.js to configure
export function setApiUrl(url) { apiUrl = url; }
export function setStartButton(btn) { startBtn = btn; }

nextBtn.addEventListener('click', () => {
    currentIndex++;
    showQuestion();
});

export function startQuiz() {
    score = 0;
    currentIndex = 0;
    scoreDiv.classList.add('hidden');
    endQuizBtn.classList.remove('hidden');

    attachTerminateQuiz(endQuizBtn, showScore);

    fetch(apiUrl)
        .then(r => r.json())
        .then(data => {
            if (data.response_code !== 0) {
                alert('Error fetching questions!');
                return;
            }
            questions = data.results;
            questionArea.classList.remove('hidden');
            showQuestion();
        })
        .catch(err => {
            console.error(err);
            alert('Failed to fetch quiz questions.');
        });
}

function showQuestion() {
    if (currentIndex >= questions.length) {
        showScore();
        return;
    }
    const q = questions[currentIndex];
    questionNumber.innerText = `Question ${currentIndex + 1} of ${questions.length}`;
    questionText.innerHTML = decodeHtml(q.question);

    const options = [...q.incorrect_answers, q.correct_answer];
    options.sort(() => Math.random() - 0.5);

    answersDiv.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerHTML = decodeHtml(opt);
        btn.onclick = () => {
            if (opt === q.correct_answer) {
                score++;
                btn.style.backgroundColor = '#a8e6a1';
            } else {
                incorrectScore++;
                btn.style.backgroundColor = '#f3a1a1';
            }
            Array.from(answersDiv.children).forEach(b => b.disabled = true);
            nextBtn.classList.remove('hidden');
        };
        answersDiv.appendChild(btn);
    });

    nextBtn.classList.add('hidden');
}

function showScore() {
    questionArea.classList.add('hidden');
    scoreDiv.classList.remove('hidden');

    const lengthQuestions = Math.min(currentIndex, questions.length);
    scoreDiv.innerHTML = `You answered correctly ${score} out of ${lengthQuestions} questions. Which is ${((score / questions.length) * 100).toFixed(2)}% accuracy`;

    document.getElementById('start_CarQuiz').style.display = 'inline-block';
    document.getElementById('start_PoliticsQuiz').style.display = 'inline-block';
    document.getElementById('start_MusicQuiz').style.display = 'inline-block';
    document.getElementById('start_TelevisionQuiz').style.display = 'inline-block';
    document.getElementById('start_ArtsQuiz').style.display = 'inline-block';
    document.getElementById('start_HistoryQuiz').style.display = 'inline-block';
    document.getElementById('start_GeographyQuiz').style.display = 'inline-block';
    endQuizBtn.classList.add('hidden');
}
