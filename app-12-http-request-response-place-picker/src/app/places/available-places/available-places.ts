import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { PlacesModel } from '../places-model.model';
import { Places } from '../places';
import { PlacesContainer } from '../places-container/places-container';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places-service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  imports: [Places, PlacesContainer],
  templateUrl: './available-places.html',
  styleUrl: './available-places.css',
})
export class AvailablePlaces implements OnInit  {
    places = signal<PlacesModel[] | undefined>(undefined);
    isFetching = signal(false);
    error = signal('');
    private placesService = inject(PlacesService);
    private destoryRef = inject(DestroyRef);

    ngOnInit() {
      this.isFetching.set(true);
      const subscription = this.placesService.loadAvailablePlaces().subscribe({
          next:(places) => {
            console.log(places);
            this.places.set(places);
          },
          error: (error: Error) => {
            this.error.set(error.message);
          },
          complete: () => {
            this.isFetching.set(false);
          }
        });

        this.destoryRef.onDestroy(() => {
            subscription.unsubscribe();
        });
    }

    onSelectPlace(selectedPlace: PlacesModel) {
      const subscription = this.placesService.addPlaceToUserPlaces(selectedPlace).subscribe({
        next: (resData) => console.log(resData),
      });

      this.destoryRef.onDestroy(() => {
        subscription.unsubscribe();
      })
    }
}
