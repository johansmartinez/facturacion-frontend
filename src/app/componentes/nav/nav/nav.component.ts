import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/servicios/menu.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public menuServicie:MenuService) {  }

  ngOnInit(): void {
  }

}
