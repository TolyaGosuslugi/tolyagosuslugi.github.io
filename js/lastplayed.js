const lastPlayedBlock = document.getElementById('lastPlayed');

async function fetchLastFM() {
  const data = await fetch("https://lastfm.hirasawa.ru/kuunnella?user=TolyaGosuslugi")
  // powered by https://codeberg.org/inuhepott/kuunnella
  // ily bro

  const res = await data.json();

  const lastPlayed = document.createElement("div");
  lastPlayed.setAttribute("class", "faq__text");
  lastPlayed.innerHTML = (res["nowplaying"] ? "now listening to" : "last played")
                          + ": <i><a href=\""+ res["url"] + "\" target=\"_blank\">" + res["artist"] + " - " + res["name"] + "</a></i>";
                          // it'll be like: "now listening to: Linkin Park - Rn@awy"(text `Artist - Track` is clickable)
                          // or "last played: Limp Bizkit - Rib"(text `Artist - Track` is clickable)

  const poweredBy = document.createElement("div");
  poweredBy.classList.add("faq__text", "poweredBy");
  poweredBy.innerHTML = "(powered by <a href=\"https://codeberg.org/inuhepott/kuunnella\" target=\"_blank\">kuunnella</a>)";
  
  lastPlayedBlock.append(lastPlayed, poweredBy);
}

window.addEventListener("load", fetchLastFM)