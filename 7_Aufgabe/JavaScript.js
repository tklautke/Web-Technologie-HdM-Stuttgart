let name;
let password;
let mail;
const regex = /[a-zA-Z0-9]{6,}/;
const mailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

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
        if (mail.match(mailPattern)) {
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

