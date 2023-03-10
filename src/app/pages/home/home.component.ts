import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Routes } from 'src/app/models/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private readonly router: Router) {}

  routingAcount(): void {
    this.router.navigate([Routes.ACOUNT]);
  }

  routingInvioce(): void {
    this.router.navigate([Routes.INVIOCE]);
  }
}
