// Aufgabe 1: 
// Geben Sie die 7 primitiven Datentypen in JavaScript an (ES6).
// -> int, string, bigint, boolean, undefined, symbol, null

// Aufgabe 2:
// Beschreiben Sie den Unterschied und die Gemeinsamkeiten zwischen async und defer.
// -> async: Werden ausgeführt, sobald das Skript geladen ist, sodass die Reihenfolge der Ausführung nicht garantiert ist.
// -> defer: Werden in der Reihenfolge eingebunden in der sie auf der Seite eingebunden sind
// -> Gemeinsamkeiten: Beide binden JS Scripte ein. 

function showMe() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    if (password.length < 6) {
        alert("Passwort muss mindestens eine Länge von 6 Zeichen enthalten")
    } else {
        alert(`Name: ${name} \nPassword: ${password}`)
    }
}