// const lastPlayedText = document.getElementById('lastPlayed');
const lastPlayedBlock = document.getElementById('lastPlayed');

// https://stackoverflow.com/questions/247483/http-get-request-in-javascript
let xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://cat.fs.tlpteam.ru:5011/?user=tolyagosuslugi", false);
xmlHttp.send(null);

if (xmlHttp.responseText != 0) {
    const lastParse = JSON.parse(xmlHttp.responseText);
    
    const br1 = document.createElement("br");
    const br2 = document.createElement("br");

    const lastPlayed = document.createElement("div");
    lastPlayed.setAttribute("class", "content__text");
    lastPlayed.innerHTML = (lastParse["nowplaying"] ? "now listening to" : "last played")
                            + ": <i><a href=\"" + lastParse["url"] + "\" target=\"_blank\">" + lastParse["artist"] + " - " + lastParse["name"] + "</a></i>";

    lastPlayedBlock.append(lastPlayed, br1, br2);
}
