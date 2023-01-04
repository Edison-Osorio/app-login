import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvioceComponent } from './pages/invioce/invioce.component';

const routes: Routes = [{ path: '', component: InvioceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvioceRoutingModule {}
