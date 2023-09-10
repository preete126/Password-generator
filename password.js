let UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let number = "0123456789"
let symbol = "!@#$%^&*?"
let lowercases = "abcdefghijklmnopqrstuvwxyz"
let password = document.getElementById("password")
let passwordLength = document.getElementById("pwLength")
let second = document.getElementById("second")
let first = document.getElementById("first")
let third = document.getElementById("third")
let forth = document.getElementById("forth")
let range = document.getElementById("range")
let authenticate = document.getElementById("default")
let toggle = "yes"
let generalArray;


function uppercase(ev) {
    let event = ev.target.checked
    console.log(event)


    if (event == true && second.checked != true && third.checked != true && forth.checked != true) {

        generalArray = UPPERCASE
        display(generalArray)
    }
    else if (event == true && second.checked == true && third.checked != true && forth.checked != true) {

        generalArray = UPPERCASE + lowercases
        display(generalArray)
    }
    else if (event == true && second.checked != true && third.checked == true && forth.checked != true) {

        generalArray = number + UPPERCASE
        display(generalArray)
    }
    else if (event == true && second.checked != true && third.checked != true && forth.checked == true) {

        generalArray = symbol + UPPERCASE
        display(generalArray)
    }
    if (event == true && second.checked == true && third.checked == true && forth.checked != true) {

        generalArray = UPPERCASE + number + lowercases
        display(generalArray)
    }
    else if (event == true && second.checked == true && third.checked != true && forth.checked == true) {

        generalArray = UPPERCASE + symbol + lowercases
        display(generalArray)
    }
    else if (event == true && second.checked != true && third.checked == true && forth.checked == true) {

        generalArray = number + symbol + UPPERCASE
        display(generalArray)
    }
    else if (event != true && second.checked == true && third.checked == true && forth.checked == true) {

        generalArray = symbol + number + lowercases
        display(generalArray)
    }
    else if (event != true && second.checked != true && third.checked == true && forth.checked == true) {

        generalArray = symbol + number
        display(generalArray)
    }
    else if (event != true && second.checked == true && third.checked != true && forth.checked == true) {

        generalArray = lowercases + symbol
        display(generalArray)
    }
    else if (event != true && second.checked == true && third.checked == true && forth.checked != true) {

        generalArray = number + lowercases
        display(generalArray)
    }
    else if (event != true && second.checked != true && third.checked != true && forth.checked == true) {

        generalArray = symbol
        display(generalArray)
    }
    else if (event != true && second.checked != true && third.checked != true && forth.checked != true) {
        second.checked = true
        generalArray = lowercases
        display(generalArray)
    }
    else if (event != true && second.checked != true && third.checked == true && forth.checked != true) {

        generalArray = number
        display(generalArray)
    }
    else if (event != true && second.checked == true && third.checked != true && forth.checked != true) {

        generalArray = lowercases
        display(generalArray)
    }
    if (event == true && second.checked == true && third.checked == true && forth.checked == true) {

        generalArray = UPPERCASE + number + symbol + lowercases
        display(generalArray)
    }

}



function lowercase(ev) {
    let event = ev.target.checked

    if (event == true && first.checked != true && third.checked != true && forth.checked != true) {

        generalArray = lowercases
        display(generalArray)
    }
    else if (event == true && first.checked == true && third.checked != true && forth.checked != true) {

        generalArray = UPPERCASE + lowercases
        display(generalArray)
    }
    else if (event == true && first.checked != true && third.checked == true && forth.checked != true) {

        generalArray = lowercases + number
        display(generalArray)
    }
    else if (event == true && first.checked != true && third.checked != true && forth.checked == true) {

        generalArray = lowercases + symbol
        display(generalArray)
    }
    if (event == true && first.checked == true && third.checked == true && forth.checked != true) {

        generalArray = UPPERCASE + number + lowercases
        display(generalArray)
    }
    else if (event == true && first.checked == true && third.checked != true && forth.checked == true) {

        generalArray = UPPERCASE + symbol + lowercases
        display(generalArray)
    }
    else if (event == true && first.checked != true && third.checked == true && forth.checked == true) {

        generalArray = number + symbol + lowercases
        display(generalArray)
    }
    else if (event != true && first.checked == true && third.checked == true && forth.checked == true) {

        generalArray = symbol + number + UPPERCASE
        display(generalArray)
    }
    else if (event != true && first.checked != true && third.checked == true && forth.checked == true) {

        generalArray = symbol + number
        display(generalArray)
    }
    else if (event != true && first.checked == true && third.checked != true && forth.checked == true) {

        generalArray = UPPERCASE + symbol
        display(generalArray)
    }
    else if (event != true && first.checked == true && third.checked == true && forth.checked != true) {

        generalArray = number + UPPERCASE
        display(generalArray)
    }
    else if (event != true && first.checked != true && third.checked != true && forth.checked == true) {

        generalArray = symbol
        display(generalArray)
    }
    else if (event != true && first.checked != true && third.checked != true && forth.checked != true) {
        first.checked = true
        generalArray = UPPERCASE
        display(generalArray)
    }
    else if (event != true && first.checked != true && third.checked == true && forth.checked != true) {

        generalArray = number
        display(generalArray)
    }
    else if (event != true && first.checked == true && third.checked != true && forth.checked != true) {

        generalArray = UPPERCASE
        display(generalArray)
    }
    if (event == true && first.checked == true && third.checked == true && forth.checked == true) {

        generalArray = number + symbol + lowercases + UPPERCASE
        display(generalArray)
    }
}
function numbers(ev) {
    let event = ev.target.checked
    console.log(event)

    if (event == true && second.checked != true && first.checked != true && forth.checked != true) {

        generalArray = number
        display(generalArray)
    }
    else if (event == true && second.checked == true && first.checked != true && forth.checked != true) {

        generalArray = number + lowercases
        display(generalArray)
    }
    else if (event == true && second.checked != true && first.checked == true && forth.checked != true) {

        generalArray = UPPERCASE + number
        display(generalArray)
    }
    else if (event == true && second.checked != true && first.checked != true && forth.checked == true) {

        generalArray = number + symbol
        display(generalArray)
    }
    if (event == true && second.checked == true && first.checked == true && forth.checked != true) {

        generalArray = UPPERCASE + lowercases + number
        display(generalArray)
    }
    else if (event == true && second.checked == true && first.checked != true && forth.checked == true) {

        generalArray = number + lowercases + symbol
        display(generalArray)
    }
    else if (event == true && second.checked != true && first.checked == true && forth.checked == true) {

        generalArray = UPPERCASE + number + symbol
        display(generalArray)
    }
    else if (event != true && second.checked == true && first.checked == true && forth.checked == true) {

        generalArray = lowercases + symbol + UPPERCASE
        display(generalArray)
    }
    else if (event != true && second.checked != true && first.checked == true && forth.checked == true) {

        generalArray = symbol + UPPERCASE
        display(generalArray)
    }
    else if (event != true && second.checked == true && first.checked != true && forth.checked == true) {

        generalArray = lowercases + symbol
        display(generalArray)
    }
    else if (event != true && second.checked == true && first.checked == true && forth.checked != true) {

        generalArray = UPPERCASE + lowercases
        display(generalArray)
    }
    else if (event != true && second.checked != true && first.checked != true && forth.checked == true) {

        generalArray = symbol
        display(generalArray)
    }
    else if (event != true && second.checked != true && first.checked != true && forth.checked != true) {
        forth.checked = true
        generalArray = symbol
        display(generalArray)
    }
    else if (event != true && second.checked != true && first.checked == true && forth.checked != true) {

        generalArray = UPPERCASE
        display(generalArray)
    }
    else if (event != true && second.checked == true && first.checked != true && forth.checked != true) {

        generalArray = lowercases
        display(generalArray)
    }
    if (event == true && second.checked == true && first.checked == true && forth.checked == true) {

        generalArray = UPPERCASE + number + symbol + lowercases
        display(generalArray)
    }

}
function symbols(ev) {
    let event = ev.target.checked
    console.log(event)

    if (event == true && second.checked != true && third.checked != true && first.checked != true) {

        generalArray = symbol
        display(generalArray)
    }
    else if (event == true && second.checked == true && third.checked != true && first.checked != true) {

        generalArray = symbol + lowercases
        display(generalArray)
    }
    else if (event == true && second.checked != true && third.checked == true && first.checked != true) {

        generalArray = symbol + number
        display(generalArray)
    }
    else if (event == true && second.checked != true && third.checked != true && first.checked == true) {

        generalArray = UPPERCASE + symbol
        display(generalArray)
    }
    if (event == true && second.checked == true && third.checked == true && first.checked != true) {

        generalArray = symbol + lowercases + number
        display(generalArray)
    }
    else if (event == true && second.checked == true && third.checked != true && first.checked == true) {

        generalArray = UPPERCASE + lowercases + symbol
        display(generalArray)
    }
    else if (event == true && second.checked != true && third.checked == true && first.checked == true) {

        generalArray = UPPERCASE + number + symbol
        display(generalArray)
    }
    else if (event != true && second.checked == true && third.checked == true && first.checked == true) {

        generalArray = lowercases + UPPERCASE + number
        display(generalArray)
    }
    else if (event != true && second.checked != true && third.checked == true && first.checked == true) {

        generalArray = UPPERCASE + number
        display(generalArray)
    }
    else if (event != true && second.checked != true && third.checked != true && first.checked != true) {
        third.checked = true
        generalArray = number
        display(generalArray)
    }
    else if (event != true && second.checked == true && third.checked != true && first.checked == true) {

        generalArray = lowercases + UPPERCASE
        display(generalArray)
    }
    else if (event != true && second.checked == true && third.checked == true && first.checked != true) {

        generalArray = number + lowercases
        display(generalArray)
    }
    else if (event != true && second.checked != true && third.checked != true && first.checked == true) {

        generalArray = UPPERCASE
        display(generalArray)
    }
    else if (event != true && second.checked != true && third.checked == true && first.checked != true) {

        generalArray = number
        display(generalArray)
    }
    else if (event != true && second.checked == true && third.checked != true && first.checked != true) {

        generalArray = lowercases
        display(generalArray)
    }
    if (event == true && second.checked == true && third.checked == true && first.checked == true) {

        generalArray = UPPERCASE + number + symbol + lowercases
        display(generalArray)
    }
}

function regenerate() {
    display(generalArray)
}

function lenght() {
    range.value = passwordLength.value
    display(generalArray)

}
function ranging() {
    passwordLength.value = range.value
    display(generalArray)

}
window.addEventListener("load", () => {
    passwordLength.value = 10;
    range.value = passwordLength.value
    authenticate.checked = true
    first.checked = true
    second.checked = true
    third.checked = true
    forth.checked = true

    generalArray = UPPERCASE + symbol + number + lowercases
    display(generalArray)
})
function Easytosay(ev) {
    let event = ev.target.checked
    if (toggle == "yes") {
        first.checked = true
        second.checked = true
        generalArray = UPPERCASE + lowercases
        display(generalArray)
        third.disabled = true
        forth.disabled = true
    }

}
function Easytoread(ev) {
    // let event = ev.target.checked

    generalArray = "ABCD1234EFGHOM@#%&LPQandb"
    display(generalArray)
    third.disabled = false;
    forth.disabled = false;

}
function Authenticate(ev) {
    // let event = ev.target.checked
    first.checked = true
    second.checked = true
    third.checked = true
    forth.checked = true
    generalArray = UPPERCASE + number + symbol + lowercases
    display(generalArray)
    third.disabled = false;
    forth.disabled = false;
}

function display(Value) {


    generalArray = ""
    let pass = ""
    // shuffle(generalArray) // console.log(generalArray)
    for (let index = 0; index < passwordLength.value; index++) {
        generalArray += Value

        let randomIndex = Math.floor(Math.random() * generalArray.length)
        pass += generalArray.substring(randomIndex, randomIndex + 1);



    }



    password.value = pass


}