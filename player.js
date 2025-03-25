document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("playerAudio");
    var volumeSlider = document.getElementById("volume");
    var playButton = document.getElementById("playButton");

    if (!audio || !volumeSlider || !playButton) {
        console.error("Required elements not found!");
        return;
    }

    var localVol = localStorage.getItem('volume');
    if (localVol !== null) {
        audio.volume = localVol / 100;
        volumeSlider.value = localVol;
    } else {
        localStorage.setItem('volume', 20);
        audio.volume = defaultVolume / 100;
        volumeSlider.value = defaultVolume;
    }

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            this.src = 'img/player/pause.svg';
        } else {
            audio.pause();
            this.src = 'img/player/play.svg';
        }
    });

    volumeSlider.addEventListener("input", function() {
        audio.volume = this.value / 100;
        localStorage.setItem('volume', this.value);
    });
});