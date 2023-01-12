import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslatePipeMock, TranslateServiceStub } from 'src/app/shared/moks/tranlate.mock';

import { AcountComponent } from './acount.component';

describe('AcountComponent', () => {
  let component: AcountComponent;
  let fixture: ComponentFixture<AcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcountComponent, TranslatePipeMock ],
      providers:[{
        provide:TranslateService, useValue:TranslateServiceStub
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
