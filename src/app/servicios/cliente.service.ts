import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/cliente';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { AlertasService } from "./alertas.service";
import { Producto } from '../modelos/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  seleccion:Cliente={
    dni:"",
    apellidos:"",
    nombres:"",
    direccion:"",
    fechaNacimiento:""
  }

  clientes:Cliente[]=[];
  
  constructor(
    private http:HttpClient,
    private alertasService:AlertasService
  ) { }

  reload(){
    this.http.get<Cliente[]>(`${environment.API_URL}/cliente`,{ withCredentials: true })
    .pipe(
      map(e=>{
        return e.map(i=>{
          return {
            ...i,
            fecha_nacimiento:new Date(i.fechaNacimiento).toISOString().split('T')[0]
          }
          
        })
      })
    ).subscribe(data=>this.clientes=data)
  }

  async get(dni:string | null){
    if (dni!="") {
      await this.http.get<Cliente[]>(`${environment.API_URL}/cliente/${dni}`,{ withCredentials: true }).pipe(
        map(e=>{
          return e.map(i=>{
            i.fechaNacimiento=new Date(i.fechaNacimiento).toISOString().split('T')[0]
            return i;
          })
        })
      )
      .subscribe(data=>{
        this.seleccion=data[0];
      });
    }else{
      this.alertasService.error(`No hay un dni para editar`);
    }
  }

  add(cliente:Cliente){
    
    return this.http.post(`${environment.API_URL}/cliente`, cliente)
      .subscribe(data=>{
        this.reload();
        this.alertasService.success('El usuario se a creado exitosamente');
        return true;
      },
        err=>{
          this.alertasService.error(`${JSON.stringify(err.error.errors)}`);
          return false;
        }
      )
  }

  edit(){
    this.http.put(`${environment.API_URL}/cliente/${this.seleccion.dni}`, this.seleccion)
      .subscribe(data=>{
        this.reload();
        this.get(this.seleccion.dni)
        this.alertasService.success('El cliente se ha editado perfectamente')
      },
      err=>{
        this.alertasService.error(`Ha ocurrido un error al editar el cliente\n${JSON.stringify(err)}`)
      }
    )
  }
}
