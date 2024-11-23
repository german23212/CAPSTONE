import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage {
  messages = [
    { text: 'Hola, soy tu asistente virtual de Safe City. Selecciona una opción escribiendo el número correspondiente:', sender: 'bot' },
  ];

  userInput: string = '';

  sendMessage() {
    const option = parseInt(this.userInput, 10);

    // Add user message
    if (!isNaN(option)) {
      this.messages.push({ text: this.userInput, sender: 'user' });
    } else {
      this.messages.push({ text: 'Por favor, escribe un número válido.', sender: 'bot' });
      this.userInput = '';
      return;
    }

    // Responses
    const responses: { [key: number]: string } = {
      1: 'Para reportar un incidente, ve a la sección "Reportar Incidente" en el menú principal.',
      2: 'Incluye detalles como fecha, hora, ubicación y descripción del incidente.',
      3: 'Refuerza cerraduras, instala cámaras y mantén buena iluminación en el exterior.',
      4: 'Llama a las autoridades locales y sigue los protocolos de seguridad establecidos.',
      5: 'Ve a la sección "Iniciar Sesión" y selecciona "Registrarme".',
    };

    const response = responses[option] || 'Opción no válida. Por favor, selecciona un número entre 1 y 5.';
    this.messages.push({ text: response, sender: 'bot' });

    // Clear input
    this.userInput = '';
  }
}
