import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  
  activeSection: string = 'skills';
  activeTimeline: string = 'experience';

  skills = [
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  ];

  tools = [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Postman', icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
    { name: 'ChatGPT', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
    { name: 'Slack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
    { name: 'Google Meet', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Google_Meet_logo_%282020%29.svg' },
    { name: 'Discord', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    { name: 'Zoom', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg' },
    { name: 'Google Drive', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png' },
    { name: 'Terminal', icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828911.png' }
  ];

  experiences = [
    {
      title: 'Stage - Ingénieur Logiciel (IWAJU TECH)',
      date: 'Mars - Juin 2024',
      desc: 'Développement logiciel avec Spring Boot, web avec Angular, base NoSQL (MongoDB) & ChatBot Langchain.'
    },
    {
      title: 'Hackathon INE-GDZHIAO',
      date: 'Février 2024',
      desc: 'Conception d’une solution innovante pour le suivi des inondations et zones humides.'
    },
    {
      title: 'FISCATHON – Gagnante',
      date: 'Novembre 2023',
      desc: 'Application web de prévision d’impôts, membre de l’équipe gagnante EFÂ.'
    },
    {
      title: 'Stage Laravel (IWAJU TECH)',
      date: 'Août - Septembre 2023',
      desc: 'Développement avec Laravel, HTML, CSS, Design Web.'
    },
    {
      title: 'Bootcamp Africa Tech Up Tour',
      date: 'Septembre 2024',
      desc: 'Projet data-driven pour promouvoir le tourisme béninois.'
    }
  ];

  education = [
    {
      ecole: 'IFRI',
      title: 'Licence en Génie Logiciel ',
      date: '2021 - 2024',
      desc: 'Formation en développement full stack, base de données, programmation et projets.'
    },
    {
      ecole: 'Africa Tech Up TOUR',
      title: 'Certificat Data Engineer ',
      date: '2024',
      desc: 'Initiation au traitement de données, collecte & exploitation de données touristiques.'
    },
    {
      ecole: 'Collège catholique pierre joseph de cloriviere',
      title: 'Baccalauréat Scientifique serie C',
      date: '2021',
      desc: ''
    
    }
    ,
    {
      ecole: 'Collège catholique pierre joseph de cloriviere',
      title: 'BEPC Moderne Court',
      date: '2018',
      desc: ''
    
    }
    ,
    {
      ecole: 'Complexe scolaire saint augustin le brave ',
      title: 'CEP ',
      date: '2014',
      desc: ''
    
    }
  ];
}
