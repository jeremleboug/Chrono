document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var startBtn = document.getElementById('btnstart');

    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var milliseconds = 0;
    var timerInterval;

    startBtn.addEventListener('click', function() {
        if (startBtn.textContent === 'START') {
            startBtn.textContent = 'STOP';
            timerInterval = setInterval(updateTimer, 10); // Mis à jour pour exécuter toutes les 10 millisecondes
        } else {
            startBtn.textContent = 'START';
            clearInterval(timerInterval);
        }
    });

    function updateTimer() {
        milliseconds += 10; // Augmente de 10 millisecondes
        if (milliseconds === 1000) {
            seconds++;
            milliseconds = 0;
        }
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        var time = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds) + '.' + formatMilliseconds(milliseconds);
        timerElement.textContent = time;
    }

    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }

    function formatMilliseconds(milliseconds) {
        return milliseconds < 100 ? (milliseconds < 10 ? '00' + milliseconds : '0' + milliseconds) : milliseconds;
    }
});
