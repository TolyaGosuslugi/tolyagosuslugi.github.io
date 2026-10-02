const lastPlayedBlock = document.getElementById('lastPlayed');

async function fetchLastFM() {
    const data = await fetch("https://www.ballix.net/whatsplaying/now?user=tolyagosuslugi")
    const res = await data.json();

    const lastPlayed = document.createElement("div");
    lastPlayed.setAttribute("class", "faq__text");
    lastPlayed.innerHTML = (res["nowplaying"] ? "now listening to" : "last played")
                            + ": <i><a href=\"" + res["url"] + "\" target=\"_blank\">" + res["artist"] + " - " + res["name"] + "</a></i>";

    lastPlayedBlock.append(lastPlayed);
}

window.addEventListener("load", fetchLastFM)
