import { Component, OnInit } from '@angular/core';
import { GastoService } from 'src/app/services/gasto.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {

  gastos : any [] = [];
  form : FormGroup;
  moneda : any [] = [];
  categoria : any [] = [];

  constructor(private gastoService : GastoService) { }

  ngOnInit() {

    this.getMoneda();

    this.getCategoriaGastos();

    this.form = new FormGroup({
      'monto' : new FormControl('', [Validators.required]),
      //cada input, y le ponemos si arranca vacio y si tiene validadores, se pueden enviar muchos validators pero si o si dentro del array. Matchea con el formControlName del input
      'moneda' : new FormControl('', [Validators.required]),
      'detalle' : new FormControl('', [Validators.required]),
      'vencimiento' : new FormControl('', [Validators.required]),
      'banco' : new FormControl('', [Validators.required]),
      'categoria' : new FormControl('', [Validators.required]),
      'pagado' : new FormControl('', [Validators.required]),
      'fecha' : new FormControl('', [Validators.required])
    })
  }


  async getMoneda(){
    try {
    let moneda : any = await this.gastoService.getMoneda();
    this.moneda = moneda.data;
    console.log(this.moneda);
    } catch(error){
      console.log(error);
     }
  }

  async getCategoriaGastos(){
    try {
    let categoriaGastos : any = await this.gastoService.getCategoriaGastos();
    this.categoria = categoriaGastos.data;
    console.log(this.categoria);
  } catch(error){
    console.log(error);
  }
  }

  elegirMoneda(id) {
    console.log(id)
    this.form.value.moneda = id;
    console.log(this.form.value)
  }

  elegirCategoriaGastos(id) {
    console.log(id)
    this.form.value.categoria = id;
    console.log(this.form.value)
  }

  pagado(id){
    console.log(id)
    this.form.value.pagado = id;
  }
  

  async nuevoGasto(){
    
    let nuevo_gasto : any = await this.gastoService.nuevoGasto(this.form.value);
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
