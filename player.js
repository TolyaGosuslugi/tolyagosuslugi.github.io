var audio = document.getElementById("playerAudio");
var volumeSlider = document.getElementById("volume");
var localVol = localStorage.getItem('volume');
if (localVol != null) {
	audio.volume = localVol/100;
	volumeSlider.value = localVol;
}
else {
	localStorage.setItem('volume', 20);
	audio.volume = localStorage.getItem('volume')/10;
	volumeSlider.value = localStorage.getItem('volume');
}
document.getElementById("playButton").addEventListener('click', function() {
	if (audio.paused) {
		audio.play();
		document.getElementById('playButton').src = 'img/player/pause.svg';
	}
	else if (!audio.paused) {
		audio.pause();
		document.getElementById('playButton').src = 'img/player/play.svg';
	}
});

volumeSlider.addEventListener("input", () => {
	audio.volume = volumeSlider.value/100;
	localStorage.setItem('volume', volumeSlider.value);
});