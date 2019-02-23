import { Component, OnInit } from '@angular/core';
import { PostBody } from 'src/app/classes/post-body';
import { BsModalRef } from 'ngx-bootstrap';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {

  public Post: PostBody;
  public listaUsersId: number[];

  respaldoPost: PostBody = new PostBody;

  constructor(public bsModalRef: BsModalRef,
              private service1: Service1Service) {
  }

  ngOnInit() {
    this.respaldoPost = Object.assign({}, this.Post);
  }

  editarData(PostModificado: PostBody): void {
    this.service1.editarPost(PostModificado).subscribe(
      x => {
        if(x) {
          this.bsModalRef.hide();
        } else {
          //PostModificado = this.respaldoPost;
          PostModificado.id = this.respaldoPost.id;
          PostModificado.userId = this.respaldoPost.userId;
          PostModificado.title = this.respaldoPost.title;
          PostModificado.body = this.respaldoPost.body;
          this.cancelar();
        }
      },
      error => {
        //PostModificado = this.respaldoPost;
        PostModificado.id = this.respaldoPost.id;
        PostModificado.userId = this.respaldoPost.userId;
        PostModificado.title = this.respaldoPost.title;
        PostModificado.body = this.respaldoPost.body;
        this.cancelar();
      }
    );
  }

  cancelar(): void {
    //this.Post = this.respaldoPost;
    this.Post.id = this.respaldoPost.id;
    this.Post.userId = this.respaldoPost.userId;
    this.Post.title = this.respaldoPost.title;
    this.Post.body = this.respaldoPost.body;
    this.bsModalRef.hide();
  }

}
