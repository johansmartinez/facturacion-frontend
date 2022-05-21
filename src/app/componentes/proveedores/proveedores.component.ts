import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/modelos/proveedor';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor(public proveedoresService:ProveedoresService) { }

  ngOnInit(): void {
    this.proveedoresService.reload();
  }

  edit(proveedor:Proveedor){
    this.proveedoresService.setSeleccion(proveedor);
    this.proveedoresService.setModal('EDITAR');
  }

}
