import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorDTO } from 'src/app/modelos/proveedor';
import { ProveedoresService } from "../../servicios/proveedores.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:string|null="";

  constructor(
    private route: ActivatedRoute,
    public proveedoresService:ProveedoresService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(p=>{
      this.id=p['id']
    });
    this.proveedoresService.get(this.id);
  }

  edit(event:Event){
    event.preventDefault();
    this.proveedoresService.edit(this.id);
  }
}
