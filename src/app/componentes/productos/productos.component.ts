import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public productosService:ProductosService) { }

  ngOnInit(): void {
    this.productosService.reload();
  }

  edit(producto:Producto){
    this.productosService.setSeleccion(producto);
    this.productosService.setModal('EDITAR');
  }
}
