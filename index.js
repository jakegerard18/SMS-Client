const xhr = new XMLHttpRequest()

let recipient;
let message;
let data;

document.querySelector('#submit-btn').addEventListener('click',  getData)

function getData(e) {
    recipient = document.querySelector('#recipientPhoneNumber').value;
    message = document.querySelector('#message').value;

    data = {
        recipient: recipient,
        message: message
    };

    
    xhr.open('POST', 'http://localhost:3000/', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.onload = () => {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }

    e.preventDefault()
}







