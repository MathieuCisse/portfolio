import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'training', component: HomeComponent },
      {path: 'skills', component: SkillsComponent },
      {path: 'contact', component: HomeComponent },
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
