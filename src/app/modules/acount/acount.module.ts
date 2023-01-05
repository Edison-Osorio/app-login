import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcountRoutingModule } from './acount-routing.module';
import { AcountComponent } from './pages/acount/acount.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function acountHttpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '.assets/i18n/', '.json');
}

@NgModule({
  declarations: [AcountComponent],
  imports: [
    CommonModule,
    AcountRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: acountHttpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class AcountModule {}
