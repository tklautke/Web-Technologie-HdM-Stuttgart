/////
// JavaScript und HTML


/*
 * Aufgabe 1:
 * outerHTML Bezieht sich auf den Inhalt des Elements inklusive des Elementes.
 * innerHTML: Bezieht sich nur auf den Element Inhalt
 */

const availableSeats =
  ["a1", "a2", "a3", "a4", "a5",
    "b1", "b2", "b3", "b4", "b5",
    "c1", "c2", "c3", "c4", "c5",
    "d1", "d2", "d3", "d4", "d5",
    "e1", "e2", "e3", "e4", "e5"];

// Aufgabe 2
// Anzeige der Sitze
let availableColumns = 5

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
      setReservation(cell)
  };
} 

// Tabelle zu div mit ID "currentSeats" hinzufügen
document.getElementById("currentSeats").appendChild(table);

let reservatedSeats = []

// Speicherung der ausgewählten Sitze:
function setReservation(value) {
  if (value.style.backgroundColor != "grey") {
    // Falls die Zelle noch nicht selektiert wurde
    value.style.backgroundColor = "grey";
    let text = value.innerHTML;
  
    // Hier ergänzen
    reservatedSeats.push(text)
    document.getElementById("seats").innerHTML = reservatedSeats.join(", ")

  }
}

// Reservierte Sitze löschen
function deleteReservations() {
    changeTagName(document.querySelector("#seats"), "h1")
    document.querySelector("#seats").innerHTML = "Inhalt gelöscht"
}

function changeTagName(el, newTagName) {
    let n = document.createElement(newTagName);
    let attr = el.attributes;
    for (let i = 0, len = attr.length; i < len; ++i) {
        n.setAttribute(attr[i].name, attr[i].value);
    }
    n.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(n, el);
}