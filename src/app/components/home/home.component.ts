import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Vérifie si l'application est en cours d'exécution dans le navigateur
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: ['Web Developer', 'Front-End Developer', 'Apps Developer'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        backDelay: 1500
      };

      new Typed('.typed-text', options);
    }
  }

  downloadCV() {
    // Vérifie si l'application est en cours d'exécution dans le navigateur
    if (isPlatformBrowser(this.platformId)) {
      const link = document.createElement('a');
      link.href = 'assets/pdf/CV Dossou Persévérance.pdf';
      link.download = 'CV_Perseverance.pdf';
      link.click();
    }
  }
}
