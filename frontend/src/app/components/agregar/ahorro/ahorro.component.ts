import { Component, OnInit } from '@angular/core';
import { AhorrosService } from 'src/app/services/ahorros.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahorro',
  templateUrl: './ahorro.component.html',
  styleUrls: ['./ahorro.component.css']
})
export class AhorroComponent implements OnInit {

  ahorros : any [] = [];
  form : FormGroup;
  moneda : any [] = [];

  constructor(private ahorrosService : AhorrosService, private router: Router) { }

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

}
