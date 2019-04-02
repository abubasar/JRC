import { BaseService } from 'src/app/services/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class FatawaService extends BaseService<any> {
  constructor(public http:HttpClient,url:UrlService) { 
    super(http,url.fatawa)
  }

  addFatawa(model:any):Observable<any>{
    return this.http.post('http://localhost:25442/api/fatawa/add-fatawa',model);
  }
}
