import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProducto, Producto, ProductoDTO } from '../modelos/producto';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ProductosService  {

  modal:string='';
  productos:Producto[]=[];
  seleccionado:CreateProducto={
    codigo:0,
    nombre:'',
    precio_unitario:0.1,
    proveedor:''
  };
  constructor(private http:HttpClient) { }

  reload(){
    this.http.get<Producto[]>('http://localhost:3000/product')
    .subscribe(data=>{
      this.productos=data;
    })
  }
  setModal(type:string){
    this.modal=type;
  }

  setSeleccion(producto:Producto){
    let temp:CreateProducto={
      codigo:producto.cod,
      nombre:producto.producto,
      precio_unitario:producto.precio,
      proveedor:producto.proveedor_id
    }
    this.seleccionado=temp;
  }
  

  create(data:ProductoDTO){
    this.http.post('http://localhost:3000/product', data)
      .subscribe(data=>{
        this.reload();
        Swal.fire({
          icon:'success',
          text:'Se ha creado'
        })
      },
      err=>{
        Swal.fire({
          icon:'error',
          text:'No se ha podido crear'
        })
      }
      )
  }

  edit(){
    this.http.put('http://localhost:3000/product', this.seleccionado)
      .subscribe(data=>{
        this.reload();
        Swal.fire({
          icon:'success',
          text:'Se ha editado'
        })
      },
      err=>{
        Swal.fire({
          icon:'error',
          text:'No se ha podido editar'
        })
      }
      )
  }
}
