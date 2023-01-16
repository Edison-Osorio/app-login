import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { of } from 'rxjs';

describe('AppComponent', () => {
  const mocks = {
    translateServiceMock: {
      setDefaultLang: jasmine.createSpy().and.returnValue(of('ES')),
      use: jasmine.createSpy(),
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: TranslateService,
          useValue: mocks.translateServiceMock,
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('switchLang(lang: string) works correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const lang = 'es';
    app.switchLang(lang);

    expect(mocks.translateServiceMock.use).toHaveBeenCalled();
  });

  it('Set default and use language as "es"  ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(mocks.translateServiceMock.setDefaultLang).toHaveBeenCalledWith(
      'es'
    );
    expect(mocks.translateServiceMock.use).toHaveBeenCalledWith('es');
  });
});
