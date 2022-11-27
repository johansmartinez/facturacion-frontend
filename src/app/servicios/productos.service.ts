import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[]=[
    {
      id:"12312312",
      nombre:"producto",
      precioUnitario:1233,
      proveedorId:"12312312",
      proveedorNombre:"Proveedor"
    }
  ]

  constructor() { }
}
