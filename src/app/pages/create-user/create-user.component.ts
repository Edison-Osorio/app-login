import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidationService } from 'src/app/services/custom-validation.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  private readonly REGULAR_EXPRESION =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  form!: FormGroup;

  constructor(
    private readonly _authService: AuthService,
    private readonly _verification: CustomValidationService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  initForm(): void {
    this.form = new FormGroup(
      {
        email: new FormControl('', {
          validators: [
            Validators.required,
            Validators.pattern(this.REGULAR_EXPRESION),
          ],
        }),
        phone: new FormControl('', [
          Validators.required,
          this._verification.phoneMaxLength(),
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
        ],
      }
    );
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

  formSubmit(): void {
    console.log('this is form', this.form.value);
    this._authService.registerUser(this.form.value);
  }
}
