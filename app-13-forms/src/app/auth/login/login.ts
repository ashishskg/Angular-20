import { NgFor } from '@angular/common';
import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private form = viewChild<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-login-form');

      if(savedForm) {
        const loadedFormData = JSON.parse(savedForm);
        console.log(loadedFormData.email)
        const savedEmail = loadedFormData.email;
        setTimeout(() => {
           this.form()?.controls['email'].setValue(savedEmail);
        }, 1);
       
      }



      const subscription = this.form()?.valueChanges?.subscribe({
          next: (value) => 
            window.localStorage.setItem(
              'saved-login-form',
              JSON.stringify({ email: value.email })
            ),
      });

      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

    onSubmit(formData: NgForm)  {

        if(formData.form.invalid) {
          return;
        }

      const enteredEmail = formData.form.value.email;
      const enteredPassword = formData.form.value.password;

      console.log(enteredEmail, enteredPassword);
      console.log(formData.form);

      formData.form.reset();

    }
}
