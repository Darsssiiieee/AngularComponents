import { Component } from '@angular/core';

@Component({
  selector: 'app-shapeselector',
  templateUrl: './shapeselector.component.html',
  styleUrl: './shapeselector.component.css'
})
export class ShapeselectorComponent {
  shapes: string[] = ['Circle', 'Square', 'Triangle', 'Rectangle'];
  selectedShape: string = '';

  selectShape(shape: string) {
    this.selectedShape = shape;
  }
}
