import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Routes } from '../../models/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly _authService: AuthService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  routerSinUp(): void {
    this.router.navigate([Routes.CREATE_USER]);
  }

  formSubmit() {
    this._authService.loginUser(this.form.value);
  }
}
