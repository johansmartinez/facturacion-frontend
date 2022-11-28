import { Component, OnInit } from '@angular/core';
import { ProveedorDTO } from 'src/app/modelos/proveedor';
import { ProveedoresService } from "../../servicios/proveedores.service";
import { AlertasService } from "../../servicios/alertas.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  proveedor:ProveedorDTO={
    nombre:""
  }

  constructor(
    private proveedoresService:ProveedoresService,
    private alertasService:AlertasService
  ) { }

  ngOnInit(): void {
  }

  add(event:Event){
    event.preventDefault();
    let val=this.proveedoresService.add(this.proveedor);
    if (!!val) {
      this.proveedor={
        nombre:""
      }
    }
  }
}
