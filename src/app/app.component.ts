import { Component } from '@angular/core';
import { MenuService } from './servicios/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONTEND';
  constructor (public menuService:MenuService) {}
}
