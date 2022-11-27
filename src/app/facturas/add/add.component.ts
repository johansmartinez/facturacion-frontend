import { Component, OnInit } from '@angular/core';
import { ProductoFactura } from 'src/app/modelos/producto';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  productos:ProductoFactura[]=[]

  id:string="-1";
  unidades:number=1;

  constructor() { }

  ngOnInit(): void {
  }

  send(event:Event){
    event.preventDefault();
  }
  removeItem(id:string){
    this.productos=this.productos.filter(e=>e.id!=id);
  }
  addItem(){
    let index= this.productos.findIndex(e=>e.id==this.id);
    if (index==-1) {
      this.productos.push({
        id:this.id,
        nombre:this.id,
        unidades:this.unidades
      });
    } else {
      this.productos[index].unidades+=this.unidades;
    }
    this.id="-1";
    this.unidades=1;
  }
}
