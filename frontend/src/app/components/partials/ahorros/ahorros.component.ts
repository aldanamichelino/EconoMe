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
  moneda : any [] = [];
  form : FormGroup;
  contar : number = 0;
  mensaje : string;
  idCPP : null;
  idCPD : null;
  mensaje2 : string;
  mensaje3 : string;



  constructor(private ahorrosService : AhorrosService, private router : Router, private modalService : ModalManager) { }

  async ngOnInit() {

    this.form = new FormGroup({
      'objetivo' : new FormControl('', [Validators.required]),
      'moneda' : new FormControl('', [Validators.required])
    })

    this.getMoneda();
    this.getIdCPP();
    this.getIdCPD();

    if(localStorage.getItem('usuario') != null) {
      this.nombre = localStorage.getItem('nombre');
    }

    let ahorros_total : any = await this.ahorrosService.getAhorrosUsuarios();
    console.log(ahorros_total);

    let detalle_ahorros : any = await this.ahorrosService.getAhorrosDetalladosUsuario();
    console.log(detalle_ahorros);

    let objetivos : any = await this.ahorrosService.getCuentaProyecto();
    console.log(objetivos);

    let contar : any = await this.ahorrosService.contarCP();
    console.log(contar);

    if(contar != null) {
      this.contar = contar.data[0].cuenta;
      console.log(this.contar);
    }

    if(objetivos.data.length > 0) {
      this.cPPesos = objetivos.data[0];
      this.cPDolares = objetivos.data[1];
      console.log(this.cPPesos);
    }

    if(ahorros_total == 'ok' && ahorros_total.ahorros_total.length > 0) {
      this.ahorrosTotal = ahorros_total.ahorros_total;
      this.sumaMonto = ahorros_total.ahorros_total[1];
      this.sumaDolares = ahorros_total.ahorros_total[0];  
    } else {
      this.mensaje = "No hubo ahorros en el mes corriente."
    }
    
    if(detalle_ahorros.ahorros_detallados.length > 0) {
      this.detalleAhorros = detalle_ahorros.ahorros_detallados;

      this.titulos = Object.keys(this.detalleAhorros[0]);
    }

  }

  async getIdCPP(){
    try {
    let idCPP : any = await this.ahorrosService.getIdCPP();
    this.idCPP = idCPP.data[0];
    console.log(this.idCPP);
    } catch(error){
      console.log(error);
     }
  }

  async getIdCPD(){
    try {
    let idCPD : any = await this.ahorrosService.getIdCPD();
    this.idCPD = idCPD.data[1];
    console.log(this.idCPD);
    } catch(error){
      console.log(error);
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

    this.mensaje2 = this.mensaje3 = "";
    
    if(this.form.value.moneda == 1 && this.idCPP != null){
      this.mensaje2 = "Ya tenés un objetivo en esa moneda.";
    }else if(this.form.value.moneda == 2 && this.idCPD != null){
      this.mensaje3 = "Ya tenés un objetivo en esa moneda.";
    }

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
