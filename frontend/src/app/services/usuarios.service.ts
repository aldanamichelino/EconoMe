import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends BaseService{

  async getUsuario() {
    try {
      this.setEndPoint('/usuarios');
      console.log(this.get());
      return this.get();
    } catch (error) {
      console.log(error);
    }
  }

  async getUsuarios() { //PARA QUE EL ADMIN VEA TODOS LOS USUARIOS
    try {
      this.setEndPoint('/admin/usuarios');

      return this.get();
      
    } catch (error) {
      console.log(error);
    }
  }

  async postUsuario(obj) {
    try {
      this.setEndPoint('/registro');
      return this.post(obj);

    } catch (error) {
      console.log(error);
    }
  }
  
  async validarUsuario() {
    try {
      this.setEndPoint('/registro/:codigo_email_u');
      return this.get();

    } catch (error) {
      console.log(error);
    }
  }

  async loginUsuario(obj) {
    try {
      this.setEndPoint('/auth/login');
      return this.post(obj);

    } catch (error) {
      console.log(error);
    }
  }

  async putPassword(obj) {
    this.setEndPoint('/usuarios');
    return this.put(obj);
  }
}

