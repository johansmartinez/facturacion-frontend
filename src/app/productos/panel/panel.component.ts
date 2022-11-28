import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../servicios/productos.service";
import { AlertasService } from "../../servicios/alertas.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(
    public productosService:ProductosService,
    public alertasService:AlertasService
  ) { }

  ngOnInit(): void {
    this.productosService.reload();
  }

  delete(id:string, nombre:string){
    this.alertasService.confirm(`¿Está seguro que quiere eliminar el producto: ${nombre}`)
    .then(result=>{
      if (result.isConfirmed) {
        this.productosService.delete(id);
      }
    })
  }

}
