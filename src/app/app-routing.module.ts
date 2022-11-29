import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from "./componentes/notfound/notfound.component";
import { HomeComponent } from "./componentes/home/home.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: 'clientes',
    data:{
      preload:true
    },
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: 'productos',
    data:{
      preload:true
    },
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: 'proveedores',
    data:{
      preload:true
    },
    loadChildren: () => import('./proveedores/proveedores.module').then(m => m.ProveedoresModule)
  },
  {
    path: 'facturas',
    data:{
      preload:true
    },
    loadChildren: () => import('./facturas/facturas.module').then(m => m.FacturasModule)
  },
  {
    path: 'home',
    pathMatch:'full',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
