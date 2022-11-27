import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ClientesRoutingModule } from './clientes-routing.module';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
