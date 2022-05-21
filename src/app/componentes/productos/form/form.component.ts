import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/modelos/producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'producto-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data:ProductoDTO={
    nombre:'',
    precio_unitario:0.1,
    proveedor:''
  }
  constructor(public productosService:ProductosService, public proveedoresService:ProveedoresService, private http:HttpClient) { }

  ngOnInit(): void {
    this.proveedoresService.reload();
  }

  submit(event:Event){
    event.preventDefault();
    if(this.productosService.modal=='AGREGAR'){
      this.productosService.create(this.data)
    }else{
      this.productosService.edit();
    }
  }
}
