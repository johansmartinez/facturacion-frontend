import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturasService } from "../../servicios/facturas.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:string="";

  constructor(
    private route: ActivatedRoute,
    public facturasService:FacturasService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(p=>{
      this.id=p['id']
    })
    this.facturasService.get(this.id);
  }

}
