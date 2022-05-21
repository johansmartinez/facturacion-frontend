import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  seleccion:string='FACTURAS';
  visible:boolean=false;
  constructor() { }

  setVisible(value:boolean){
    this.visible=value;
  }

  seleccionar(type:string){
    this.seleccion=type;
  }
}
