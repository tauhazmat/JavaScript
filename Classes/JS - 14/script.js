function sendMessage () {
    let message = document.querySelectorAll("input");
    message.value = ""
    console.log(message[0].value);
    message[0].value = ""
}

function reset() {
    let reset = document.querySelectorAll("input");
}