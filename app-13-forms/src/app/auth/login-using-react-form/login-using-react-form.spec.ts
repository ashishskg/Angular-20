import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUsingReactForm } from './login-using-react-form';

describe('LoginUsingReactForm', () => {
  let component: LoginUsingReactForm;
  let fixture: ComponentFixture<LoginUsingReactForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginUsingReactForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUsingReactForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
