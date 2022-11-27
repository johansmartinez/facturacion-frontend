import { Component, OnInit } from '@angular/core';
import { ProveedorDTO } from 'src/app/modelos/proveedor';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  proveedor:ProveedorDTO={
    nombre:""
  }

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  add(event:Event){
    event.preventDefault();
  }
}
