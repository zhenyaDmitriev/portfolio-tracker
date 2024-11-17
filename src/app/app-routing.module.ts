import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public-layout/public-layout.module').then(m => m.PublicLayoutModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./private-layout/private-layout.module').then(m => m.PrivateLayoutModule),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
