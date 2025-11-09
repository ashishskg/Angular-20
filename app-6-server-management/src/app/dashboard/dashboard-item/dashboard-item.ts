import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css',
})
export class DashboardItem {
  @Input({ required: true }) image!: { src: string; alt: string };
  @Input({ required: true }) title!: string;
}
