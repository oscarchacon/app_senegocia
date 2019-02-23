import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { PostBody } from 'src/app/classes/post-body';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {

  public dataLista: PostBody[];
  nuevoPost: PostBody = new PostBody;

  listaUserId: number[];

  constructor(public bsModalRef: BsModalRef,
              private service1 : Service1Service) { }

  ngOnInit() {
    if(this.dataLista && this.dataLista.length > 0){
      this.listaUserId = this.dataLista.map(item => item.userId).filter((value, index, self) => self.indexOf(value) === index);
    }
  }

  guardarData(nuevoPost: PostBody): void {
    this.service1.agregarNuevoPost(nuevoPost).subscribe(
      data => {
        if(data){
          this.dataLista.push(data);
          this.bsModalRef.hide();
        }
      },
      error => {

      }
    );
  }

}
