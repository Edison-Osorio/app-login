import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipeMock, TranslateServiceStub } from 'src/app/shared/moks/tranlate.mock';

import { InvioceComponent } from './invioce.component';

describe('InvioceComponent', () => {
  let component: InvioceComponent;
  let fixture: ComponentFixture<InvioceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvioceComponent,TranslatePipeMock], 
 providers:[{
        provide:TranslateService, useValue:TranslateServiceStub
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvioceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
