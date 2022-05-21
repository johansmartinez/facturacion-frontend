import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/cliente';
import {map} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  seleccionado:Cliente={
    dni:'',
    nombre:'',
    apellido:'',
    direccion:'',
    fecha_nacimiento:''
  }
  modal:string="";
  clientes:Cliente[]=[];
  constructor(private http:HttpClient) { }

  reload(){
    this.http.get<Cliente[]>('http://localhost:3000/client')
    .pipe(
      map(e=>{
        return e.map(i=>{
          return {
            ...i,
            fecha_nacimiento:new Date(i.fecha_nacimiento).toISOString().split('T')[0]
          }
          
        })
      })
    ).subscribe(data=>this.clientes=data)
  }
  setModal(type:string){
    this.modal=type;
  }

  setSeleccion(client:Cliente){
    this.seleccionado=client;
  }
  

  create(data:Cliente){
    console.log(data)
    this.http.post('http://localhost:3000/client', data)
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
    this.http.put('http://localhost:3000/client', this.seleccionado)
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
