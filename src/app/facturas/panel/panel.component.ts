import { Component, OnInit } from '@angular/core';
import { FacturasService } from "../../servicios/facturas.service";
import { AlertasService } from "../../servicios/alertas.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  
  constructor(
    public facturasService:FacturasService,
    public alertasService:AlertasService,
  ) { }

  ngOnInit(): void {
  }

  delete(id:string){
    this.alertasService.confirm(`¿Está seguro que quiere eliminar la factura: ${id}`)
    .then(result=>{
      if (result.isConfirmed) {
        alert('si')
      }
    })
  }
}
