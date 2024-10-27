import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ERROR_MESSAGES } from './error-messages';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.scss'],
  standalone: true,
  imports: [NgIf, NgForOf],
})
export class FormControlErrorComponent {
  @Input() control: AbstractControl | null = null;

  private errorMessages = ERROR_MESSAGES;

  shouldShowErrors(): boolean {
    return this.control
      ? this.control.invalid && (this.control.dirty || this.control.touched)
      : false;
  }

  getErrorMessages(): string[] {
    if (!this.control || !this.control.errors) {
      return [];
    }
    return Object.keys(this.control.errors).map(errorKey =>
      this.formatMessage(this.errorMessages[errorKey], this.control?.errors?.[errorKey])
    );
  }

  private formatMessage(message: string, params: ValidationErrors): string {
    return message.replace(/\{(\w+)}/g, (_, key) => params[key] || '');
  }
}
