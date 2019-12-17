import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { GastosComponent } from './components/partials/gastos/gastos.component';
import { HomeComponent } from './components/home/home.component';
import { IngresosComponent } from './components/partials/ingresos/ingresos.component';
import { ModalComponentComponent } from './components/modal-component/modal-component.component';
import { IngresoComponent } from './components/agregar/ingreso/ingreso.component';
import { HistorialComponent } from './components/historial/historial.component';
import { IngresosHistorialComponent } from './components/historial/ingresos-historial/ingresos-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    NavbarComponent,
    LoginComponent,
    GastosComponent,
    HomeComponent,
    IngresosComponent,  
    ModalComponentComponent, 
    IngresoComponent,
    HistorialComponent, 
    IngresosHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
