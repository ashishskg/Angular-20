import {
  AfterContentInit,
  afterNextRender,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    // Add the control class to all app-control selector
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class Control implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }

  constructor() {
    // afterRender(() => {
    //   console.log('After Render');
    // });
    // afterNextRender(() => {
    //   console.log('After Next Render');
    // });
  }

  @Input({ required: true })
  label!: string;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()');
  }

  // Host Elements Programmatically
  private el = inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  onClick() {
    console.log('Clicked!');
    //console.log(this.el);
    console.log(this.control);
  }
}
function afterRender(arg0: () => void) {
  throw new Error('Function not implemented.');
}
