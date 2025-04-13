import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = 'dossouperseverance7@gmail.com';
  form = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    emailjs.send('service_12po3ra', 'template_pj1wve8', this.form, 'rw0dVCcuw5w6DJdMW')
      .then(() => {
        alert('Message envoyé ! ✅');
        this.form = { name: '', email: '', message: '' }; // reset form
      }, (error) => {
        console.error(error);
        alert('Erreur lors de l’envoi ❌');
      });
  }


}
