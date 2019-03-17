import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BaseComponent } from '../base/base.component';
import { ArticleService } from 'src/app/services/article.service';
import { BaseRequestModel } from 'src/app/entities/base-request-model';
import { Entity } from 'src/app/entities/entity';
import { CategoryService } from 'src/app/services/category.service';
import { TagService } from 'src/app/services/tag.service';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.sass']
})
export class AddArticleComponent extends BaseComponent<any> implements OnInit {
 
public Editor = ClassicEditor;
categories:any[]
tags:any[]
authors:any[]
  constructor(public service:ArticleService,private categoryService:CategoryService,private tagService:TagService,private authorService:AuthorService) {
    super(service)
    this.model.body='Write your article here'
   }

  ngOnInit() {
   
    this.loadCategories();
    this.loadTags();
    this.loadAuthors();
  }


  loadCategories(){
    var r=new BaseRequestModel();
    r.page=-1;
    r.orderBy="createdBy"
    this.categoryService.searchCategory(r).subscribe(res=>{
             this.categories=res;
             console.log(res)
    });
  }

  loadTags(){
    var r=new BaseRequestModel();
    r.page=-1;
    r.orderBy="createdBy"
    this.tagService.search(r).subscribe(res=>{
             this.tags=res;
             console.log(res)
    });
  }

  loadAuthors(){
    var r=new BaseRequestModel();
    r.page=-1;
    r.orderBy="createdBy"
    this.authorService.search(r).subscribe(res=>{
             this.authors=res;
             console.log(res)
    });
  }

  reset() {
    this.model=new Entity();
  }

}
