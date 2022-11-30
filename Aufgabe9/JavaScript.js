var name;
var password;
var mail;
const regex = /[a-zA-Z0-9]{6,}/;
const mailpattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

//Aufgabe 1
// Funktion zur Rückgabe der Sitzplatzreservierungen 
function seatReservation(aSeat) {
  let seat = aSeat;

  return function () {
    return aSeat;
  };
}

// Klasse zur Buchung einer Sitzplatzreservierung
class Reservations {

  #myMailAdress = null;
  #mySeatList = [];

  //mail der Reservierenden Person wird an Klasse übergeben
  constructor(aMailAdress) {
    this.#myMailAdress = aMailAdress;
  }

  //Reservierung wird zu platz-Array hinzugefügt
  addSeatReservation(aSeat) {
    this.#mySeatList.push(aSeat);
  }

  //Reservierungen werden angezeigt
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


//A2
//Try Catch mit Error handling
function addMe() {
  name = document.getElementById("name").value;
  password = document.getElementById("passwort").value;
  mail = document.getElementById("mail").value;
  if (regex.test(password) == false) {
    alert("Passwort muss mindestens eine Länge von 6 Zeichen enthalten")
  }
  else {
    if (mail.match(mailpattern)) {
      alert(`Nutzer \n Name: ${name} \n Passwort: ${password} \n Email: ${mail} \n wurde angelegt`);
    }
    else {
      //Exception
      throw new Error('Eine gültige Mailadresse muss angegeben werden');
    }
  }
}


function showMe() {
  try {
    addMe();
  }
  catch (err) {
    alert(err.message)
  }
}