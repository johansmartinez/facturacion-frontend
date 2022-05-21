import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(public clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.reload();
  }

  edit(cliente:Cliente){
    this.clienteService.setSeleccion(cliente);
    this.clienteService.setModal('EDITAR');
  }
}
