import { Component } from '@angular/core';

@Component({
  selector: 'app-random-songs',
  templateUrl: './random-songs.component.html',
  styleUrl: './random-songs.component.css'
})
export class RandomSongsComponent {
  songs: string[] = [
    "Long Live - Taylor Swift",
    "Our dawn is hotter than day - Seventeen",
    "Neverending Story - Stray Kids",
    "Little Things - One Direction",
    "Down Bad - Taylor Swift",
    "Kidult - Seventeen",
    "Fools Gold - One Direction",
    "I Know Places - Taylor Swift",
    "First Snow - Exo",
    "Bambi - Beakhyun",
    "The Great War - Taylor Swift",
    "Lalali - Seventeen",
    "Youtiful - Stray Kids",
    "If I Could Fly - One Direction",
    "All Too Well (10 minutes version) - Taylor Swift",
    "Pretty U - Seventeen",
    "To.X - Taeyeon",
    "Begin Again - Taylor Swift",
    "Si Fueras Mia - D.O",
    "Tomorrow - Chanyeol"
  ];

  currentSong: string | null = null;
  displayRandomSong() {
    const randomIndex = Math.floor(Math.random() * this.songs.length);
    this.currentSong = this.songs[randomIndex];
  }
}
