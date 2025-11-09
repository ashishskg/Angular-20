import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Users } from './users/users';

@Component({
  selector: 'app-root',
  imports: [Header, Users, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-15-easytask-route-code-split-deferrable-views');
}
