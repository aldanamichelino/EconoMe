import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { GastosComponent } from './components/partials/gastos/gastos.component';
import { HomeComponent } from './components/home/home.component';
import { IngresoComponent } from './components/agregar/ingreso/ingreso.component';
import { GastoComponent } from './components/agregar/gasto/gasto.component';
import { HistorialComponent } from './components/historial/historial.component';


const routes: Routes = [
  {
    path : 'registro',
    component : RegistroComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'gastos',
    component : GastosComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'nuevo-ingreso',
    component : IngresoComponent
  },
  {
  path : 'nuevo-gasto',
    component : GastoComponent
  },
  {
    path : 'historial',
    component : HistorialComponent
  },
  {
    path : '**',
    redirectTo: 'home'
  }  //Se pone al final de todo. Si la ruta no coincide redirige al home en este caso.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
