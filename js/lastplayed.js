const lastPlayedBlock = document.getElementById('lastPlayed');

async function fetchLastFM() {
  const data = await fetch("https://lastfm.hirasawa.ru/kuunnella?user=TolyaGosuslugi")
  // powered by https://codeberg.org/inuhepott/kuunnella
  // ily bro

  const res = await data.json();

  const resLink = "https://last.fm/music/" + res["artist"] + "/_/" + res["name"]

  const lastPlayed = document.createElement("div");
  lastPlayed.setAttribute("class", "faq__text");
  lastPlayed.innerHTML = (res["nowplaying"] ? "now listening to" : "last played")
                          + ": <i><a href=\""+ resLink + "\" target=\"_blank\">" + res["artist"] + " - " + res["name"] + "</a></i>";
                          // it'll be like: "now listening to: Linkin Park - Rn@awy"(text `Artist - Track` is clickable)
                          // or "last played: Limp Bizkit - Rib"(text `Artist - Track` is clickable)

  lastPlayedBlock.append(lastPlayed);
}

window.addEventListener("load", fetchLastFM)