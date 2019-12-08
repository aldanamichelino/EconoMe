import { Component, OnInit } from '@angular/core';
import { IngresosService } from 'src/app/services/ingresos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  ingresos : any [] = [];

  constructor(private ingresosServices : IngresosService, private router : Router) { }

  async ngOnInit() {
    //Aca cargamos los ingresos como peticion a nuestro backend

    let respuesta_server : any = await this.ingresosServices.getIngresos() //get base service
    //respuesta_server devuelve un array de objetos
  }


}
