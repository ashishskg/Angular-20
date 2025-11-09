import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Rect } from './rect/rect';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Rect],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'app-6-3-custom-two-way-binding';
  rectSize = {
    width: '100',
    height: '100',
  };
}
