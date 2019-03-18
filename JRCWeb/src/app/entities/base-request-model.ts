import { Entity } from './entity';

export class BaseRequestModel extends Entity {
    orderBy:string
    isAscending:boolean 
    page:number
    perPageCount:number
    keyword:string
    category:string
    author:string
    tag:string
   
}
