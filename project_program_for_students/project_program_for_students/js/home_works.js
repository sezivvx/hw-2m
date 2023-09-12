const counterElement = document.getElementById("counter");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let counter = 0;

let intervalId = null;

function increaseCounter() {
    counter++;
    counterElement.textContent = counter;
}

startButton.addEventListener("click", function() {
    if (intervalId === null) {
        intervalId = setInterval(increaseCounter, 1000);
    }
});

stopButton.addEventListener("click", function() {
    clearInterval(intervalId);
    intervalId = null;
});

resetButton.addEventListener("click", function() {
    clearInterval(intervalId);
    intervalId = null;
    counter = 0;
    counterElement.textContent = counter;
});