import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { CustomValidationService } from 'src/app/services/custom-validation.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly _verification: CustomValidationService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  initForm(): void {
    this.form = new FormGroup(
      {
        email: new FormControl('', {
          validators: [Validators.required, Validators.email],
        }),
        phone: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
      },
      {
        validators: [
          this._verification.passwordMatchValidator(
            'password',
            'confirmPassword'
          ),
          this._verification.phoneMaxLength('phone'),
        ],
      }
    );
  }

  passwordMatchValidator(g: AbstractControl) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  get emailInput(): AbstractControl | null {
    return this.form.get('email');
  }
  get phoneInput(): AbstractControl | null {
    return this.form.get('phone');
  }
  get passwordInput(): AbstractControl | null {
    return this.form.get('password');
  }
  get confirmPasswordInput(): AbstractControl | null {
    return this.form.get('confirmPassword');
  }
}
