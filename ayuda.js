 // Simular mensajes de aliento
 const mensajesDeAliento = [
    "Eres más fuerte de lo que crees.",
    "Siempre hay una luz al final del túnel.",
    "Tú importas. Nunca lo olvides.",
    "Cada día es una nueva oportunidad.",
    "No estás solo, siempre hay alguien que se preocupa por ti."
];

// Mostrar mensaje de aliento aleatorio al cargar la página
window.onload = function() {
    const mensajeElemento = document.querySelector('.encouragement-message');
    const mensajeAleatorio = mensajesDeAliento[Math.floor(Math.random() * mensajesDeAliento.length)];
    mensajeElemento.textContent = mensajeAleatorio;
}

// Función para abrir y cerrar el chat
const chatContainer = document.getElementById('chat-container');
const openChatButton = document.getElementById('open-chat');
const closeChatButton = document.getElementById('close-chat');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendMessageButton = document.getElementById('send-message');

// Mostrar el chat
openChatButton.addEventListener('click', () => {
    chatContainer.classList.remove('hidden');
    agregarMensajeBot("Hola, ¿en qué puedo ayudarte hoy?");
});

// Cerrar el chat
closeChatButton.addEventListener('click', () => {
    chatContainer.classList.add('hidden');
});

// Simular una conversación con el bot
const agregarMensajeUsuario = (mensaje) => {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = 'mensaje usuario';
    mensajeDiv.textContent = mensaje;
    chatMessages.appendChild(mensajeDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Para que el scroll esté siempre al final
};

const agregarMensajeBot = (mensaje) => {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = 'mensaje bot';
    mensajeDiv.textContent = mensaje;
    chatMessages.appendChild(mensajeDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
};

sendMessageButton.addEventListener('click', () => {
    const mensajeUsuario = chatInput.value.trim();
    if (mensajeUsuario) {
        agregarMensajeUsuario(mensajeUsuario);
        chatInput.value = ''; // Limpiar el input

        // Simular respuesta del bot después de 1 segundo
        setTimeout(() => {
            const respuestasBot = [
                "Gracias por tu mensaje. Estamos aquí para escucharte.",
                "¿Podrías decirme más sobre cómo te sientes?",
                "Recuerda que siempre hay una salida. No estás solo.",
                "Si sientes que necesitas hablar con un profesional, podemos ayudarte a conectarte."
            ];
            const respuestaAleatoria = respuestasBot[Math.floor(Math.random() * respuestasBot.length)];
            agregarMensajeBot(respuestaAleatoria);
        }, 1000);
    }
});

// También podemos enviar el mensaje presionando Enter
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessageButton.click();
    }
});