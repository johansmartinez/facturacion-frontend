import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDTO } from 'src/app/modelos/producto';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:string|null="";

  producto:ProductoDTO={
    nombre:"",
    precioUnitario:0,
    proveedorId:"-1",
  };

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(p=>{
      this.id=p['id']
    })
  }

  edit(event:Event){
    event.preventDefault();
  }

}
