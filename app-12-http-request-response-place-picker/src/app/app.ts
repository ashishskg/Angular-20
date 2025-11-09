import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvailablePlaces } from './places/available-places/available-places';
import { UserPlaces } from './places/user-places/user-places';
import { ErrorService } from './shared/error-service';
import { ErrorModal } from './shared/modal/error-modal/error-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AvailablePlaces, UserPlaces, ErrorModal],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  private errorService = inject(ErrorService);
  protected readonly title = signal('app-12-http-request-response-place-picker');

  error = this.errorService.error;
}
