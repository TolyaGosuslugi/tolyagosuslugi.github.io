const lastPlayedBlock = document.getElementById('lastPlayed');

async function fetchLastFM() {
    const data = await fetch("https://www.ballix.net/whatsplaying/?user=tolyagosuslugi")

    const res = await data.json();

    const br1 = document.createElement("br");
    const br2 = document.createElement("br");

    const lastPlayed = document.createElement("div");
    lastPlayed.setAttribute("class", "content__text");
    lastPlayed.innerHTML = (res["nowplaying"] ? "now listening to" : "last played")
                            + ": <i><a href=\"" + res["url"] + "\" target=\"_blank\">" + res["artist"] + " - " + res["name"] + "</a></i>";

    lastPlayedBlock.append(lastPlayed, br1, br2);
}

window.addEventListener("load", fetchLastFM)