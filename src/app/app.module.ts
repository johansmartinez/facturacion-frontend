import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav/nav.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { FormComponent } from './componentes/productos/form/form.component';
import { FormComponent as FormProveedorComponent } from './componentes/proveedores/form/form.component';
import { FormComponent as FormClienteComponent } from './componentes/clientes/form/form.component';
import { FormComponent as FormFacturasComponent } from './componentes/facturas/form/form.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { FechaPipe } from './pipelines/fecha.pipe';
import { MonedaPipe } from './pipelines/moneda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductosComponent,
    FormFacturasComponent,
    FormComponent,
    FormProveedorComponent,
    FormClienteComponent,
    ProveedoresComponent,
    ClientesComponent,
    FacturasComponent,
    FechaPipe,
    MonedaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
