import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { AlertasService } from 'src/app/servicios/alertas.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
    public clienteService:ClienteService,
    public alertasService:AlertasService
    ) { }

  ngOnInit(): void {
    this.clienteService.reload();
  }

  delete(dni:string){
    this.alertasService.confirm(`¿Está seguro que quiere eliminar al cliente identificado con dni: ${dni}`)
    .then(result=>{
      if (result.isConfirmed) {
        alert('si')
      }
    })
  }

}
