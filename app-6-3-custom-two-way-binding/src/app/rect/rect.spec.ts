import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rect } from './rect';

describe('Rect', () => {
  let component: Rect;
  let fixture: ComponentFixture<Rect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
