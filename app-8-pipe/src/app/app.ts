import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemparaturePipe } from '../temparature.pipe';
import { SortPipePipe } from './sort-pipe-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [DatePipe, DecimalPipe, TemparaturePipe, SortPipePipe],
})
export class App {
  protected title = 'app-8-pipe';
  currentDate = new Date();
  currentTemperatures = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
  }
}
