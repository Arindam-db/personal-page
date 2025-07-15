// script.js
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    document.getElementById('confirmation').innerText = `Thanks, ${name}. Your message has been sent!`;
    document.getElementById('name').value = "";
    document.getElementById('message').value = "";
}
