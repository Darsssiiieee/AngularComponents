import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    "The only limit to our realization of tomorrow will be our doubts of today. — Franklin D. Roosevelt",
    
    "In the end, we will remember not the words of our enemies, but the silence of our friends. — Martin Luther King Jr.",
    
    "Life is either a daring adventure or nothing at all. — Helen Keller",
    
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    
    "Do not wait to strike till the iron is hot, but make it hot by striking. — William Butler Yeats"
  ];

  selectedQuote: string | null = null;

  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.selectedQuote = this.quotes[randomIndex];
  }
}
