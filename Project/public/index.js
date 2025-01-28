import { io } from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js";

const socket = io();

//video
const numUsers = document.getElementById('num');

socket.on('user count', (users) => {
    numUsers.textContent = users;
})

async function init() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
        });
        startWebCamera(stream);
    } catch (error) {
        console.log("Error retrieving media device.");
        console.log(error);
    }
}

function startWebCamera(stream) {
    video.srcObject = stream;
    window.stream = stream;
}

init();

//capture photo

// const webCamElement = document.getElementById("webcam");
// const canvasElement = document.getElementById("canvas");
// const webcam =  new Webcam(webCamElement, 'user', canvasElement);
// webcam.start();

// function takeSnapshot(){
//     let picture = webcam.snap();
//     document.getElementById('snapshots').appendChild(picture);
//     document.querySelector("a").href = picture;
// }
// console.log("success");

// const socket = io();
// const form = document.getElementById('form');
// const input = document.getElementById('input');
// const messages = document.getElementById('messages');

// form.addEventListener('submit', (e) => {
// e.preventDefault();
// if (input.value) {
//     socket.emit('chat message', input.value);
//     input.value = '';
// }
// });

// socket.on('chat message', (msg) => {
// const item = document.createElement('li');
// item.textContent = msg;
// messages.appendChild(item);
// window.scrollTo(0, document.body.scrollHeight);
// });

// const toggleButton = document.getElementById('toggle-btn');

// toggleButton.addEventListener('click', (e) => {
// e.preventDefault();
// if (socket.connected) {
//     toggleButton.innerText = 'Connect';
//     socket.disconnect();
// } else {
//     toggleButton.innerText = 'Disconnect';
//     socket.connect();
// }
// });
