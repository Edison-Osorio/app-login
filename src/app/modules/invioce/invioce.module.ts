import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvioceRoutingModule } from './invioce-routing.module';
import { InvioceComponent } from './pages/invioce/invioce.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function InvioceHttpTranslaterLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '.assets/i18n/', '.json');
}
@NgModule({
  declarations: [InvioceComponent],
  imports: [
    CommonModule,
    InvioceRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: InvioceHttpTranslaterLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class InvioceModule {}
