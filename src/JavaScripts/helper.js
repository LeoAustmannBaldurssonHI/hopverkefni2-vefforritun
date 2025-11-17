export function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

export function attachTerminateQuiz(endQuizBtn, showScoreFn) {
    endQuizBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to end the quiz early? You will not get a grade for doing so.')) {
            showScoreFn();
        }
    });
}