import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  name: string = '';
  email: string = '';

  submittedData: any = null;

  onSubmit() {
    this.submittedData = {
      name: this.name,
      email: this.email
    };
  }
}
