import {Component, OnInit} from '@angular/core';
import {AppRoutes} from "../routes.enum";

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss'],
})
export class PublicLayoutComponent implements OnInit {
  protected readonly AppRoutes = AppRoutes;

  constructor() { }

  ngOnInit(): void {}
}
