import { Component } from '@angular/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrl: './translator.component.css'
})
export class TranslatorComponent {
  textInput: string = '';
  morseOutput: string = '';

  morseCodeMap: { [key: string]: string } = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....',
    '7': '--...', '8': '---..', '9': '----.', ' ': '/'
  };

  translateToMorse() {
    this.morseOutput = this.textInput.toUpperCase()
      .split('')
      .map(char => this.morseCodeMap[char] || '')
      .join(' ');
  }

  translateToText() {
    const reverseMorseMap = Object.fromEntries(
      Object.entries(this.morseCodeMap).map(([key, value]) => [value, key])
    );
    this.morseOutput = this.textInput.split(' ')
      .map(code => reverseMorseMap[code] || '')
      .join('');
  }
}
