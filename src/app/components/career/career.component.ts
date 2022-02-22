import { Component, OnInit } from '@angular/core';
import {Skills} from "../../interfaces/skills";
import {Career} from "../../interfaces/career";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CareerComponent implements OnInit {

  public training: Array<Career> = [];
  public experience: Array<Career> = [];
  public displayedColumns: string[] = [];
  public expandedElement: Career | null = null;


  constructor() {}

  ngOnInit(): void {
    this.training = [
      {
        career: "LP Conception et développement d’applications distribuées",
        place: "IUT Robert Schuman",
        date: "2020 - 2021",
        city: "Illkirch-Graffenstaden",
        details: "Cette formation d'une année est axée sur la conception et le développement d'applications web en environnement distribué. Elle vise à développer vos qualités d'adaptabilité aux technologies innovantes de l'information, votre capacité à communiquer, à vous intégrer dans un projet d'entreprise et à faciliter votre insertion professionnelle. L'objectif est de former des développeurs à même d'appréhender toutes les étapes de la création d'applications distribuées modernes (analyse, conception, développement, déploiement). Des techniques, langages et outils propres au développement d'un service web, d'un client mobile et d'un client web sont abordés. Les étudiants acquièrent également des compétences en travail d'équipe au travers de l'expérimentation de méthodes de gestion de projet."
      },
      {
        career: "DUT Informatique (Développement)",
        place: "IUT Robert Schuman",
        date: "2018 - 2020",
        city: "Illkirch-Graffenstaden",
        details: "Ce DUT forme des informaticiens généralistes capables de répondre aux besoins des entreprises en matière de conception et de réalisation de programmes informatiques, d'administration de réseaux, de gestion de bases de données ou d'assistance technique.",
        activities: [
          'Programmation Orientée Objet avancée : Java (Design Pattern)',
          'Algorithmique avancée : Récursivité/Implémentation Pile/Liste/Arbin',
          'Langages Web côté client (HTML, CSS, JS) et côté serveur (Bases PHP et Framework Laravel)',
          'Systèmes Informatiques / Services réseaux',
          'Conception API Côté Serveur/Client (NodeJS/React sur JavaScript)',
          'Programmation Mobile (Java sous Android Studio)',
          'Projet : Développement Jeu sérieux – Gestion de projet (C# .NET sur Visual Studio)',
          'Projet : Dévéloppement Jeu sérieux sur une étude sur l’éducation des étudiants (C# .NET sur Visual Studio)',
          'Projet : Développement Jeu sérieux – Développement Simulateur avec les concepts de Design Pattern (Java sur Oracle JDeveloper)',
          'Projet : Conception d’une page Web (HTML/PHP avec le framework Laravel)',
          'Projet : Développement Jeu sérieux – Gestion de projet (C# .NET sur Visual Studio)',
          'Projet : Développement Jeu en réseaux (Langage C)'
        ]
      },
      {
        career: "Baccalauréat Scientifique Spécialité Physique-Chimie",
        place: "Lycée Henri Meck",
        date: "2015 - 2018",
        city: "Molsheim",
        details: "En France, le baccalauréat scientifique (abrégé en bac S) est l'une des trois anciennes séries de la voie générale du lycée – les deux autres étant les baccalauréats littéraire (L) et économique et social (ES). Il succède aux baccalauréats des séries C, D, D', et E, succédant eux-mêmes aux baccalauréats mathématiques élémentaires et sciences expérimentales."
      }
    ];
    this.displayedColumns = ['career', 'place', 'date', 'city', 'details'];
  }
}
