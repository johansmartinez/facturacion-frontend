import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FacturasRoutingModule } from './facturas-routing.module';
import { PanelComponent } from './panel/panel.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    PanelComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FacturasRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class FacturasModule { }
