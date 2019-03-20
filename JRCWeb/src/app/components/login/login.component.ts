import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
model:any
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit() {
  }

  loginUser(){
   this._auth.loginUser(this.model)
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
