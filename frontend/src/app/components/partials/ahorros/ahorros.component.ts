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

  ahorrosTotal : any [] = [];
  detalleAhorros : any [] = [];
  sumaMonto : number = 0;
  sumaDolares : number = 1;
  nombreComponente : string = "Ahorros";
  titulos : any [] = [];
  nombre : string = '';
  cPPesos : any [] = [];
  cPDolares : any [] = [];

  constructor(private ahorrosService : AhorrosService, private router : Router, private modalService : ModalManager) { }

  async ngOnInit() {
    if(localStorage.getItem('usuario') != null) {
      this.nombre = localStorage.getItem('nombre');
    }

    let ahorros_total : any = await this.ahorrosService.getAhorrosUsuarios();
    console.log(ahorros_total);

    let detalle_ahorros : any = await this.ahorrosService.getAhorrosDetalladosUsuario();
    console.log(detalle_ahorros);

    let objetivo_pesos : any = await this.ahorrosService.getCuentaProyecto();
    console.log(objetivo_pesos);



    if(ahorros_total != 'undefined') {
      this.ahorrosTotal = ahorros_total.ahorros_total;
      this.sumaMonto = ahorros_total.ahorros_total[1];
      this.sumaDolares = ahorros_total.ahorros_total[0];
      // console.log(this.ahorrosTotal);   
    }  
    
    if(detalle_ahorros != 'undefined') {
      this.detalleAhorros = detalle_ahorros.ahorros_detallados;
      console.log(this.detalleAhorros);

      this.titulos = Object.keys(this.detalleAhorros[0]);
    }

    if(objetivo_pesos != 'undefined'){
      this.cPPesos = objetivo_pesos;
      console.log(this.cPPesos);
    }

  }

  agregarAhorro() {
    this.router.navigate(['/nuevo-ahorro']);
  }

}
