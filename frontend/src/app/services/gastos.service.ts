import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class GastosService extends BaseService {

  async getGastos(){
    try {
      this.setEndPoint('/gastos');
      return this.get();

    } catch(error){
      console.log(error);
    }
  }

  async getSumaGastosMonth(){
    try {
      this.setEndPoint('/gastos');
      return this.get();

    } catch(error){
      console.log(error);
    }
  }

  async getGastosMonth(){
    try {
      this.setEndPoint('/gastos/currentmonth');
      return this.get();

    } catch(error){
      console.log(error);
    }
  }

  async nuevoGasto(obj){
    try {
      this.setEndPoint('/gastos');
      return this.post(obj);
    } catch(error){
      console.log(error);
    }
  }

  async getMoneda(){
    try {
      this.setEndPoint('/gastos/monedas');
      return this.get();
    } catch(error){
      console.log(error);
    }
  }

  async getCategoriaGastos(){
    try {
      this.setEndPoint('/gastos/categoria');
      return this.get();
    } catch(error){
      console.log(error);
    }
  }
  
}
