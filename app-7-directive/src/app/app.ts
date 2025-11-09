import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from './auth/auth';
import { LearningResources } from './learning-resources/learning-resources';
import { AuthService } from './auth/auth.service';
import { AuthDirective } from './auth/auth-directive';
import { LogDirective } from './log-directive';

@Component({
  selector: 'app-root',
  imports: [Auth, LearningResources, AuthDirective, LogDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'app-7-directive';
  private authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
