const timerDisplay = document.getElementById('time-display');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');

let timeRemaining = 25 * 60; // default 25 minutes
let intervalId;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(() => {
            timeRemaining--;
            updateTimerDisplay();
            if (timeRemaining <= 0) {
                stopTimer();
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(intervalId);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    timeRemaining = 25 * 60; // reset to default 25 minutes
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);