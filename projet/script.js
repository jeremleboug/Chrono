document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var startBtn = document.getElementById('btnstart');

    var startTime = null;
    var running = false;
    var pausedTime = 0;

    startBtn.addEventListener('click', function() {
        if (running) {
            // Arrêter le chronomètre
            running = false;
            pausedTime += Date.now() - startTime;
            startBtn.textContent = 'START';
        } else {
            // Démarrer le chronomètre
            running = true;
            startTime = Date.now();
            requestAnimationFrame(updateTimer);
            startBtn.textContent = 'STOP';
        }
    });

    function updateTimer() {
        if (!running) return;

        var currentTime = Date.now();
        var elapsed = currentTime - startTime + pausedTime;

        var milliseconds = elapsed % 1000;
        var seconds = Math.floor((elapsed / 1000) % 60);
        var minutes = Math.floor((elapsed / (1000 * 60)) % 60);
        var hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);

        var time = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds) + '.' + formatMilliseconds(milliseconds);
        timerElement.textContent = time;

        requestAnimationFrame(updateTimer);
    }

    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }

    function formatMilliseconds(milliseconds) {
        return milliseconds < 100 ? (milliseconds < 10 ? '00' + milliseconds : '0' + milliseconds) : milliseconds;
    }
});
