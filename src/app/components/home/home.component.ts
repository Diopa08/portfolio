import { Component,AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const options = {
      strings: ['Web Developer', 'Front-End Developer', 'Apps Developer'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      backDelay: 1500
    };

    new Typed('.typed-text', options);
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/pdf/CV Dossou Persévérance.pdf';
    link.download = 'CV_Perseverance.pdf';
    link.click();
  }
  
}
