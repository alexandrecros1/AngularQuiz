import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private score: number;
  private nbQuestions: string;
  get getScore(): number {
    return this.score;
  }
  set setScore(newScore: number) {
    this.score = newScore;
  }
  get getNbQuestions(): string {
    return this.nbQuestions;
  }
  constructor() { }
  buildNewQuiz() {
  }
  shuffle(a: any[]): any[] {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a [i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  findPropositions() {
  }
}
