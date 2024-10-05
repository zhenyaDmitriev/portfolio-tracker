import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownModule} from "primeng/dropdown";
import {Router, RouterLinkWithHref} from "@angular/router";
import {AppRoutes} from "../../../routes.enum";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'welcome-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [BrowserModule, BrowserAnimationsModule, SidebarModule, ButtonModule, DropdownModule, RouterLinkWithHref],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
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

  ngOnInit() {}

  navigateTo(route: AppRoutes) {
    this.sidebarVisible = false;
    this.router.navigate([route]).then();
  }
}
