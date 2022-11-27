import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav/nav.component';
import { FechaPipe } from './pipelines/fecha.pipe';
import { MonedaPipe } from './pipelines/moneda.pipe';

import {ClientesComponent} from './clientes/panel/clientes.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClientesComponent,
    FechaPipe,
    MonedaPipe,
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
