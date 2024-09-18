import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css'
})
export class TemperatureconverterComponent {
  temperature: number | null = null;
  conversionType: string = 'celsiusToFahrenheit';
  convertedTemperature: number | null = null;

  convertTemperature() {
    if (this.temperature !== null) {
      if (this.conversionType === 'celsiusToFahrenheit') {
        this.convertedTemperature = (this.temperature * 9/5) + 32;
      } else if (this.conversionType === 'fahrenheitToCelsius') {
        this.convertedTemperature = (this.temperature - 32) * 5/9;
      }
    }
  }
}
