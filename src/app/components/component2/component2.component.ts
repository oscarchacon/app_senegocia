import { Component, OnInit, Input } from '@angular/core';
import { PostBody } from 'src/app/classes/post-body';
import { Service1Service } from 'src/app/services/service1.service';
import { BsModalRef, BsModalService, BsLocaleService } from 'ngx-bootstrap';
import { ModalAddComponent } from '../modals/modal-add/modal-add.component';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Input("dataComponent2") data: PostBody[] = [];
  bsModalRef: BsModalRef;

  constructor(private service1: Service1Service,
              private modalService: BsModalService) { }

  ngOnInit() {
  }

  abrirModalAgregar() : void {
    const conf = {
			initialState: {
				dataLista: this.data
			},
			class: 'modal-lg'
    };

    this.bsModalRef = this.modalService.show(ModalAddComponent, conf);
  }

}
