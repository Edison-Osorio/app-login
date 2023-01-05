import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private readonly router: Router,
    public translate: TranslateService
  ) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
  }

  routingAcount(): void {
    this.router.navigate(['acount']);
  }

  routingInvioce(): void {
    this.router.navigate(['invioce']);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
