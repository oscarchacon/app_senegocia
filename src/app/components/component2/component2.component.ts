import { Component, OnInit, Input } from '@angular/core';
import { PostBody } from 'src/app/classes/post-body';
import { Service1Service } from 'src/app/services/service1.service';
import { BsModalRef, BsModalService, BsLocaleService } from 'ngx-bootstrap';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Input("dataComponent2") data: PostBody[] = [];

  constructor(private service1: Service1Service,
              private modalServive: BsModalService) { }

  ngOnInit() {
  }

  openModalAdd() : void {

  }

}
