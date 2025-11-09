import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPreview } from './offer-preview';

describe('OfferPreview', () => {
  let component: OfferPreview;
  let fixture: ComponentFixture<OfferPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
