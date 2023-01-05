import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcountRoutingModule } from './acount-routing.module';
import { AcountComponent } from './pages/acount/acount.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AcountComponent],
  imports: [CommonModule, AcountRoutingModule, SharedModule],
})
export class AcountModule {}
