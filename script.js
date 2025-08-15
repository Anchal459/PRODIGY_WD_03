let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = Math.floor((diffInSec - ss) * 1000);

    return (
        (hh < 10 ? "0" : "") + hh + ":" +
        (mm < 10 ? "0" : "") + mm + ":" +
        (ss < 10 ? "0" : "") + ss + ":" +
        (diffInMs < 100 ? "0" : "") + (diffInMs < 10 ? "0" : "") + diffInMs
    );
}

function start() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            document.getElementById("display").textContent = timeToString(elapsedTime);
        }, 10); // Update every 10ms for precision
        running = true;
    }
}

function pause() {
    clearInterval(timerInterval);
    running = false;
}

function reset() {
    clearInterval(timerInterval);
    running = false;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00:000";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (running) {
        let lapTime = document.createElement("li");
        lapTime.textContent = timeToString(elapsedTime);
        document.getElementById("laps").appendChild(lapTime);
    }
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("pauseBtn").addEventListener("click", pause);
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("lapBtn").addEventListener("click", lap);
