let availableSeats = [];
const URL = "https://my-json-server.typicode.com/christophkunz/webtechbackend/seats";

/*
 * Aufgabe1:
 * POST -> Daten zu einem Server schicken
 * GET -> Daten vom Server anfordern
 * DELETE -> Löscht die angegebenen Daten auf dem Server
 * PUT -> Es werden die Daten auf dem Server aktualisiert
 */


//Aufgabe 2
//Sitze Laden

let xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {
  if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
    let responseJSON = JSON.parse(xmlHttp.responseText)
    responseJSON.forEach(seatObj => {
      availableSeats.push(seatObj.seat)
    })
    showTable()
  }
}
xmlHttp.open("GET", URL, true);
xmlHttp.send();


//Anzeige der Sitze
function showTable() {
    let availableColumns = availableSeats.length / 4;

    // Tabelle erstellen
    let table = document.createElement("table");
    table.setAttribute("border", "1");

    let seatInRow = 0;
    let row = table.insertRow();

    // Sitzplätze in Reihen aufteilen
    for (let seat = 0; seat < availableSeats.length; seat++) {
        if (seatInRow >= availableColumns) {
            // Neue Tabellenzeile erzeugen
            row = table.insertRow();
            // Zähler zurücksetzen
            seatInRow = 0;
        }
        // Sitzplatz pro Zeile zählen
        seatInRow++;

        let cell = row.insertCell();
        let text = document.createTextNode(availableSeats[seat]);
        cell.appendChild(text);
        cell.onclick = function () {
            setReservation(cell);
        };
    }

    document.getElementById("currentSeats").appendChild(table);
}


/////////
//Lösungen aus vorherigen Aufgaben 


// Speicherung der Ausgewählten Sitze:
function setReservation(aCell) {
    if (aCell.style.backgroundColor != "grey") {
        // Falls die Zelle noch nicht selektiert wurde
        aCell.style.backgroundColor = "grey";
        let text = aCell.innerHTML;
        document.getElementById("seats").innerHTML += text + ", ";
    }
}


// Attribut löschen
document.getElementById("button").addEventListener("click", deleteReservations);

function deleteReservations() {
    let tag = document.querySelector("#seats");
    tag.innerHTML = "<h1 id='del'>Inhalt gelöscht</h1>";

    // optional:
    let table = document.getElementById("currentSeats").firstChild;
    for (let rowCount = 0; rowCount < table.rows.length; rowCount++) {
        let row = table.rows[rowCount];
        for (let cellCount = 0; cellCount < row.cells.length; cellCount++) {
            let cell = row.cells[cellCount];
            if (rowCount % 2 === 0) {
                cell.style.backgroundColor = "white";
            } else {
                // CSS Farbe der Zebratabelle aus stylesheet.css wiederherstellen
                cell.style.backgroundColor = "#f2f2f2";
            }
        }
    }
}