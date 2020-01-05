import { Component, OnInit } from '@angular/core';
import { AhorrosService } from 'src/app/services/ahorros.service';
import { Router } from '@angular/router';
import { ModalManager } from "ngb-modal";
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
  contar : number = 0;


  constructor(private ahorrosService : AhorrosService, private router : Router, private modalService : ModalManager) { }

  async ngOnInit() {

    this.form = new FormGroup({
      'objetivo' : new FormControl('', [Validators.required]),
      'moneda' : new FormControl('', [Validators.required])
    })

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

    let contar : any = await this.ahorrosService.contarCP();
    console.log(contar);

    if(contar != 'undefined') {
      this.contar = contar.data[0].cuenta;
      console.log(this.contar);
    }

    if(objetivo_pesos != 'undefined') {
      this.cPPesos = objetivo_pesos.data[0];
      console.log(this.cPPesos);
    }

    if(ahorros_total != 'undefined') {
      this.ahorrosTotal = ahorros_total.ahorros_total;
      this.sumaMonto = ahorros_total.ahorros_total[1];
      this.sumaDolares = ahorros_total.ahorros_total[0];  
    }  
    
    if(detalle_ahorros != 'undefined') {
      this.detalleAhorros = detalle_ahorros.ahorros_detallados;

      this.titulos = Object.keys(this.detalleAhorros[0]);
    }

    let id_cp : any = await this.ahorrosService.getIdCP();
    console.log(id_cp);

    if(id_cp != 'undefined') {
      this.cuentaProyecto = id_cp.data[0].id_cp;
      console.log(this.cuentaProyecto);
    } 

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

  async nuevaCuentaProyecto(){
    
    let nueva_cp : any = await this.ahorrosService.insertarCuentaProyecto(this.form.value);
    console.log(this.form.value);
    
    if(nueva_cp != null){
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cuenta proyecto creada',
        showConfirmButton: false,
        timer: 1500
    });
    
    this.form.reset();
    this.ngOnInit();

      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un error'
        });
      }

    
  }

  agregarAhorro() {
    this.router.navigate(['/nuevo-ahorro']);
  }

}
