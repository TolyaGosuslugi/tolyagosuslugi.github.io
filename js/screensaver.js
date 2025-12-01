////////////////////////// пременые //////////////////////////
const header = document.querySelector(".header");
const content = document.querySelector(".content");
const screensaver = document.querySelector(".screensaver");

screensaver.hidden = true;

let clockStatus = false;

////////////////////////// фунции //////////////////////////
function onUpdateClockStatus() {
    if (clockStatus) {
        header.hidden = true;
        content.hidden = true;
        screensaver.hidden = false;
    }
    else {
        header.hidden = false;
        content.hidden = false;
        screensaver.hidden = true;
    }
}

function OnEnterSite() {
    if (window.innerHeight == screen.height)
        clockStatus = true;
    onUpdateClockStatus();
}

////////////////////////// аа ета чо скелет типо скелет костя //////////////////////////
OnEnterSite();

// document.querySelector(".pizda").addEventListener('click', () => {
//     header.hidden = true;
// });

document.addEventListener('keydown', e => {
    if (e.key === 'F11') {
        clockStatus = !clockStatus;
        console.log(clockStatus);
        onUpdateClockStatus();
    }
});