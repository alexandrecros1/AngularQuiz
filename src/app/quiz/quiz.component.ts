import { Component, OnInit } from '@angular/core';
import questions from '../../../questions.json';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  secondes = 10;
  intervalle;
  constructor() {console.log(questions);
  }

  ngOnInit() {
    this.RemainingTime();
  }
  RemainingTime() {
    this.intervalle = setInterval(() => {
      if (this.secondes > 0) {
        this.secondes--;
      } else if (this.secondes === 0) {
        this.secondes = 0;
      } else {
        this.secondes = 10;
      }
    }, 1000);
    return this.secondes;
  }

}
