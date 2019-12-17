import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class GastoService extends BaseService {

  async nuevoGasto(obj){
    try {
      this.setEndPoint('/gasto');
      return this.post(obj);
    } catch(error){
      console.log(error);
    }
  }

  async getMoneda(){
    try {
      this.setEndPoint('/gasto/monedas');
      return this.get();
    } catch(error){
      console.log(error);
    }
  }

  async getCategoriaGastos(){
    try {
      this.setEndPoint('/gasto/categoria');
      return this.get();
    } catch(error){
      console.log(error);
    }
  }

}
