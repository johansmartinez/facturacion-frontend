import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/modelos/producto';
import { Proveedor } from 'src/app/modelos/proveedor';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'proveedor-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data:Proveedor={
    nombre:'',
    nif:'',
    direccion:''
  }
  constructor( public proveedoresService:ProveedoresService, private http:HttpClient) { }

  ngOnInit(): void {
    this.proveedoresService.reload();
  }

  submit(event:Event){
    event.preventDefault();
    if(this.proveedoresService.modal=='AGREGAR'){
      this.proveedoresService.create(this.data)
    }else{
      this.proveedoresService.edit();
    }
  }
}
