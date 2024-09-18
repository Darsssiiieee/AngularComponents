import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  maxNumber: number = 100;
  targetNumber!: number; 
  userGuess: number | null = null;
  message: string | null = null;

  constructor() {
    this.resetGame();
  }

  checkGuess() {
    if (this.userGuess === this.targetNumber) {
      this.message = 'Congratulations! You guessed the number!';
    } else if (this.userGuess! < this.targetNumber) {
      this.message = 'Too low! Try again.';
    } else if (this.userGuess! > this.targetNumber) {
      this.message = 'Too high! Try again.';
    }
  }

  resetGame() {
    this.targetNumber = Math.floor(Math.random() * this.maxNumber) + 1;
    this.userGuess = null;
    this.message = null;
  }
}
