import { Component, OnInit } from '@angular/core';
import {Skills} from "../../interfaces/skills";
import {SkillsService} from "../../services/skills.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skillsObservable$: Observable<Skills[]> = new Observable<Skills[]>();

  constructor(private skillsService : SkillsService) {}

  ngOnInit(): void {
    this.skillsObservable$ = this.skillsService.getAllSkills();
  }
}
