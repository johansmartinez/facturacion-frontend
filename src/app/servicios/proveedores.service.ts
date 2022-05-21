import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from '../modelos/proveedor';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  modal:string='';
  seleccionado:Proveedor={
    nif:"",
    nombre:"",
    direccion:""
  }
  proveedores:Proveedor[]=[];
  constructor(private http:HttpClient) { }

  reload(){
    this.http.get<Proveedor[]>('http://localhost:3000/provider')
    .subscribe(data=>{
      console.log(data)
      this.proveedores=data})
  }

  setModal(type:string){
    this.modal=type;
  }

  setSeleccion(proveedor:Proveedor){
    this.seleccionado=proveedor;
  }
  

  create(data:Proveedor){
    this.http.post('http://localhost:3000/provider', data)
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
    this.http.put('http://localhost:3000/provider', this.seleccionado)
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
