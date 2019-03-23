import { Category } from './../../../category';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Entity } from 'src/app/entities/entity';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent extends BaseComponent<any> implements OnInit {
  reset() {
    this.model=new Category();
  }
category:any
  constructor(public service:CategoryService,private activatedRoute:ActivatedRoute,private http:HttpClient) {
    super(service)
   }

  ngOnInit() {
      this.get(this.activatedRoute.snapshot.params.id);
    
  }

  editCategory(){
    this.service.editCategory(this.category).subscribe(res=>{
      console.log("success")
    })
  }

  get(id:string){
   this.http.get('http://localhost:25442/api/category/get/'+id).subscribe(res=>{
     console.log(res)
this.category=res;
   })
  }

}
