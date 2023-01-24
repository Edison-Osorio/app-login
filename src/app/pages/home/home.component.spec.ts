import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Routes } from 'src/app/models/routes';
import {
  TranslatePipeMock,
  TranslateServiceStub,
} from 'src/app/shared/moks/tranlate.mock';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  routerSpy.navigate = jasmine.createSpy();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, TranslatePipeMock],
      providers: [
        {
          provide: TranslateService,
          useValue: TranslateServiceStub,
        },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('routingAcount() que redirija a Acount', () => {
    component.routingAcount();
    const REDIRECTO = [Routes.ACOUNT];
    expect(routerSpy.navigate).toHaveBeenCalledWith(REDIRECTO);
  });

  it('routingInvioce()', () => {
    component.routingInvioce();
    const REDIRECTO = [Routes.INVIOCE];
    expect(routerSpy.navigate).toHaveBeenCalledWith(REDIRECTO);
  });
});
