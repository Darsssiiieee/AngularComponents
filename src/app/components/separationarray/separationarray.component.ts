import { Component } from '@angular/core';

@Component({
  selector: 'app-separationarray',
  templateUrl: './separationarray.component.html',
  styleUrl: './separationarray.component.css'
})
export class SeparationarrayComponent {
  arrayInput: string = '';
  separatedArray: string[] = [];

  separateArray() {
    this.separatedArray = this.arrayInput.split(',').map(item => item.trim()).reverse();
  }
}
