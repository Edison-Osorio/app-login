import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { of } from "rxjs";
import { AuthService } from 'src/app/services/auth.service';
import { TranslatePipeMock, TranslateServiceStub } from 'src/app/shared/moks/tranlate.mock';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let authServiceSpy = jasmine.createSpyObj('AuthService', ['formSubmit'])
  authServiceSpy.loginUser = jasmine.createSpy().and.returnValue(of());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent, TranslatePipeMock],
      imports: [MatSnackBarModule],
      providers: [
        { provide: TranslateService, useValue: TranslateServiceStub },
        { provide: AuthService, useValue: authServiceSpy }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow user to log in', () => {
    const formData = {
      "email": "edisonosorio@gmail.com",
      "password": "edisonosorio"
    }
    component.form.setValue(formData)
    component.formSubmit();

    expect(authServiceSpy.loginUser).toHaveBeenCalledWith(formData)
  })

  it('should not allow user to log in', () => {
    const formData = {
      "email": "edisonosoriocom",
      "password": "edisonosorio"
    }
    component.form.setValue(formData)
    component.formSubmit();

    expect(component.form.invalid).toEqual(true)
    expect(authServiceSpy.loginUser).toHaveBeenCalledTimes(1)
  })


});
