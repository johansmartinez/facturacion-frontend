import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/modelos/compra';
import { Factura, FacturaDTO } from 'src/app/modelos/factura';
import { Filtro } from 'src/app/modelos/filtro';
import { FacturasService } from 'src/app/servicios/facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  
  filtro:Filtro={
    mes:`${new Date().getMonth()+1}`,
    anio:new Date().getFullYear()
  }
  data:FacturaDTO={
    cliente:'',
    fecha_facturacion:'',
    compras:[]
  }
  
  constructor(public facturasService:FacturasService) { }

  ngOnInit(): void {
    this.facturasService.reload();
  }

  detalles(f:Factura){
    this.facturasService.detalles(f.id);
  }

  filtrar(){
    this.facturasService.filtrado=true;
    this.facturasService.filtrar(this.filtro);
  }

  limpiar(){
    this.facturasService.filtrado=false;
    this.filtro={
      mes:`${new Date().getMonth()+1}`,
      anio:new Date().getFullYear()
    }
    this.facturasService.reload();
  }
}
