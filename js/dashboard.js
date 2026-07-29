const name = localStorage.getItem("fullname");

document.getElementById("welcomeUser").innerHTML =
"Welcome, " + name + " 👋";
function sendMessage() {

    const input = document.getElementById("userMessage");

    const chat = document.getElementById("chatMessages");

    if (input.value.trim() === "") return;

    chat.innerHTML +=
        `<p><b>You:</b> ${input.value}</p>`;

    chat.innerHTML +=
        `<p><b>AI:</b> This feature will be connected to AI soon.</p>`;

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}