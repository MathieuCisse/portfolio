import { Component, OnInit } from '@angular/core';
import {Skills} from "../../interfaces/skills";
import {Career} from "../../interfaces/career";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Observable} from "rxjs";
import {CareerService} from "../../services/career.service";
import {SkillsService} from "../../services/skills.service";

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

  public trainingObservable$: Observable<Career[]> = new Observable<Career[]>();
  public experienceObservable$: Observable<Career[]> = new Observable<Career[]>();
  public displayedColumns: string[] = [];
  public expandedElement: Career | null = null;

  constructor(private careerService : CareerService) {}

  ngOnInit(): void {
    this.displayedColumns = ['career', 'place', 'date', 'city', 'details'];
    this.trainingObservable$ = this.careerService.getAllTraining();
    this.experienceObservable$ = this.careerService.getAllExperience();
  }
}
