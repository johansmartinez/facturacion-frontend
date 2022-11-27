import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';

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

  constructor() { }

  ngOnInit(): void {
  }

  add(event:Event){
    event.preventDefault();
    
  }
}
