import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateLayoutComponent } from './private-layout.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      { path: 'portfolio', component: PortfolioComponent },
      { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateLayoutRoutingModule {}
