import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateLayoutComponent } from './private-layout.component';
import { RouterOutlet } from '@angular/router';
import { PrivateLayoutRoutingModule } from './private-layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [PrivateLayoutComponent, DashboardComponent],
  imports: [CommonModule, PrivateLayoutRoutingModule, RouterOutlet],
})
export class PrivateLayoutModule {}
