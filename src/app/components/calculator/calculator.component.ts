import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1: number | null = null;
  num2: number | null = null;
  result: number | null = null;

  add() {
    if (this.num1 !== null && this.num2 !== null) {
      this.result = this.num1 + this.num2;
    }
  }

  subtract() {
    if (this.num1 !== null && this.num2 !== null) {
      this.result = this.num1 - this.num2;
    }
  }

  multiply() {
    if (this.num1 !== null && this.num2 !== null) {
      this.result = this.num1 * this.num2;
    }
  }

  divide() {
    if (this.num1 !== null && this.num2 !== null) {
      if (this.num2 !== 0) {
        this.result = this.num1 / this.num2;
      } else {
        this.result = null;
        alert('Cannot divide by zero');
      }
    }
  }
}
