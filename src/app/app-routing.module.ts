import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicLayoutComponent} from "./public-layout/public-layout.component";
import {WelcomeComponent} from "./public-layout/welcome/welcome.component";
import {SigninComponent} from "./public-layout/auth/signin/signin.component";
import {SignupComponent} from "./public-layout/auth/signup/signup.component";

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: "home", redirectTo: "", pathMatch: 'full' },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
