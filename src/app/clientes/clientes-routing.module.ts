import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientesComponent} from './panel/clientes.component';
import {EditComponent} from './edit/edit.component';
import {AddComponent} from './add/add.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:ClientesComponent
  },
  {
    path:'edit',
    pathMatch:'full',
    component:EditComponent
  },
  {
    path:'add',
    pathMatch:'full',
    component:AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
