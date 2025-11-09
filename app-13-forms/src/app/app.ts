import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './auth/login/login';
import { LoginUsingReactForm } from './auth/login-using-react-form/login-using-react-form';
import { Signup } from './auth/signup/signup';

@Component({
  selector: 'app-root',
  // imports: [Login, LoginUsingReactForm],
    imports: [Signup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-13-forms');
}
