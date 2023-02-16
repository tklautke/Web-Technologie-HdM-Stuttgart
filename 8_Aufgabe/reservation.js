/////
// JavaScript und HTML

/*
Aufgabe 1.1:
getElementbyID() -> durchforstet den DOM genau nach der einen ID.
querySelector() -> durchforstet den DOM von oben nach unten nach dem ersten passenden Match

Aufgabe 1.2:
- Dokumentknoten stellt die gesamte Baumstruktur dar.
- Dokumentfragmentknoten stellt einen Teil der Baumstruktur dar.
- Elementknoten entspricht exakt einem Element in HTML oder XML.
- Attributknoten entspricht exakt einem Attribut in HTML oder XML.
- Textknoten stellt den Textinhalt eines Elements dar.
 */

const availableSeats = ["a1", "a2", "a3", "a4", "a5",
    "b1", "b2", "b3", "b4", "b5",
    "c1", "c2", "c3", "c4", "c5",
    "d1", "d2", "d3", "d4", "d5",
    "e1", "e2", "e3", "e4", "e5"];

// Ausgabe der verfügbaren Plätze
let tableRef = document.getElementById("available-seats-table");
availableSeats.forEach(i => {
    let newTableRow = tableRef.insertRow(-1);
    let newTableCell = newTableRow.insertCell(0);
    let newTableText = document.createTextNode(i)
    newTableCell.appendChild(newTableText)
})

let seatsDropdown = document.getElementById("seats-dropdown");
availableSeats.forEach(i => {
    let option = document.createElement('option');
    option.text = option.value = i
    seatsDropdown.add(option, -1)
})