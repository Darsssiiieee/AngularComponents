import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = '';
  validationMessage: string | null = null;
  private minLength: number = 6;
  private maxLength: number = 20;
  private regex: RegExp = /^[a-zA-Z0-9_]*$/;

  validateUsername() {
    if (!this.username) {
      this.validationMessage = 'Username is required.';
    } else if (this.username.length < this.minLength) {
      this.validationMessage = `Username must be at least ${this.minLength} characters long.`;
    } else if (this.username.length > this.maxLength) {
      this.validationMessage = `Username cannot exceed ${this.maxLength} characters.`;
    } else if (!this.regex.test(this.username)) {
      this.validationMessage = 'Username can only contain letters, numbers, and underscores.';
    } else {
      this.validationMessage = 'Username is valid!';
    }
  }
}
