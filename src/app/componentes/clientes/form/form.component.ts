import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { ProductoDTO } from 'src/app/modelos/producto';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'client-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data:Cliente={
    dni:'',
    nombre:'',
    apellido:'',
    direccion:'',
    fecha_nacimiento:''
  }
  constructor(public clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.reload();
  }

  submit(event:Event){
    event.preventDefault();
    if(this.clienteService.modal=='AGREGAR'){
      this.clienteService.create(this.data)
    }else{
      this.clienteService.edit();
    }
  }
}
