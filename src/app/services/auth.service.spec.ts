import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from './auth.service';
import { User } from '../models/user';
import { UserLogin } from '../models/user-login';
import { Router } from '@angular/router';
import { Routes } from '../models/routes';

describe('AuthService', () => {
  let service: AuthService;

  const routerSpy = jasmine.createSpyObj(Router, ['navigate']);
  routerSpy.navigate = jasmine.createSpy().and.returnValue(true);

  const snackSpy = jasmine.createSpyObj(MatSnackBar, ['open']);
  snackSpy.open = jasmine.createSpy().and.returnValue(true);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: MatSnackBar, useValue: snackSpy },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('registerUser(user: User) works correctly', () => {
    const setItem = spyOn(localStorage, 'setItem').and.callThrough();

    const user: User = {
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    };
    service.registerUser(user);

    expect(setItem).toHaveBeenCalled();
  });

  it('loginUser(user: UserLogin) works correctly', () => {
    const getItem = spyOn(localStorage, 'getItem').and.callFake(
      () => '{"email":"edison@gmail.com", "password":"edisonosorio"}'
    );

    const user: UserLogin = {
      email: 'edison@gmail.com',
      password: 'edisonosorio',
    };

    service.loginUser(user);

    expect(getItem).toHaveBeenCalled();

    expect(routerSpy.navigate).toHaveBeenCalledWith([Routes.HOME]);
  });

  it('loginUser(user: UserLogin) invalid flow works', () => {
    const getItem = spyOn(localStorage, 'getItem').and.callFake(
      () => '{"email":"edison@gmail.com", "password":"edisonosorio"}'
    );

    const user: UserLogin = {
      email: 'edison@gmail.com',
      password: 'edison',
    };

    service.loginUser(user);

    expect(snackSpy.open).toHaveBeenCalled();
  });
});
