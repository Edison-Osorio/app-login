import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'acount',
    loadChildren: () =>
      import('./modules/acount/acount.module').then((m) => m.AcountModule),
  },
  {
    path: 'invioce',
    loadChildren: () =>
      import('./modules/invioce/invioce.module').then((m) => m.InvioceModule),
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
