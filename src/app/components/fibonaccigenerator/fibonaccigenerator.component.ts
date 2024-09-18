import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonaccigeneratorComponent {
  n: number | null = null;
  fibonacciSequence: number[] = [];

  generateFibonacci() {
    if (this.n !== null && this.n > 0) {
      const sequence = [0, 1];
      while (sequence.length < this.n) {
        const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextNumber);
      }
      this.fibonacciSequence = sequence.slice(0, this.n);
    }
  }
}
