import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Prévision des impôts (Fiscathon)',
      description: 'Application web conçue pendant le Fiscathon pour la prévision intelligente des impôts.',
      technos: ['Next.js, API OpenAI '],
      image: 'assets/img/fiscathon-project.jpeg',
      link: 'https://github.com/Diopa08/Groupe1_Fiscathon_DGI'
    },
    {
      title: 'Site de ventes de chiens ',
      description: 'Gestion des ventes et mis en contact des clients avec entreprise.',
      technos: ['Angular, Spring Boot, MongoDB'],
      image: 'assets/img/vente-project.jpeg',
      link: 'https://github.com/Diopa08/Dog-s-lover'
    },
    {
      title: 'Gestion et location de voiture',
      description: 'Plateforme de pGestion et location de voiture.',
      technos: ['Laravel, HTML, CSS, JavaScript, mysql'],
      image: 'assets/img/location-project.jpeg',
      link: 'https://github.com/Diopa08/Gestion-de-voiture'
    }
  ];
}
