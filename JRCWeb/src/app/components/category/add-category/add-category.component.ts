import { Category } from './../../../category';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Entity } from 'src/app/entities/entity';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent extends BaseComponent<Category> implements OnInit {
  reset() {
   this.category=new Category();
  }
category:Category
  constructor(public service:CategoryService) {
   
    super(service)
    this.category=new Category();
   }

  ngOnInit() {
  
  }
addCategory(){
  this.service.addCategory(this.category).subscribe(res=>{
    console.log("success")
  })
}
}
