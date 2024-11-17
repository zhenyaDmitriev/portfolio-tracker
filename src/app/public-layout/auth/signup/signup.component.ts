import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { SignUpFormValues } from '../interface';
import { AuthService } from '../../../core/auth/auth.service';
import { TokenService } from '../../../core/auth/token.service';
import { IAuthRequest } from '../../../core/auth/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnDestroy {
  signUpForm: FormGroup<Record<keyof SignUpFormValues, FormControl>>;

  protected readonly authService = inject(AuthService);
  private readonly tokenService = inject(TokenService);
  private readonly destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(126)]],
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.register(this.signUpForm.getRawValue());
      console.log('Form submitted:', this.signUpForm.value);
      console.log('Form submitted:', this.signUpForm.getRawValue());
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

  register(userData: IAuthRequest): Subscription {
    return this.authService
      .register(userData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          console.log('registration response: ', response);

          // const data = response.data;
          // if (data) {
          //   this.tokenService.setToken(data.token);
          //   this.router.navigate([PrivateRoutes.Dashboard]).then();
          // }
        },
        error: error => {
          console.log('registration error: ', error);
        },
        complete: () => {
          console.log('registration is completed!');
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
