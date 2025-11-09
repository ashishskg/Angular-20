import { Component, model } from '@angular/core';

@Component({
  selector: 'app-rect',
  imports: [],
  templateUrl: './rect.html',
  styleUrl: './rect.css',
})
export class Rect {
  // Todo: Implement custom two-way binding

  size = model.required<{ width: string; height: string }>();

  onReset() {
    this.size.set({
      width: '200',
      height: '100',
    });
  }
}
