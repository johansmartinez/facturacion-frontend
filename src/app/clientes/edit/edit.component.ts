import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { ClienteService } from "../../servicios/cliente.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit  {
  dni:string | null="";
  
  constructor(
    private route: ActivatedRoute,
    public clienteService:ClienteService
  ) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(q => {
      this.dni=q['dni'];
    });
    this.clienteService.get(this.dni);
  }

  edit(event:Event){
    event.preventDefault();
    this.clienteService.edit();
  }

}
