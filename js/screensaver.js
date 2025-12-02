const screensaverTime = document.querySelector('.screensaver__time');
const screensaverImg = document.querySelector('.screensaver__img');
const sidepanel = document.querySelector('.sidepanel');
const sidepanelHoverzone = document.querySelector(".sidepanel__hoverzone");

console.log(sidepanel + "\n" + sidepanel.offsetWidth + "\n" + -sidepanel.offsetWidth + "px" + "\n" + sidepanel.offsetHeight);
sidepanelHoverzone.style.height = sidepanel.offsetHeight + "px";
sidepanel.style.right = -sidepanel.offsetWidth + "px";

sidepanelHoverzone.addEventListener('mouseenter', () => {
    sidepanel.style.right = 0;
});
sidepanel.addEventListener('mouseleave', () => {
    sidepanel.style.right = -sidepanel.offsetWidth + "px";
});

function updateClock() {
    //from https://codepen.io/EKV113/pen/rXKBRg
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    currentHours = (currentHours < 10 ? "0": "") + currentHours;

    let currentTimeString =  currentHours + ":" + currentMinutes + ":" + currentSeconds;

    screensaverTime.innerHTML = currentTimeString;
}

setInterval('updateClock()', 100);