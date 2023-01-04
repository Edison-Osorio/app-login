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

  phoneMaxLength(phone: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const phoneControl = controls.get(phone);

      if (!phoneControl) {
        return null;
      }
      if (phoneControl?.errors && !phoneControl.errors['maxlength10']) {
        return null;
      }
      if (phoneControl.value > 10) {
        controls.get(phone)?.setErrors({ maxlength10: true });
        return { maxlength10: true };
      } else {
        return null;
      }
    };
  }
}
