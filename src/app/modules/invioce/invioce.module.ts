import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvioceRoutingModule } from './invioce-routing.module';
import { InvioceComponent } from './pages/invioce/invioce.component';

@NgModule({
  declarations: [InvioceComponent],
  imports: [CommonModule, InvioceRoutingModule],
})
export class InvioceModule {}
