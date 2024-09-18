import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarklist',
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})
export class BookmarklistComponent {
  urlInput: string = '';
  urlList: string[] = [];

  addUrl() {
    if (this.urlInput.trim()) {
      if (!this.urlInput.startsWith('http://') && !this.urlInput.startsWith('https://')) {
        this.urlInput = 'https://' + this.urlInput;
      }
      this.urlList.push(this.urlInput);
      this.urlInput = '';
    }
  }
}
