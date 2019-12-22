import { Component, OnInit } from '@angular/core';
import { AhorrosService } from 'src/app/services/ahorros.service';
import { Router } from '@angular/router';
import {ModalManager} from "ngb-modal";


@Component({
  selector: 'app-ahorros',
  templateUrl: './ahorros.component.html',
  styleUrls: ['./ahorros.component.css']
})
export class AhorrosComponent implements OnInit {

  ahorrosMes : any [] = [];
  suma : number = 0;
  sumaDolares : number = 1;
  nombreComponente : string = "Ahorros";
  titulos : any [] = [];
  nombre : string = '';

  constructor(private ahorrosService : AhorrosService, private router : Router, private modalService : ModalManager) { }

  async ngOnInit() {
    if(localStorage.getItem('usuario') != null) {
      this.nombre = localStorage.getItem('nombre');
    }

    let ahorros_mes_respuesta : any = await this.ahorrosService.getAhorrosMonth();
    console.log(ahorros_mes_respuesta);

    if(ahorros_mes_respuesta != 'undefined') {
      this.ahorrosMes = ahorros_mes_respuesta.ahorros_delmes;
      // this.suma = ahorros_mes_respuesta.suma[0];
      // this.sumaDolares = ahorros_mes_respuesta.suma[1];
      console.log(this.ahorrosMes)

      this.titulos = Object.keys(this.ahorrosMes[0]);
      console.log(this.ahorrosMes[0]);    
    }   

  }

}
