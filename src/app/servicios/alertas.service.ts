import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }

  public success(text:string){
    Swal.fire({
      text:text,
      icon:'success'
    })
  }

  public error(text:string){
    Swal.fire({
      text:text,
      icon:'error'
    })
  }

  public confirm(text:string){
    return Swal.fire({
      text:text,
      icon:'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
    })
  }
}
