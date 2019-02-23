import { Component, OnInit, Input } from '@angular/core';
import { Service1Service } from 'src/app/services/service1.service';
import { PostBody } from 'src/app/classes/post-body';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ModalConfirmComponent } from '../modals/modal-confirm/modal-confirm.component';
import { ModalEditComponent } from '../modals/modal-edit/modal-edit.component';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  @Input() data: PostBody[] = [];

  bsModalRef: BsModalRef;

  constructor(private service1: Service1Service,
              private modalService: BsModalService) { }

  ngOnInit() {

  }

  preguntaeEliminaPost(Post: PostBody): void {
    const conf = {
			initialState: {
				titulo: "Eliminar Post",
        mensaje: "",
        pregunta: "¿Esta seguro de Eliminar el Post?",
			},
			class: 'modal-sm'
    };

    this.bsModalRef = this.modalService.show(ModalConfirmComponent, conf);
    this.bsModalRef.content.dijo.subscribe(
      respuesta => {
        if(respuesta){
          this.service1.eliminarPost(Post.id).subscribe(
            x => {
              if(x){
                this.data = this.data.filter(obj => obj != Post);
              }
            },
            error => {

            });
        }
        this.bsModalRef.hide();
      },
      error => {
        this.bsModalRef.hide();
      });
  }

  abrirModalEditarPost(Post: PostBody): void {
    let listaUserId: number[];

    if(this.data && this.data.length > 0){
      listaUserId = this.data.map(item => item.userId).filter((value, index, self) => self.indexOf(value) === index);
    }

    const conf = {
      initialState: {
        Post: Post,
        listaUsersId: listaUserId,
      },
      class: 'modal-lg'
    };

    this.bsModalRef = this.modalService.show(ModalEditComponent, conf);
  }

}
