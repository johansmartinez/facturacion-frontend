import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from "../../servicios/productos.service";
import { ProveedoresService } from "../../servicios/proveedores.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:string|null="";

  constructor(
    private route: ActivatedRoute,
    public productosService:ProductosService,
    public proveedoresService:ProveedoresService
  ) { }

  ngOnInit(): void {
    this.proveedoresService.reload();
    this.route.queryParams.subscribe(p=>{
      this.id=p['id']
    })
    this.productosService.get(this.id);
  }

  edit(event:Event){
    event.preventDefault();
    this.productosService.edit();
  }

}
