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
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';
import {MatTableModule} from '@angular/material/table';
import { CareerComponent } from './components/career/career.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { AboutmeComponent } from './components/aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ScrollAnimationDirective,
    CareerComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'career', component: CareerComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'aboutme', component: AboutmeComponent},
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
