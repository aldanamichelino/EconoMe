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
  
}
