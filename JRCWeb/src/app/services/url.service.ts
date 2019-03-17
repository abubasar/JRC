import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  baseUrl:string='http://localhost:25442/api/'
article:string
category:string
author:string
tag:string
  constructor() { 
    this.article=this.baseUrl+'article'
    this.category=this.category+'category'
    this.tag=this.baseUrl+'tag'
    this.author=this.baseUrl+'author'
  }
}
