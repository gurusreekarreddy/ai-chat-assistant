document.addEventListener("DOMContentLoaded", function() {
  const chatBox = document.getElementById("chatBox");
  const userInput = document.getElementById("userInput");

  function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    const userMessage = document.createElement("div");
    userMessage.textContent = "You: " + message;
    chatBox.appendChild(userMessage);

    // Clear input
    userInput.value = "";

    // Here, you would typically send the message to OpenAI API
    const botMessage = document.createElement("div");
    botMessage.textContent = "Bot: (response here)";
    chatBox.appendChild(botMessage);

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
});
