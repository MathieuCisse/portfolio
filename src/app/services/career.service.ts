import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Career} from "../interfaces/career";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private httpClient : HttpClient) { }

  public getAllTraining() : Observable<Career[]> {
    return this.httpClient.get<Career[]>(environment.urlTraining);
  }

  public getAllExperience() : Observable<Career[]> {
    return this.httpClient.get<Career[]>(environment.urlExperience);
  }
}
