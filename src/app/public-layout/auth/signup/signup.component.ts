import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpFormValues } from '../interface';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signUpForm: FormGroup<Record<keyof SignUpFormValues, FormControl>>;
  protected readonly authService = inject(AuthService);

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(126)]],
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.authService.register(this.signUpForm.getRawValue());
    } else {
      Object.keys(this.signUpForm.controls).forEach(key => {
        const control = this.signUpForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
          control.updateValueAndValidity();
        }
      });
    }
  }
}
