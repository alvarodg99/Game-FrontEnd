

const nick = document.getElementById("nick");
const size = document.getElementById("size");
const form = document.getElementById("form");
const button = document.getElementById("PlayButton");
const mistake = document.getElementById("mistake");


function checkForm(event) {
    if (nick.value.length == "0") {
        console.log("you have tu put your nickname");
        mistake.innerHTML = "You have tu put yout nickname"
        event.preventDefault();
        return false;
    }
    else if (size.value == "0") {
        mistake.innerHTML = "you have to select the size of the game map";
        console.log(nick.value + "you have to select the size of the game map");
        event.preventDefault();
        return false;
    }
    return true;
}

form.addEventListener("submit", checkForm);



