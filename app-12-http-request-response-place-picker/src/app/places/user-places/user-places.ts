import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { PlacesContainer } from '../places-container/places-container';
import { Places } from '../places';
import { PlacesModel } from '../places-model.model';
import { PlacesService } from '../places-service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  imports: [PlacesContainer, Places],
  templateUrl: './user-places.html',
  styleUrl: './user-places.css',
})
export class UserPlaces implements OnInit {
  isFetching = signal(false);
  error = signal('');
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);
  places = this.placesService.loadedUserPlaces;

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.placesService.loadUserPlaces()
      .subscribe({
        error: (error: Error) => {
          this.error.set(error.message);
        },
        complete: () => {
          this.isFetching.set(false);
        },
      });

      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      });
  }

  onRemovePlace(place: PlacesModel) {
    const subscription = this.placesService.removeUserPlace(place).subscribe();
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

}
