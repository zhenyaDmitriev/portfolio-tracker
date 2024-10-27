import { Component, ViewEncapsulation } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { Router, RouterLinkWithHref } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from '../../routes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    DropdownModule,
    RouterLinkWithHref,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  sidebarVisible = false;
  resources = [
    { label: '- About', value: 'about' },
    { label: '- Documentation', value: 'documentation' },
    { label: '- Blog', value: 'blog' },
    { label: '- FAQ', value: 'faq' },
    { label: '- Change Log', value: 'change-log' },
  ];
  protected readonly AppRoutes = AppRoutes;
  constructor(private router: Router) {}

  navigateTo(route: AppRoutes) {
    this.sidebarVisible = false;
    this.router.navigate([route]).then();
  }
}
