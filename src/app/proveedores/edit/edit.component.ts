import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorDTO } from 'src/app/modelos/proveedor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:string|null="";

  proveedor:ProveedorDTO={
    nombre:""
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(p=>{
      this.id=p['id']
    });
  }

  edit(event:Event){
    event.preventDefault();
  }
}
