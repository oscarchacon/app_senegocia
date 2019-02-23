import { Component, OnInit } from '@angular/core';
import { PostBody } from 'src/app/classes/post-body';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  posts: PostBody[] = [];

  constructor(private service1: Service1Service) { }

  ngOnInit() {
    this.obtenerTodosPost();
  }

  obtenerTodosPost(): void {
    this.service1.obtenerPosts()
      .subscribe(data => {
        this.posts = data;
      });
  }

}
