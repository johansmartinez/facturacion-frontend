import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from "./panel/panel.component";
import { EditComponent } from "./edit/edit.component";
import { AddComponent } from "./add/add.component";

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:PanelComponent
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
export class ProductosRoutingModule { }
