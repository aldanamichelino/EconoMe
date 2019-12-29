import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AhorrosService extends BaseService {

  async getAhorrosMonth(){
    try {
      this.setEndPoint('/ahorros');
      return this.get();

    } catch(error){
      console.log(error);
    }
  }

  async getAhorrosUsuarios(){
    try {
      this.setEndPoint('/ahorros');
      return this.get();

    } catch(error){
      console.log(error);
    }
  }

  async getAhorrosDetalladosUsuario(){
    try {
      this.setEndPoint('/ahorros');
      return this.get();

    } catch(error){
      console.log(error);
    }
  }

  async getMoneda(){
    try {
      this.setEndPoint('/ahorros/monedas');
      return this.get();
    } catch(error){
      console.log(error);
    }
  }

  async getCuentaProyecto(){
    try {
      this.setEndPoint('/ahorros/cuentaProyecto');
      return this.get();
    } catch(error){
      console.log(error);
    }
  }

  async getCategoriaGastos(){
    try {
      this.setEndPoint('/ahorros/categoria');
      return this.get();
    } catch(error){
      console.log(error);
    }
  }

  async insertarAhorro(obj){
    try {
      this.setEndPoint('/ahorros');
      return this.post(obj);
    } catch(error){
      console.log(error);
    }
  }

}
