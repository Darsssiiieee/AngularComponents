import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  amount: number | null = null;
  formattedDollar: string | null = null;
  formattedPhp: string | null = null;
  formattedEuro: string | null = null;

  euroConversionRate = 0.92;
  phpConversionRate = 56;

  formatCurrency() {
    if (this.amount !== null) {
      this.formattedDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(this.amount);

      this.formattedPhp = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP'
      }).format(this.amount * this.phpConversionRate);

      this.formattedEuro = new Intl.NumberFormat('en-IE', {
        style: 'currency',
        currency: 'EUR'
      }).format(this.amount * this.euroConversionRate);
    }
  }
}
