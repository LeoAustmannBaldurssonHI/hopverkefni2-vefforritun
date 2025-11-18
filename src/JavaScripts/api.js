import { startQuiz, setApiUrl, setStartButton } from "./Utility/spurningarScript.js";


const carBtn = document.getElementById('start_CarQuiz');
const politicsBtn = document.getElementById('start_PoliticsQuiz');
const artsBtn = document.getElementById('start_ArtsQuiz');
const musicBtn = document.getElementById('start_MusicQuiz');
const historyBtn = document.getElementById('start_HistoryQuiz');
const televisionBtn = document.getElementById('start_TelevisionQuiz');
const geographyBtn = document.getElementById('start_GeographyQuiz');

carBtn.addEventListener('click', () => {
    setApiUrl('https://opentdb.com/api.php?amount=20&category=28');
    setStartButton(carBtn);

    carBtn.style.display = 'none';
    musicBtn.style.display = 'none';
    historyBtn.style.display = 'none';
    televisionBtn.style.display = 'none';
    geographyBtn.style.display = 'none';
    artsBtn.style.display = 'none';
    politicsBtn.style.display = 'none';

    startQuiz();
});

politicsBtn.addEventListener('click', () => {
    setApiUrl('https://opentdb.com/api.php?amount=20&category=24');
    setStartButton(politicsBtn);

    carBtn.style.display = 'none';
    musicBtn.style.display = 'none';
    historyBtn.style.display = 'none';
    televisionBtn.style.display = 'none';
    geographyBtn.style.display = 'none';
    artsBtn.style.display = 'none';
    politicsBtn.style.display = 'none';

    startQuiz();
});

artsBtn.addEventListener('click', () => {
    setApiUrl("https://opentdb.com/api.php?amount=20&category=25"); // missing
    setStartButton(artsBtn);

    carBtn.style.display = 'none';
    musicBtn.style.display = 'none';
    historyBtn.style.display = 'none';
    televisionBtn.style.display = 'none';
    geographyBtn.style.display = 'none';
    artsBtn.style.display = 'none';
    politicsBtn.style.display = 'none';

    startQuiz();
})

historyBtn.addEventListener('click', () => {
    setApiUrl("https://opentdb.com/api.php?amount=20&category=23"); // missing
    setStartButton(historyBtn);

    carBtn.style.display = 'none';
    musicBtn.style.display = 'none';
    historyBtn.style.display = 'none';
    televisionBtn.style.display = 'none';
    geographyBtn.style.display = 'none';
    artsBtn.style.display = 'none';
    politicsBtn.style.display = 'none';

    startQuiz();
})

televisionBtn.addEventListener('click', () => {
    setApiUrl("https://opentdb.com/api.php?amount=20&category=14"); // missing
    setStartButton(televisionBtn);

    carBtn.style.display = 'none';
    musicBtn.style.display = 'none';
    historyBtn.style.display = 'none';
    televisionBtn.style.display = 'none';
    geographyBtn.style.display = 'none';
    artsBtn.style.display = 'none';
    politicsBtn.style.display = 'none';

    startQuiz();
})

geographyBtn.addEventListener('click', () => {
    setApiUrl("https://opentdb.com/api.php?amount=20&category=22"); // missing
    setStartButton(geographyBtn);

    carBtn.style.display = 'none';
    musicBtn.style.display = 'none';
    historyBtn.style.display = 'none';
    televisionBtn.style.display = 'none';
    geographyBtn.style.display = 'none';
    artsBtn.style.display = 'none';
    politicsBtn.style.display = 'none';

    startQuiz();
})

musicBtn.addEventListener('click', () => {
    setApiUrl("https://opentdb.com/api.php?amount=20&category=12"); // missing
    setStartButton(musicBtn);

    carBtn.style.display = 'none';
    musicBtn.style.display = 'none';
    historyBtn.style.display = 'none';
    televisionBtn.style.display = 'none';
    geographyBtn.style.display = 'none';
    artsBtn.style.display = 'none';
    politicsBtn.style.display = 'none';

    startQuiz();
})