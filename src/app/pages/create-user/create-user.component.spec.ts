import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import {
  TranslatePipeMock,
  TranslateServiceStub,
} from 'src/app/shared/moks/tranlate.mock';

import { CreateUserComponent } from './create-user.component';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUserComponent, TranslatePipeMock],
      imports: [MatSnackBarModule],
      providers: [
        {
          provide: TranslateService,
          useValue: TranslateServiceStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Forms is instance ', () => {
    expect(component.form).toBeDefined();
    expect(component.form.get('email')?.value).toBeDefined();
    expect(component.form.get('phone')?.value).toBeDefined();
    expect(component.form.get('password')?.value).toBeDefined();
    expect(component.form.get('confirmPassword')?.value).toBeDefined();
  });

  it('Initial form value of phone should be empty', () => {
    expect(component.phoneInput?.value).toBe('');
  });

  it('should required invald form', () => {
    component.form.setValue({
      email: 'edisonosorio',
      phone: '',
      password: '',
      confirmPassword: '',
    });
    expect(component.form.valid).toEqual(false);
  });
  it('should be valid if form value is valid', () => {
    component.form.setValue({
      email: 'edisonosorio@gmail.com',
      phone: '3108318685',
      password: 'edisonosorio',
      confirmPassword: 'edisonosorio',
    });
    expect(component.form.valid).toEqual(true);
  });

  it('Should required value of phone is equals to 10', () => {
    component.phoneInput?.setValue('1234567890');
    expect(component.phoneInput?.valid).toBeTruthy();
    component.phoneInput?.setValue('123456');
    expect(component.phoneInput?.valid).toBeFalse();
    component.phoneInput?.setValue('1234567891012');
    expect(component.phoneInput?.valid).toBeFalsy();
  });
});
