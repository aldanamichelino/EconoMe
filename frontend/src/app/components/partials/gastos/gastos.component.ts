import { Component, OnInit } from '@angular/core';
import { GastosService } from 'src/app/services/gastos.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})

export class GastosComponent implements OnInit {

  nombre : string = '';
  gastos : any [] = [];
  form : FormGroup;
  moneda : any [] = [];

  constructor(private gastosService : GastosService) { }

  ngOnInit() {
    if(localStorage.getItem('usuario') != null) {
      this.nombre = localStorage.getItem('nombre');
    }

    this.traerGastos();

    this.form = new FormGroup({
      'monto_g' : new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      //cada input, y le ponemos si arranca vacio y si tiene validadores, se pueden enviar muchos validators pero si o si dentro del array. Matchea con el formControlName del input
      'id_moneda_g' : new FormControl('', [Validators.required]),
      'detalle_g' : new FormControl('', [Validators.required]),
      'vencimiento_g' : new FormControl('', [Validators.required, Validators.pattern(/^\d{2}[.-/]\d{2}[.-/]\d{4}$/)]),
      'banco_g' : new FormControl('', [Validators.required]),
      'id_categoria' : new FormControl('', [Validators.required]),
      'pagado' : new FormControl('', [Validators.required]),
      'fecha' : new FormControl('', [Validators.required, Validators.pattern(/^\d{2}[.-/]\d{2}[.-/]\d{4}$/)])
    })

}

async traerGastos() {
  try {
    let gastos_ok : any = await this.gastosService.getGastos();
    this.gastos = gastos_ok.data;
  } catch(error){
    console.log(error);
  }
}

  async getMoneda(){
    try {
    let moneda : any = await this.gastosService.getMoneda();
    this.moneda = moneda.data;
    console.log(this.moneda);
  } catch(error){
    console.log(error);
  }
  }

  async nuevoGasto(){
    let nuevo_gasto : any = await this.gastosService.nuevoGasto(this.form.value);
    console.log(this.form.value);
    
    if(nuevo_gasto != null){
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Nuevo gasto agregado',
        showConfirmButton: false,
        timer: 1500
    });

    this.form.reset();
        //this.router.navigate(['Login])

      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un error'
        });
      }
  }
}
