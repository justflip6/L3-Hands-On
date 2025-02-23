const messages = [
    "Hi! I am Justin James D. Lozada!",
    "I am a BSIT student!",
    "I love playing volleyball!",
    "I miss her!",
    "I enjoy coding!"
];

let index = 0;

function changeText() {
    const paragraph = document.getElementById("message");
    
    index = (index + 1) % messages.length;
    paragraph.innerText = messages[index];
}
