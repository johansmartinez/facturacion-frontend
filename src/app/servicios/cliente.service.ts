import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/cliente';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  seleccionado:Cliente={
    dni:'',
    nombres:'',
    apellidos:'',
    direccion:'',
    fechaNacimiento:''
  }
  clientes:Cliente[]=[];
  constructor(private http:HttpClient) { }

  reload(){
    this.http.get<Cliente[]>(`${environment.API_URL}/cliente`,{ withCredentials: true })
    .pipe(
      map(e=>{
        return e.map(i=>{
          console.log(i)
          return {
            ...i,
            fecha_nacimiento:new Date(i.fechaNacimiento).toISOString().split('T')[0]
          }
          
        })
      })
    ).subscribe(data=>this.clientes=data)
  }

  create(data:Cliente){
    /*
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
    */
  }

  edit(){
    /*
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
    */
  }
}
