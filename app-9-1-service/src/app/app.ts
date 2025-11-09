import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'app-9-1-service';
}
