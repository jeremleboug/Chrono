document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var startBtn = document.getElementById('btnstart');
    var tour_text = document.getElementById('tour');
    var tour_timer = document.getElementById('tour_timer');
    var tour = 0;
    var startTime = null;
    var running = false;
    var pausedTime = 0;

    startBtn.addEventListener('click', function() {
        if (running) {
            // Arrêter le chronomètre
            running = false;
            pausedTime += Date.now() - startTime;
            startBtn.textContent = 'START';
            tour = tour+1;
            tour_text.textContent  ='   tour : ' + tour;
            tour_timer.innerHTML += '<br>' +tour +'     '+ mettre_en_temps(pausedTime);
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
    function mettre_en_temps(time) {
        var milliseconds = time % 1000;
        var seconds = Math.floor((time / 1000) % 60);
        var minutes = Math.floor((time / (1000 * 60)) % 60);
        var hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    
        return formatDigits(hours) + ':' + formatDigits(minutes) + ':' + formatDigits(seconds) + '.' + formatMilliseconds(milliseconds);
    }
    function formatDigits(value) {
        return value.toString().padStart(2, '0');
    }
    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }

    function formatMilliseconds(milliseconds) {
        return milliseconds < 100 ? (milliseconds < 10 ? '00' + milliseconds : '0' + milliseconds) : milliseconds;
    }
});
