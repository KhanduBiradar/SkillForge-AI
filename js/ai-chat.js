const chatBox = document.getElementById("chatBox");

async function sendMessage() {

    const input = document.getElementById("message");
    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // User Message
    chatBox.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;

    try {

        const response = await fetch("http://127.0.0.1:5000/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });

        const result = await response.json();

        // AI Message
        chatBox.innerHTML += `
            <div class="bot-message">
                ${result.reply}
            </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {

        console.error(error);

        chatBox.innerHTML += `
            <div class="bot-message">
                ⚠️ Unable to connect to AI server.
            </div>
        `;

    }

}