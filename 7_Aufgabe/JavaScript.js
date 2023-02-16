let name;
let password;
let mail;
const regex = /[a-zA-Z0-9]{6,}/;
const mailpattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

function seatReservation(aSeat) {
    //function is not necessary
}

class Reservations {
    mySeatList = [];

    constructor(aMailadress) {
        this.aMailadress = aMailadress;
    }

    addSeatReservation(aSeat) {
        this.mySeatList.push(aSeat)
    }

    printReservations() {
        this.mySeatList.forEach(i => {
            console.log(i)
        })
    }
}

// Test
const list = new Reservations('peter@web.de');
list.addSeatReservation('D3');
list.addSeatReservation('F6');
list.printReservations();

//Aufgabe 2
function addMe() {
    name = document.getElementById("name").value;
    password = document.getElementById("passwort").value;
    mail = document.getElementById("mail").value;

    if (regex.test(password) === false) {
        alert("Passwort muss mindestens eine Länge von 6 Zeichen enthalten")
    } else {
        if (mail.match(mailpattern)) {
            alert(`Nutzer \n Name: ${name} \n Passwort: ${password} \n Email: ${mail} \n wurde angelegt`);
        } else {
            //Exception
            throw new Error(`Mailadresse nicht gültig`);
        }
    }


}

function showMe() {
    try {
        addMe();
    } catch (e) {
        alert(e)
    }
}

