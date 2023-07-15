import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  enviarMensaje() {
    const telefono = '3165510733'; // Número de teléfono de destino
    const mensaje = '¡Hola, vi tu perfil y me pareció interesante'; // Mensaje a enviar
    
    // Construir la URL de WhatsApp con los parámetros del número de teléfono y mensaje
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
    
    // Abrir la URL en una nueva pestaña del navegador
    window.open(url);
  }

}
