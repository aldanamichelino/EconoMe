import { Component, OnInit } from '@angular/core';
import { IngresosService } from 'src/app/services/ingresos.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { GastosService } from 'src/app/services/gastos.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})

export class IngresoComponent implements OnInit {

  nombre : string = '';
  ingreso : any [] = [];
  ingresoDolares : any [] = [];
  form : FormGroup;
  moneda : any [] = [];
  categorias : any [] = [];

  constructor(private ingresosService : IngresosService, private gastosService : GastosService) { }

  ngOnInit() {
    // if(localStorage.getItem('usuario') != null) {
    //   this.nombre = localStorage.getItem('nombre');
    // }

    this.getCategoriaIngresos();
    this.getMoneda();

    this.form = new FormGroup({
      'monto' : new FormControl('', [Validators.required]),
      //cada input, y le ponemos si arranca vacio y si tiene validadores, se pueden enviar muchos validators pero si o si dentro del array. Matchea con el formControlName del input
      'moneda' : new FormControl('', [Validators.required]),
      'categoria' : new FormControl('', [Validators.required]),
      'fecha' : new FormControl('', [Validators.required])
    })


}

// async getMoneda(){
//   try {
//   let moneda : any = await this.ingresosService.getMoneda();
//   this.moneda = moneda.data;
//   console.log(this.moneda);
//   } catch(error){
//     console.log(error);
//    }
// }


  async getCategoriaIngresos(){
    try {
    let categoriaIngresos : any = await this.ingresosService.getCategorias();
    this.categorias = categoriaIngresos.data;
    console.log(categoriaIngresos);
    } catch(error){
    console.log(error);
    }
  }

  elegirMoneda(id) {
    console.log(id)
    this.form.value.moneda = id;
    console.log(this.form.value)
  }

  elegirCategoriaIngresos(id) {
    console.log(id)
    this.form.value.categoria = id;
    console.log(this.form.value.categoria)
  }

  async nuevoIngreso(){
    
    let nuevo_ingreso : any = await this.ingresosService.postIngreso(this.form.value);
    console.log(this.form.value);
    
    if(nuevo_ingreso != null){
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
