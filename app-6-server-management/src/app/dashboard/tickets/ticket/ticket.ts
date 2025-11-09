import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewTicket } from '../new-ticket/new-ticket';
import { TicketModel } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [NewTicket],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
  @Input({ required: true }) data?: TicketModel;
  @Output() close = new EventEmitter();

  detailsVisible = false;

  onToggleDetails() {
    this.detailsVisible = !this.detailsVisible;
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
