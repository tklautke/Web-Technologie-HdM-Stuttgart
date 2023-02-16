let name;
let password;
let mail;
const regex = /[a-zA-Z0-9]{6,}/;
const mailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;


// Funktion zur Rückgabe der Sitzplatzreservierungen
function seatReservation(aSeat) {
    let seat = aSeat;

    return function () {
        return aSeat;
    };
}

class Reservations {

    #myMailAdress = null;
    #mySeatList = [];

    constructor(aMailAdress) {
        this.#myMailAdress = aMailAdress;
    }

    addSeatReservation(aSeat) {
        this.#mySeatList.push(aSeat);
    }

    printReservations() {
        this.#mySeatList.forEach(seat => {
            console.log(seat());
        });
    }
}


// Test
const list = new Reservations('peter@web.de');
list.addSeatReservation(new seatReservation('D3'));
list.addSeatReservation(new seatReservation('F6'));
list.printReservations();


//Try Catch mit Error handling
function showMe() {
    name = document.getElementById("name").value;
    password = document.getElementById("passwort").value;
    mail = document.getElementById("mail").value;
    if (regex.test(password) == false) {
        alert("Passwort muss mindestens eine Länge von 6 Zeichen enthalten")
    } else {
        try {
            if (mail.match(mailPattern)) {
                alert(`Nutzer \n Name: ${name} \n Passwort: ${password} \n Email: ${mail} \n wurde angelegt`);
            } else {
                //Exception
                throw new Error(`Mailadresse nicht gültig`);
            }
        } catch (error) {
            alert("Email nicht definiert!")
        }
    }
}

const availableSeats = ["a1", "a2", "a3", "a4", "b1", "b2", "b3", "b4", "c1", "c2", "c3", "c4", "d1", "d2", "d3", "d4"];