import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Proveedor, ProveedorDTO } from '../modelos/proveedor';
import { AlertasService } from './alertas.service';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  seleccion:Proveedor={
    proveedorId:"",
    nombre:"",
  }
  
  proveedores:Proveedor[]=[];
  constructor(
    private http:HttpClient,
    private alertasService:AlertasService
  ) { }

  reload(){
    this.http.get<Proveedor[]>(`${environment.API_URL}/proveedor/`)
    .subscribe(data=>{
      this.proveedores=data;
    });
  }

  async get(id:string | null){
    if (id!="") {
      await this.http.get<Proveedor[]>(`${environment.API_URL}/proveedor/${id}`,)
      .subscribe(data=>{
        this.seleccion=data[0];
      });
    }else{
      this.alertasService.error(`No hay un id para editar`);
    }
  }

  add(proveedor: ProveedorDTO) {
    return this.http.post(`${environment.API_URL}/proveedor`, proveedor)
      .subscribe(data=>{
        this.reload();
        this.alertasService.success('El proveedor se ha creado exitosamente');
        return true;
      },
        err=>{
          this.alertasService.error(`Ha ocurrido un error al crear al proveedor`);
          return false;
        }
      )
  }

  edit(id:string | null){
    this.http.put(`${environment.API_URL}/proveedor/${id}`, this.seleccion)
      .subscribe(data=>{
        this.reload();
        this.get(this.seleccion.proveedorId);
        this.alertasService.success('El proveedor se ha editado perfectamente');
      },
      err=>{
        this.alertasService.error(`Ha ocurrido un error al editar el proveedor`)
      }
    )
  }

  delete(id:string){
    this.http.delete(`${environment.API_URL}/proveedor/${id}`)
    .subscribe(data=>{
      this.reload();
      this.alertasService.success('El proveedor se ha eliminado perfectamente');
    },
      err=>{
        this.alertasService.error(`Ha ocurrido un error al eliminar el proveedor`)
      }
    )
  }
}
