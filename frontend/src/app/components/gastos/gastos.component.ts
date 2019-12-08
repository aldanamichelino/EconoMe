import { Component, OnInit } from '@angular/core';
import { GastosService } from 'src/app/services/gastos.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})

export class GastosComponent implements OnInit {

  nombre : string = '';
  gastos : any [] = [];

  constructor(private gastosService : GastosService) { }

  ngOnInit() {
    if(localStorage.getItem('usuario') != null) {
      this.nombre = localStorage.getItem('nombre');
    }

    this.traerGastos();

}

async traerGastos() {
  try {
    let gastos_ok : any = await this.gastosService.getGastos();
    console.log(gastos_ok);
    this.gastos = gastos_ok.data;
  } catch(error){
    console.log(error);
  }
}

async nuevoGasto(){
  try {



  } catch(error){

  }
}




}
