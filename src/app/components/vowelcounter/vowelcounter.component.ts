import { Component } from '@angular/core';

@Component({
  selector: 'app-vowelcounter',
  templateUrl: './vowelcounter.component.html',
  styleUrl: './vowelcounter.component.css'
})
export class VowelcounterComponent {
  text: string = '';
  vowelCount: number = 0;

  countVowels() {
    this.vowelCount = (this.text.match(/[aeiouAEIOU]/g) || []).length;
  }
}
