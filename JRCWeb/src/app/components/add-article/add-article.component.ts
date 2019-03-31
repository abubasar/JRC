import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BaseComponent } from '../base/base.component';
import { ArticleService } from 'src/app/services/article.service';
import { BaseRequestModel } from 'src/app/entities/base-request-model';
import { Entity } from 'src/app/entities/entity';
import { CategoryService } from 'src/app/services/category.service';
import { TagService } from 'src/app/services/tag.service';
import { AuthorService } from 'src/app/services/author.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http:HttpClient, private router:Router,public service:ArticleService,private categoryService:CategoryService,private tagService:TagService,private authorService:AuthorService) {
    super(service);
    this.model.body='write here'
   
   }

  ngOnInit() {
   
    this.loadCategories();
    this.loadTags();
    this.loadAuthors();
    this.generateReferenceId();
  }

  generateReferenceId(){
    this.service.generateReferenceId().subscribe(res=>{
      console.log(res);
     this.model.referenceNo=res.referenceNo;
      
  });
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

  saveArticle(model:any){
    
    console.log(model.body)
   this.http.post('http://localhost:25442/api/article/add',model).subscribe(res=>{
     this.router.navigate(['article']);
     console.log(res)

   })
  }

}
