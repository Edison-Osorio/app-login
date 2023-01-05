import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../models/user';
import { UserLogin } from '../models/user-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly snack: MatSnackBar,
    private readonly router: Router
  ) {}

  registerUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  loginUser(user: UserLogin): void {
    const userLocalStorage: User = JSON.parse(
      localStorage.getItem('user') || '{}'
    );

    if (
      user.email === userLocalStorage.email &&
      user.password === userLocalStorage.password
    ) {
      this.router.navigate(['home']);
    } else {
      this.snack.open('Usuario o contraseña invalido', 'Aceptar', {
        duration: 20000,
      });
    }
  }
}
