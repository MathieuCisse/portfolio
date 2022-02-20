import { Component, OnInit } from '@angular/core';
import {Skills} from "../../interfaces/skills";
import {Career} from "../../interfaces/career";

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  public training: Array<Career> = [];
  public experience: Array<Career> = [];
  public displayedColumns: string[] = [];


  constructor() {}

  ngOnInit(): void {
    this.training = [
      {career: "LP Conception et développement d’applications distribuées", place: "IUT Robert Schuman", date: "2020 - 2021", city: "Illkirch-Graffenstaden"},
      {career: "DUT Informatique (Développement)", place: "IUT Robert Schuman", date: "2018 - 2020", city: "Illkirch-Graffenstaden"},
      {career: "Baccalauréat Scientifique Spécialité Physique-Chimie", place: "Lycée Henri Meck", date: "2015 - 2018", city: "Molsheim"}
    ];
    this.experience = [
    ];
    this.displayedColumns = ['career', 'place', 'date', 'city'];
  }
}
