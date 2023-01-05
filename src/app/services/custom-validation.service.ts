import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {
  constructor() {}

  passwordMatchValidator(
    password: string,
    confirmPassword: string
  ): ValidatorFn {
    return (controls: AbstractControl) => {
      const passwordControl = controls.get(password);
      const confirmPasswordControl = controls.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl?.errors &&
        !confirmPasswordControl.errors['passwordMusmatch']
      ) {
        return null;
      }
      if (passwordControl?.value !== confirmPasswordControl?.value) {
        controls.get(confirmPassword)?.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        return null;
      }
    };
  }

  phoneMaxLength(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control) {
        return null;
      }
      if (control?.errors && !control.errors['maxlength10']) {
        return null;
      }
      if ((control?.value).length !== 10) {
        return { maxlength10: true };
      } else {
        return null;
      }
    };
  }
}
