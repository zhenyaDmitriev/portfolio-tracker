import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayoutComponent } from './public-layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlErrorComponent } from '../core/components/form-control-error/form-control-error.component';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { PublicLayoutRoutingModule } from './public-layout-routing.module';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    PublicLayoutComponent,
    WelcomeComponent,
    SignupComponent,
    SigninComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    PublicLayoutRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    FormControlErrorComponent,
    SidebarModule,
    ButtonModule,
    DropdownModule,
    RouterLinkWithHref,
  ],
})
export class PublicLayoutModule {}
