
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { Compra } from 'src/app/modelos/compra';
import { Factura, FacturaDTO } from 'src/app/modelos/factura';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { FacturasService } from 'src/app/servicios/facturas.service';
import { ProductosService } from 'src/app/servicios/productos.service';


@Component({
  selector: 'facturas-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  filtrado:boolean=false;
  data:FacturaDTO={
    cliente:'',
    fecha_facturacion:'',
    compras:[]
  }
  compra:Compra={
    producto:-1,
    unidades:1
  }
  constructor(public facturasService:FacturasService, public clienteService:ClienteService, public productosService:ProductosService) { }

  ngOnInit(): void {
    if(!this.facturasService.filtrado) this.facturasService.reload();
    this.clienteService.reload();
    this.productosService.reload();
  }

  agregarCompra(){
    let i=this.data.compras.findIndex(e=>e.producto==this.compra.producto);
    if (i>=0) {
      this.data.compras[i].unidades+=this.compra.unidades;
    }else{
      this.data.compras.push(this.compra);
    }
    this.compra={
      producto:0,
      unidades:1
    }
  }

  submit(event:Event){
    event.preventDefault();
    if(this.facturasService.modal=='AGREGAR'){
      this.facturasService.create(this.data);
    }else{
      //this.facturasService.edit();
    }
  }
}
