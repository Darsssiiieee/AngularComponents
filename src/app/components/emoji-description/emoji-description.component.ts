import { Component } from '@angular/core';

@Component({
  selector: 'app-emoji-description',
  templateUrl: './emoji-description.component.html',
  styleUrl: './emoji-description.component.css'
})
export class EmojiDescriptionComponent {
  emojis = [
    { emoji: '😊', description: 'Happy' },
    { emoji: '😔', description: 'Sad' },
    { emoji: '😠', description: 'Angry' },
    { emoji: '😎', description: 'Cool' },
    { emoji: '😴', description: 'Sleepy' }
  ];

  selectedEmoji: string | null = null;
  selectedDescription: string | null = null;
  selectEmoji(emoji: string, description: string) {
    this.selectedEmoji = emoji;
    this.selectedDescription = description;
  }
}
