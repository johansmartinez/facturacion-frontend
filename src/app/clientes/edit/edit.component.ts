import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {ClientDTO} from '../../modelos/cliente'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  dni:string | null="";

  cliente:ClientDTO={
    nombres:"",
    apellidos:"",
    direccion:"",
    fechaNacimiento: ""
  }
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(q => {
      this.dni=q['dni'];
    });
  }

  edit(event:Event){
    event.preventDefault();
  }

}
