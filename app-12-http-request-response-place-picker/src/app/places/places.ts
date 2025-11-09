import { Component, input, output } from '@angular/core';
import { PlacesModel } from './places-model.model';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [],
  templateUrl: './places.html',
  styleUrl: './places.css',
})
export class Places {
  places = input.required<PlacesModel[]>();
  selectPlace = output<PlacesModel>();

  onSelectPlace(place: PlacesModel) {
    this.selectPlace.emit(place);
  }
}
