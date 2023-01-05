import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvioceRoutingModule } from './invioce-routing.module';
import { InvioceComponent } from './pages/invioce/invioce.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [InvioceComponent],
  imports: [CommonModule, InvioceRoutingModule, SharedModule],
})
export class InvioceModule {}
