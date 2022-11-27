import { Injectable } from '@angular/core';
import { Factura } from '../modelos/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  facturas:Factura[]=[
    {
      id:"12312",
      clienteDni:"21312",
      facturacion:"2022-11-10"
    }
  ]
  constructor() { }
}
