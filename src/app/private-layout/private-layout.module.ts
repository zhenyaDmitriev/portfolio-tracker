import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateLayoutComponent } from './private-layout.component';
import { PrivateLayoutRoutingModule } from './private-layout-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [PrivateLayoutComponent, PortfolioComponent],
  imports: [CommonModule, PrivateLayoutRoutingModule],
})
export class PrivateLayoutModule {}
