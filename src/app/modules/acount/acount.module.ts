import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcountRoutingModule } from './acount-routing.module';
import { AcountComponent } from './pages/acount/acount.component';

@NgModule({
  declarations: [
    AcountComponent
  ],
  imports: [CommonModule, AcountRoutingModule],
})
export class AcountModule {}
