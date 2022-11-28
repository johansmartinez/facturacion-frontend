import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto, ProductoDTO } from '../modelos/producto';
import { AlertasService } from './alertas.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  seleccion:Producto={
    id:"",
    nombre:"",
    precioUnitario:1,
    proveedorId:"",
    proveedorNombre:""
  };

  productos: Producto[]=[]
  
  constructor(
    private http:HttpClient,
    private alertasService:AlertasService
  ) { }

  reload(){
    this.http.get<Producto[]>(`${environment.API_URL}/producto/`)
    .subscribe(data=>{
      this.productos=data;
    });
  }

  async get(id:string | null){
    if (id!="") {
      await this.http.get<Producto[]>(`${environment.API_URL}/producto/${id}`,)
      .subscribe(data=>{
        this.seleccion=data[0];
      });
    }else{
      this.alertasService.error(`No hay un id para editar`);
    }
  }

  add(producto: ProductoDTO) {
    return this.http.post(`${environment.API_URL}/producto`, producto)
      .subscribe(data=>{
        this.reload();
        this.alertasService.success('El producto se ha creado exitosamente');
        return true;
      },
        err=>{
          this.alertasService.error(`Ha ocurrido un error al crear al producto\n ${JSON.stringify(err)}`);
          return false;
        }
      )
  }

  edit(){
    this.http.put(`${environment.API_URL}/producto/${this.seleccion.id}`, this.seleccion)
      .subscribe(data=>{
        this.reload();
        this.get(this.seleccion.id);
        this.alertasService.success('El producto se ha editado perfectamente');
      },
      err=>{
        this.alertasService.error(`Ha ocurrido un error al editar el producto`)
      }
    )
  }

  delete(id:string){
    this.http.delete(`${environment.API_URL}/producto/${id}`)
    .subscribe(data=>{
      this.reload();
      this.alertasService.success('El producto se ha eliminado perfectamente');
    },
      err=>{
        this.alertasService.error(`Ha ocurrido un error al eliminar el producto`)
      }
    )
  }
}
