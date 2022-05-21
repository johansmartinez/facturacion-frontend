import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura, FacturaDetalle, FacturaDTO } from '../modelos/factura';
import Swal from 'sweetalert2';
import { Filtro } from '../modelos/filtro';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  filtrado:boolean=false;
  seleccion:FacturaDetalle[]=[];
  modal:string='';
  facturas:Factura[]=[];
  constructor(private http:HttpClient) { }

  reload(){
    this.http.get<Factura[]>('http://localhost:3000/bill')
    .subscribe(data=>this.facturas=data)
  }

  setModal(a:string){
    this.modal=a;
  }

  create(factura:FacturaDTO){
    this.http.post('http://localhost:3000/bill', factura)
    .subscribe(data=>{
      this.reload();
      Swal.fire({
        icon:'success',
        text:'Se ha podido crear la factura'
      });
    },err=>{
      Swal.fire({
        icon:'error',
        text:'No se ha podido crear la factura'
      });
    });
  }

  detalles(id:number){
    this.http.get<FacturaDetalle[]>(`http://localhost:3000/bill/details/${id}`)
    .subscribe(data=>{
      this.seleccion=data
      this.setModal('DETALLES');
    })
  }

  filtrar(filtro:Filtro){
    this.http.get<Factura[]>(`http://localhost:3000/bill/filter/${filtro.mes}/${filtro.anio}`)
    .subscribe(data=>this.facturas=data)
  }
}
