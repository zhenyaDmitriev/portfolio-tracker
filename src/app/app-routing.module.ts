import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public-layout/public-layout.module').then(m => m.PublicLayoutModule),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./private-layout/private-layout.module').then(m => m.PrivateLayoutModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
