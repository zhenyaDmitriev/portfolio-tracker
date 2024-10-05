import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppRoutes} from "../routes.enum";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  protected readonly AppRoutes = AppRoutes;

  constructor() { }

  ngOnInit(): void {}
}
