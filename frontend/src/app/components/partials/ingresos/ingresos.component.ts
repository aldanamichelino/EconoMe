import { Component, OnInit } from '@angular/core';
import { IngresosService } from 'src/app/services/ingresos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  ingresosMes : any [] = [];
  suma : number = 0;

  constructor(private ingresosServices : IngresosService, private router : Router) { }

  async ngOnInit() {
    //Aca cargamos los ingresos como peticion a nuestro backend

    let respuesta_server : any = await this.ingresosServices.getIngresosDelMes() //get base service
    //respuesta_server devuelve un array de objetos

    if(respuesta_server.status == 'ok') {
      this.ingresosMes = respuesta_server.data;
      this.suma = respuesta_server.suma[0];
    }
  }

  async getIngresosTotales () {
    let respuesta_server : any = await this.ingresosServices.getIngresos();
    
    if(respuesta_server.status == 'ok') {
      this.ingresosMes = respuesta_server.data;
      console.log(this.ingresosMes);
    }
  }
}
