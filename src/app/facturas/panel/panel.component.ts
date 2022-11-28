import { Component, OnInit } from '@angular/core';
import { FacturasService } from "../../servicios/facturas.service";
import { AlertasService } from "../../servicios/alertas.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  mes:number=new Date().getMonth()+1;
  anio:number=new Date().getFullYear();
  
  constructor(
    public facturasService:FacturasService,
    public alertasService:AlertasService,
  ) { }

  ngOnInit(): void {
    this.facturasService.reload();
  }

  delete(id:string){
    this.alertasService.confirm(`¿Está seguro que quiere eliminar la factura: ${id} ?`)
    .then(result=>{
      if (result.isConfirmed) {
        this.facturasService.delete(id);
      }
    })
  }

  filter(){
    this.facturasService.filter(this.mes,this.anio);
  }

  cleanFilter(){
    this.mes=new Date().getMonth()+1;
    this.anio=new Date().getFullYear();
    this.facturasService.reload();
  }
}
