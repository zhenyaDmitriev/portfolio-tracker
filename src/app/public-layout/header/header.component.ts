import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PublicRoutes } from '../public-layout-routes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
  protected readonly PublicRoutes = PublicRoutes;

  constructor(private router: Router) {}

  navigateTo(route: PublicRoutes) {
    this.sidebarVisible = false;
    this.router.navigate([route]).then();
  }
}
