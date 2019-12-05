import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { QuizComponent } from './quiz/quiz.component';

const appRoutes: Routes = [
  { path: 'home', component: AccueilComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
