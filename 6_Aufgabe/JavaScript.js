var name;
var password;
var mail;
const regex = /[a-zA-Z0-9]{6,}/;

const regexMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
;


const newsletter = [
    {
        id: 1,
        name: "Heinz",
        mail: "heinz@web.com",
        password: "1234Ketchup"
    },
    {
        id: 2,
        name: "Karla",
        mail: "karla@gmail.com",
        password: "myPasswort"
    },
    {
        id: 3,
        name: "Simon",
        mail: "simon@gmail.com",
        password: "geheim123"
    },
    {
        id: 4,
        name: "Carl",
        mail: "carl@web.com",
        password: "lisbet2013"
    }
];

function addMe() {
    name = document.getElementById("name").value;
    password = document.getElementById("passwort").value;
    mail = document.getElementById("mail").value;

    // Aufgabe 2.2
    if (!isValidMail(mail)) {
        throw new Error("Given Mail is not valid")
    }


    if (regex.test(password) == false) {
        alert("Passwort muss mindestens eine Länge von 6 Zeichen enthalten")
    } else {
        alert("Nutzer \n Name: ${name} \n Passwort: ${password} \n Email: ${mail} \n wurde angelegt");
    }
}

function showMe() {

    // Aufgabe 1.1
    newsletter.forEach(element => {
        console.log(`${element.id} ${element.name} ${element.mail} ${element.password}`)
    });

    console.log("-------------------------------------------------------------------------")

    //Aufgabe 1.2
    newsletter.forEach(element => {
        if (element.mail.includes("@web.com")) {
            console.log(`${element.id} ${element.name} ${element.mail} ${element.password}`)
        }
    });

    console.log("-------------------------------------------------------------------------")

    //Aufgabe 1.3
    let names = []
    newsletter.forEach(element => {
        if (element.name.includes("i")) {
            names.push(element.name)
        }
    });
    names.sort()
    names.forEach(element => {
        console.log(element)
    });

    //Aufgabe 2.1
    // a: Exceptions werden ausgelöst, wenn in der Runtime Fehler auftreten. 
    // b: EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, AggregateError und InternalError 
    // c: * Die try-Anweisung definiert einen auszuführenden Code-Block 
    //    * Die catch-Anweisung definiert einen Code-Block zur Behandlung eines Fehlers.
    //    * Die finally-Anweisung definiert einen Codeblock, der unabhängig vom Ergebnis ausgeführt wird.
    //    * Die throw-Anweisung definiert einen benutzerdefinierten Fehler.

    addMe();
}

function isValidMail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    } else {
        return (false)
    }
}