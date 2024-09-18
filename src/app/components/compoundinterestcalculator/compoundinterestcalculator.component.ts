import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  frequency: number | null = null;
  compoundInterest: number | null = null;

  calculateCompoundInterest() {
    if (this.principal !== null && this.rate !== null && this.time !== null && this.frequency !== null) {
      const P = this.principal;
      const r = this.rate / 100;
      const t = this.time;
      const n = this.frequency;
      this.compoundInterest = P * Math.pow((1 + r / n), n * t) - P;
    }
  }

}
