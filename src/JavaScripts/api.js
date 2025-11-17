import { startQuiz, setApiUrl, setStartButton } from "./Utility/spurningarScript.js";


const carBtn = document.getElementById('start_CarQuiz');
const politicsBtn = document.getElementById('start_PoliticsQuiz');

carBtn.addEventListener('click', () => {
    setApiUrl('https://opentdb.com/api.php?amount=20&category=28');
    setStartButton(carBtn);

    carBtn.style.display = 'none';
    politicsBtn.style.display = 'none';

    startQuiz();
});

politicsBtn.addEventListener('click', () => {
    setApiUrl('https://opentdb.com/api.php?amount=20&category=24');
    setStartButton(politicsBtn);

    politicsBtn.style.display = 'none';
    carBtn.style.display = 'none';

    startQuiz();
});