const lastPlayedBlock = document.getElementById('lastPlayed');

async function fetchLastFM() {
    const data = await fetch("https://www.ballix.net/whatsplaying/now?user=tolyagosuslugi")
    // https://github.com/lordfeck/last.played
    // give a star to this project, bro made a really good thing
    const res = await data.json();

    const lastPlayed = document.createElement("div");
    lastPlayed.setAttribute("class", "faq__text");
    lastPlayed.innerHTML = (res["nowplaying"] ? "now listening to" : "last played")
                            + ": <i><a href=\"" + res["url"] + "\" target=\"_blank\">" + res["artist"] + " - " + res["name"] + "</a></i>";
                            // it'll be like: "now listening to: Linkin Park - Rn@awy"(text `Artist - Track` is clickable)
                            // or "last played: Limp Bizkit - Rib"(text `Artist - Track` is clickable)

    lastPlayedBlock.append(lastPlayed);
}

window.addEventListener("load", fetchLastFM)