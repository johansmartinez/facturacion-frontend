import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
