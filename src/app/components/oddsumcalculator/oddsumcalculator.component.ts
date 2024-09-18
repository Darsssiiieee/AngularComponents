import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  number: number | null = null;
  sumOfOdds: number | null = null;

  calculateSumOfOdds() {
    if (this.number !== null && this.number > 0) {
      let sum = 0;
      for (let i = 1; i <= this.number; i += 2) {
        sum += i;
      }
      this.sumOfOdds = sum;
    }
  }
}
