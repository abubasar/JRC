import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FatawaService {

  constructor(private http:HttpClient) { }

  addFatawa(model:any):Observable<any>{
    return this.http.post('http://localhost:25442/api/fatawa/add-fatawa',model);
  }
}
