import { Component, OnInit } from '@angular/core';
import { IngresosService } from 'src/app/services/ingresos.service';
import { Router } from '@angular/router';
import {ModalManager} from "ngb-modal"

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  ingresosMes : any [] = [];
  suma : number = 0;
  nombreComponente : string = "Ingresos";
  titulos : any [] = [];

  constructor(private ingresosServices : IngresosService, private router : Router, private modalService : ModalManager) { }

  async ngOnInit() {
    //Aca cargamos los ingresos como peticion a nuestro backend

    let respuesta_server : any = await this.ingresosServices.getIngresosDelMes() //get base service
    //respuesta_server devuelve un array de objetos
    console.log(respuesta_server);

    if(respuesta_server.status == 'ok' && respuesta_server != 'undefined') {
      this.ingresosMes = respuesta_server.data;
      this.suma = respuesta_server.suma[0];

      this.titulos = Object.keys(this.ingresosMes[0]);      
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