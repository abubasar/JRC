import { CategoryService } from './../../../services/category.service';
import { Entity } from 'src/app/entities/entity';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { BaseRequestModel } from 'src/app/entities/base-request-model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent extends BaseComponent<any> implements OnInit {
  reset() {
  console.log("not implemented")
  }
categories:any[]
  constructor(public service:CategoryService) {
    super(service)
    this.searchRequest=new BaseRequestModel();
    this.searchRequest.page=1
    this.searchRequest.orderBy="createdBy"
    this.searchRequest.isAscending=false;
   }

  ngOnInit() {
   this.service.searchCategory(this.searchRequest).subscribe(res=>{
     this.categories=res;
     console.log(res)
     this.search();
     this.searchForPaging()
   })
  }
 
  
  
}
