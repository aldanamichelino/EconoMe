import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  titulos : any [] = []; //titulos de la tabla
  public valores: any [] = []; //valores de la tabla

  constructor(private usuariosService : UsuariosService) { }

  async ngOnInit() {

    let usuarios_ok : any = await this.usuariosService.getUsuarios();

    if(this.valores.length == 0) {
      for(let usuario of usuarios_ok.data){
               
        this.valores.push(Object.values(usuario)); 
        }          
    }
    this.titulos = Object.keys(usuarios_ok.data[0]);  
  }

  openModal(i) {
    
  }


}
