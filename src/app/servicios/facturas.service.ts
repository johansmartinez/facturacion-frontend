import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Factura, FacturaDSO, FacturaDTO,CreateFactura } from '../modelos/factura';
import { AlertasService } from './alertas.service';


@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  
  seleccion:FacturaDTO={
    facturaId:"",
    facturacion:"",
    clienteApellido:"",
    clienteDni:"",
    clienteNombre:"",
    productos:[],
    total:0
  }
  facturas:Factura[]=[];
  
  constructor(
    private http:HttpClient,
    private alertasService:AlertasService
    ) { }
    
    reload(){
      this.http.get<Factura[]>(`${environment.API_URL}/factura/`).pipe(
        map(e=>{
        return e.map(i=>{
          i.facturacion=new Date(i.facturacion).toISOString().split('T')[0];
          return i;
        })
      })
      )
      .subscribe(data=>{
        this.facturas=data;
      });
    }
    
    add(factura: FacturaDSO) {
      let temp:CreateFactura={
        clienteDni:factura.clienteDni
      }
      return this.http.post(`${environment.API_URL}/factura`, temp)
      .subscribe(data=>{
        let temp:any[]= factura.productos.map(e=> 
          ({
            facturaId:data,
            unidades:e.unidades,
            productoId:e.id
          })
        )
        this.http.post(`${environment.API_URL}/venta`, temp)
        .subscribe(ventas=>{
          this.reload();
          this.alertasService.success('La facura se ha creado exitosamente');
          return true
        },
          err=>{
            this.alertasService.error(`Ha ocurrido un error al crear la venta\n ${JSON.stringify(err)}`);
            return false;
          }
        )
      },
        err=>{
          this.alertasService.error(`Ha ocurrido un error al crear la factura\n ${JSON.stringify(err)}`);
          return false;
        }
      )
    }

  async get(id:string | null){
    if (id!="") {
      await this.http.get<FacturaDTO[]>(`${environment.API_URL}/factura/ventas/${id}`).pipe(
        map(e=>{
          return e.map(i=>{
            i.facturacion=new Date(i.facturacion).toISOString().split('T')[0]
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
  filter(mes:number, anio:number){
    this.http.get<FacturaDTO[]>(`${environment.API_URL}/factura/ventas/filtro/${mes}/${anio}`).pipe(
      map(e=>{
        return e.map(i=>{
          let temp:Factura={
            
            facturaId:i.facturaId,
            clienteDni:i.clienteDni,
            clienteNombre:i.clienteNombre,
            clienteApellido:i.clienteApellido,
            total:i.total,
            facturacion:new Date(i.facturacion).toISOString().split('T')[0]
          }
          return temp;
        })
      })
    )
    .subscribe(data=>{
      this.facturas=data;
    });
  }

  delete(id:string){
    this.http.delete(`${environment.API_URL}/factura/${id}`)
    .subscribe(data=>{
      this.reload();
      this.alertasService.success('La factura se ha eliminado perfectamente');
    },
      err=>{
        this.alertasService.error(`Ha ocurrido un error al eliminar la factura`)
      }
    )
  }

}
