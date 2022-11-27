import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/modelos/producto';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  producto:ProductoDTO={
    nombre:"",
    precioUnitario:0,
    proveedorId:"-1",
  };

  constructor() { }

  ngOnInit(): void {
  }

  add(event:Event){
    event.preventDefault();
  }

}
