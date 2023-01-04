import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcountComponent } from './pages/acount/acount.component';

const routes: Routes = [{ path: '', component: AcountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcountRoutingModule {}
