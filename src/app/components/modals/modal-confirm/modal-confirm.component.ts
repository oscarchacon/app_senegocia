import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  public titulo: string;
  public mensaje: string;
  public pregunta: string;
  public dijo: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.dijo = new Subject;
  }

  confirmo(): void {
    let respuesta = true;
    //this.bsModalRef.hide();
    this.dijo.next(respuesta);
  }

  declino(): void {
    let respuesta = false;
    //this.bsModalRef.hide();
    this.dijo.next(respuesta);
  }

}
