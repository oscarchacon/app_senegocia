import { Component, OnInit, Input } from '@angular/core';
import { Service1Service } from 'src/app/services/service1.service';
import { PostBody } from 'src/app/classes/post-body';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  @Input() data: PostBody[] = [];

  constructor(private service1: Service1Service) { }

  ngOnInit() {
  }

}
