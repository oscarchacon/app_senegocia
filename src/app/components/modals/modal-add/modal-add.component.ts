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

  public dataArr: PostBody[];
  newPost: PostBody = new PostBody;

  listUserId: number[];

  constructor(public bsModalRef: BsModalRef,
              private service1 : Service1Service) { }

  ngOnInit() {
    if(this.dataArr && this.dataArr.length > 0){
      this.listUserId = this.dataArr.map(item => item.userId).filter((value, index, self) => self.indexOf(value) === index);
    }
  }

  saveData(newPost: PostBody): void {
    this.service1.addNewPost(newPost).subscribe(
      data => {
        if(data){
          this.dataArr.push(data);
          this.bsModalRef.hide();
        }
      },
      error => {

      }
    );
  }

}
