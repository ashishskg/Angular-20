import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Control } from '../../../shared/control/control';
import { Button } from '../../../shared/button/button';
import { FormsModule } from '@angular/forms';
import { tick } from '@angular/core/testing';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-new-ticket',
  imports: [Control, Button, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  @Output() add = new EventEmitter<{ title: string; text: string }>();

  enteredTitle = '';
  enteredText = '';

  ngOnInit(): void {
    console.log('OnInit()');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit()');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    // console.dir(titleElement);
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
