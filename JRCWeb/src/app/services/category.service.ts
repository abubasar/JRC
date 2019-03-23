import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { BaseRequestModel } from '../entities/base-request-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<any> {

  constructor(http:HttpClient,url:UrlService) {
    super(http,url.category)
   }

   searchCategory(request:BaseRequestModel):Observable<any>{
   
    return this.http.post<any>('http://localhost:25442/api/category/search',request);
 }

 addCategory(model:any):Observable<any>{
   
  return this.http.post<any>('http://localhost:25442/api/category/add',model);
}

editCategory(model:any):Observable<any>{
   
  return this.http.post<any>('http://localhost:25442/api/category/edit',model);
}
}
