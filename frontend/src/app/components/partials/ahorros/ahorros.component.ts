import { Component, OnInit } from '@angular/core';
import { AhorrosService } from 'src/app/services/ahorros.service';
import { Router } from '@angular/router';
import {ModalManager} from "ngb-modal";
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';


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
  cuentaProyecto : number = 0;
  moneda : any [] = [];
  form : FormGroup;


  constructor(private ahorrosService : AhorrosService, private router : Router, private modalService : ModalManager) { }

  async ngOnInit() {

    this.getMoneda();

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
      console.log(this.ahorrosTotal);   
    }  
    
    if(detalle_ahorros != 'undefined') {
      this.detalleAhorros = detalle_ahorros.ahorros_detallados;
      console.log(this.detalleAhorros);

      this.titulos = Object.keys(this.detalleAhorros[0]);
    }

    if(objetivo_pesos != 'undefined') {
      this.cPPesos = objetivo_pesos.data[0];
      this.cuentaProyecto = objetivo_pesos.data[0].id_cp;
      console.log(this.cPPesos);
      console.log(this.cuentaProyecto);
    }

    this.form = new FormGroup({
      'objetivo' : new FormControl('', [Validators.required]),
      //cada input, y le ponemos si arranca vacio y si tiene validadores, se pueden enviar muchos validators pero si o si dentro del array. Matchea con el formControlName del input
    })

  }

  async getMoneda(){
    try {
    let moneda : any = await this.ahorrosService.getMoneda();
    this.moneda = moneda.data;
    console.log(this.moneda);
    } catch(error){
      console.log(error);
     }
  }

  elegirMoneda(id) {
    console.log(id)
    this.form.value.moneda = id;
    console.log(this.form.value)
  }

  agregarAhorro() {
    this.router.navigate(['/nuevo-ahorro']);
  }

}
