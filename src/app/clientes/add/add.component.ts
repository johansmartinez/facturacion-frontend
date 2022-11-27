import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from "../../servicios/cliente.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cliente:Cliente={
    dni:"",
    nombres:"",
    apellidos:"",
    direccion:"",
    fechaNacimiento: ""
  }

  constructor(
    private clienteService:ClienteService
  ) { }

  ngOnInit(): void {
  }

  add(event:Event){
    event.preventDefault();
    var validation=this.clienteService.add(this.cliente);
    if (!!validation) {
      this.cliente={
        dni:"",
        nombres:"",
        apellidos:"",
        direccion:"",
        fechaNacimiento: ""
      }
    }
  }
}
