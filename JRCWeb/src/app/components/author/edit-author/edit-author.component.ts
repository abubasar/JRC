import { AuthorService } from 'src/app/services/author.service';
import { Entity } from './../../../entities/entity';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent extends BaseComponent<any> implements OnInit {
  reset() {
    this.model=new Entity();
  }

  constructor(service:AuthorService,private activatedRoute:ActivatedRoute,private http:HttpClient) {
    super(service)
   }
author:any
  ngOnInit() {
      this.get(this.activatedRoute.snapshot.params.id);
    
  }

  get(id:string){
   this.http.get('http://localhost:25442/api/author/get/'+id).subscribe(res=>{
     console.log(res)
this.author=res;
   })
  }
}
