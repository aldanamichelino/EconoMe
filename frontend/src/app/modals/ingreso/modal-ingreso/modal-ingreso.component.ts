import { Component, OnInit } from '@angular/core';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-modal-ingreso',
  templateUrl: './modal-ingreso.component.html',
  styleUrls: ['./modal-ingreso.component.css']
})
export class ModalIngresoComponent implements OnInit {

  private modalRef;
  operacion : boolean = false;
  constructor(private modalService : ModalManager) { }

  ngOnInit() {
  }
  open(modal){
    this.modalRef = this.modalService.open(modal)
  }

  accion() {
    this.operacion = true;

    // this.operacion = false;
  }
}
