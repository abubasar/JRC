import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
user:any
constructor(private _auth:AuthService,private _router:Router) { }

ngOnInit() {
}

loginUser(){
 this._auth.loginUser(this.user)
 .subscribe(
  res=>{
    console.log(res)
    //jwt 3rd step:save that token in the browsers local storage
    localStorage.setItem('token',res.token)
    this._router.navigate(['admin'])

  }, 
   err=>console.log(err)
 )
}

}
