import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/modelos/producto';
import { ProductosService } from "../../servicios/productos.service";
import { ProveedoresService } from "../../servicios/proveedores.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  producto:ProductoDTO={
    nombre:"",
    precioUnitario:1,
    proveedorId:"-1",
  };

  constructor(
    public productosService:ProductosService,
    public proveedoresService:ProveedoresService
  ) { }

  ngOnInit(): void {
    this.proveedoresService.reload();
    this.productosService.reload();
  }

  add(event:Event){
    event.preventDefault();
    let val =this.productosService.add(this.producto);
    if (!!val) {
      this.producto={
        nombre:"",
        precioUnitario:1,
        proveedorId:"-1",
      }
    }
  }

}
