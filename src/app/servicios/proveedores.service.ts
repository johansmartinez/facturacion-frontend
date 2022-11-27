import { Injectable } from '@angular/core';
import { Proveedor } from '../modelos/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  proveedores:Proveedor[]=[
    {
      proveedorId:"12312312",
      nombre:"hola"
    }
  ]
  constructor() { }
}
