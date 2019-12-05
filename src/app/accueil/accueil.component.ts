import { Component, OnInit } from '@angular/core';
import {Question} from '../quiz/question';
import {Router} from '@angular/router';
import {QuizComponent} from '../quiz/quiz.component';

@Component({
  selector: 'app-quizz',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  questions: Question[];
  iQuestion = 0;
  currentQuestion: Question;
  answer: string;
  found: boolean;
  hasNext = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  newGame() {
    this.router.navigate(['/quiz']);
  }
  loadNextQuestion() {
  }
  timeSpent() {
  }
  answerGiven(answer: string) {
  }
  showAnswer() {
  }
}
