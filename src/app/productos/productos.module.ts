import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ProductosRoutingModule } from './productos-routing.module';
import { PanelComponent } from './panel/panel.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    PanelComponent,
    AddComponent,
    EditComponent,
    
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
