import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {
  name: string = '';
  uppercaseName: string | null = null;

  convertToUppercase() {
    this.uppercaseName = this.name.toUpperCase();
  }
}
