import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from "../../servicios/proveedores.service";
import { AlertasService } from "../../servicios/alertas.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(
    public proveedoresService:ProveedoresService,
    public alertasService:AlertasService
  ) { }

  ngOnInit(): void {
  }

  delete(id:string, nombre:string){
    this.alertasService.confirm(`¿Está seguro que quiere eliminar al proveedor: ${nombre}`)
    .then(result=>{
      if (result.isConfirmed) {
        alert('si')
      }
    })
  }
}
