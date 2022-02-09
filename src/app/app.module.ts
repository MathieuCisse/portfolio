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
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ScrollAnimationDirective } from './directive/scroll-animation.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ScrollAnimationDirective
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'training', component: HomeComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'contact', component: HomeComponent},
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ]),
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
