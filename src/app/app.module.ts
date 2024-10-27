import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './public-layout/welcome/welcome.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { HeaderComponent } from './public-layout/header/header.component';
import { FooterComponent } from './public-layout/footer/footer.component';
import { AuthModule } from './public-layout/auth/auth.module';

@NgModule({
  declarations: [AppComponent, PublicLayoutComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HeaderComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
