// Menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// TEST
// TEST
const questions = [
    "¿Se siente triste o deprimido?",
    "¿Ha perdido interés en actividades que solía disfrutar?",
    "¿Tiene dificultades para dormir por las noches?",
    "¿Se siente cansado o con falta de energía?",
    "¿Ha experimentado cambios en su apetito o peso?",
    "¿Siente que su vida no tiene sentido?",
    "¿Tiene dificultades para concentrarse?",
    "¿Se siente inquieto o ansioso?",
    "¿Ha notado cambios en su actividad física?",
    "¿Se siente culpable o sin valor?",
    "¿Tiene pensamientos de muerte o suicidio?",
    "¿Ha experimentado ataques de pánico?",
    "¿Se ha sentido irritable o de mal humor?",
    "¿Siente que no puede relajarse?",
    "¿Ha experimentado dolores físicos sin causa aparente?",
    "¿Se siente desconectado de los demás?",
    "¿Le cuesta tomar decisiones?",
    "¿Ha sentido que su autoestima ha disminuido?",
    "¿Siente que no puede enfrentar los problemas diarios?",
    "¿Ha experimentado alguna alteración en su ciclo menstrual?",
    "¿Se siente menos motivado que antes?"
];


const form = document.getElementById('test-form');
const resultDiv = document.getElementById('result');

// Generar preguntas dinámicamente
questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `
        <p>${index + 1}. ${question}</p>
        <div class="options">
            <label><input type="radio" name="q${index}" value="0" required> Nunca</label>
            <label><input type="radio" name="q${index}" value="1"> Algunos días</label>
            <label><input type="radio" name="q${index}" value="2"> Más de la mitad de los días</label>
            <label><input type="radio" name="q${index}" value="3"> Casi todos los días</label>
        </div>
    `;
    form.appendChild(questionDiv);
});

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Enviar respuestas';
form.appendChild(submitButton);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let total = 0;

    questions.forEach((_, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected) {
            total += parseInt(selected.value);
        }
    });

    let resultText = '';
    if (total <= 7) {
        resultText = 'Sin síntomas significativos de depresión';
    } else if (total <= 13) {
        resultText = 'Depresión leve';
    } else if (total <= 18) {
        resultText = 'Depresión moderada';
    } else if (total <= 25) {
        resultText = 'Depresión severa';
    } else {
        resultText = 'Depresión muy severa';
    }

    resultDiv.innerHTML = `
        <p>Su puntuación total es: ${total}</p>
        <p>Resultado: ${resultText}</p>
    `;

    if (total > 13) {
        resultDiv.innerHTML += `
            <p><strong>Advertencia:</strong> Su puntuación indica que podría estar experimentando síntomas de depresión. 
            Por favor, busque ayuda profesional.</p>
            <button id="contactButton">Contactar a un profesional</button>
        `;
    
        // Añadir el evento de clic justo después de crear el botón
        document.getElementById('contactButton').addEventListener('click', () => {
            window.location.href = 'contacto.html';
        });
    }

    // Mensaje de aliento si el resultado es positivo
    if (total > 13) {
        resultDiv.innerHTML += `
            <p><strong>Recuerde:</strong> No está solo, y siempre hay esperanza. Busque apoyo para sentirse mejor.</p>
        `;
    }
});


document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'contactButton') {
        window.location.href = 'contacto.html';
    }
});