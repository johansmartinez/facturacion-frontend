import { Component, OnInit } from '@angular/core';
import { ProductoFactura } from 'src/app/modelos/producto';
import { FacturaDSO } from 'src/app/modelos/factura';

import { FacturasService } from "../../servicios/facturas.service";
import { ClienteService } from "../../servicios/cliente.service";
import { ProductosService } from "../../servicios/productos.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  productos:ProductoFactura[]=[]


  id:string="";
  dni:string="";
  unidades:number=1;

  constructor(
    public facturasService:FacturasService,
    public clienteService:ClienteService,
    public productosService:ProductosService
  ) { }

  ngOnInit(): void {
    this.clienteService.reload();
    this.productosService.reload();
  }

  send(event:Event){
    event.preventDefault();
    let temp:FacturaDSO={
      clienteDni:this.dni,
      productos:this.productos
    }
    let val=this.facturasService.add(temp);
    if (!!val) {
      this.dni="";
      this.id="",
      this.unidades=1,
      this.productos=[]
    }
  }
  removeItem(id:string){
    this.productos=this.productos.filter(e=>e.id!=id);
  }
  addItem(){
    let index= this.productos.findIndex(e=>e.id==this.id);
    if (index==-1) {
      let temp=this.productosService.find(this.id);
      this.productos.push({
        id:this.id,
        nombre:temp?.nombre || "Sin nombre",
        precioUnitario:temp?.precioUnitario || 0,
        unidades:this.unidades
      });
    } else {
      this.productos[index].unidades+=this.unidades;
    }
    this.id="-1";
    this.unidades=1;
  }

  total(){
    return this.productos.reduce((sum, item)=>(sum + (item.precioUnitario*item.unidades)), 0)
  }
}
