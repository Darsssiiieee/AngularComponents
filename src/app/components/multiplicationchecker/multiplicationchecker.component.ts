import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent {
  number: number | null = null;
  divisor: number | null = null;
  isMultiple: boolean | null = null;
  resultMessage: string = '';

  checkMultiple() {
    if (this.number !== null && this.divisor !== null) {
      if (this.divisor === 0) {
        this.resultMessage = 'Divisor cannot be zero.';
        this.isMultiple = null;
      } else {
        this.isMultiple = this.number % this.divisor === 0;
        this.resultMessage = this.isMultiple
          ? `${this.number} is a multiple of ${this.divisor}.`
          : `${this.number} is not a multiple of ${this.divisor}.`;
      }
    }
  }
}
