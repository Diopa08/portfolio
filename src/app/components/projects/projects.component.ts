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

  projects: { title: string; description: string; technos: string[]; image?: string; icon?: string; link?: string }[] = [
    {
      title: 'formlang – de l’automate fini à la machine universelle',
      description: 'Bibliothèque Python unique implémentant AFD/AFN, automates à pile, automates d’arbres et machine de Turing universelle, réutilisée dans 4 applications (Shield, Morpho, HashCons, MTU) sans jamais réécrire les algorithmes. Preuves théoriques et tests pytest.',
      technos: ['Python', 'pytest', 'Théorie des langages'],
      icon: 'fa-solid fa-diagram-project',
      link: 'https://github.com/Diopa08/dossou_perseverance_agbogba_silas_formlang-'
    },
    {
      title: 'Solveur MPVRP-CC (optimisation)',
      description: 'Solveur MILP pour un problème de tournées de véhicules multi-produits avec coûts de changement de produit, testé sur des instances de petite à grande taille et génération de solutions au format officiel.',
      technos: ['Python', 'OR-Tools', 'MILP'],
      icon: 'fa-solid fa-route',
      link: 'https://github.com/Diopa08/MPVRP'
    },
    {
      title: 'Assistant Bible – recherche sémantique',
      description: 'Application de recherche de versets par description grâce aux embeddings de phrases (similarité cosinus), avec reconnaissance vocale et synthèse vocale, et une API FastAPI/MongoDB.',
      technos: ['Python', 'Sentence-Transformers', 'FastAPI', 'MongoDB'],
      icon: 'fa-solid fa-book-open',
      link: 'https://github.com/Diopa08/projet-bible'
    },
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
