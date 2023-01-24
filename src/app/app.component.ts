import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

declare const scriptGTM: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-login';

  constructor(public translate: TranslateService) {
    // translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    translate.use('es');
  }
  ngOnInit(): void {
    this.getGtmService();
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  getGtmService(): void {
    scriptGTM(window, document, 'script', 'dataLayer', 'GTM-PX2JBLJ');
  }
}
