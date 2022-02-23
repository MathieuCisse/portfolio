import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Skills} from "../interfaces/skills";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private httpClient : HttpClient) { }

  public getAllSkills() : Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(environment.urlSkills);
  }

}
