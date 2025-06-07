document.addEventListener('DOMContentLoaded', function() {
    var player = document.getElementById("playerAudio");
    var volumeSlider = document.getElementById("volume");
    var playButton = document.getElementById("playButton");
    var volumeButton = document.getElementById('volumeButton');

    if (!player || !volumeSlider || !playButton) {
        console.error("Required elements not found!");
        return;
    }

    var defaultVolume = 20;

    var localVol = localStorage.getItem('volume');
    if (localVol !== null) {
        player.volume = localVol / 100;
        volumeSlider.value = localVol;
    } else {
        localStorage.setItem('volume', 20);
        player.volume = defaultVolume / 100;
        volumeSlider.value = defaultVolume;
    }

    volumeButton.addEventListener('click', function() {
        if (player.muted) {
            player.muted = false;
            this.src = 'img/player/volume-on.svg';
        } else {
            player.muted = true;
            this.src = 'img/player/volume-off.svg';
        }
    });

    playButton.addEventListener('click', function() {
        if (player.paused) {
            player.play();
            this.src = 'img/player/pause.svg';
        } else {
            player.pause();
            this.src = 'img/player/play.svg';
        }
    });

    volumeSlider.addEventListener("input", function() {
        player.volume = this.value / 100;
        localStorage.setItem('volume', this.value);
    });
});