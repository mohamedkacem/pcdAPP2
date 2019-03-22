import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
password ;
email ;
  constructor(private router: Router) { }

  ngOnInit() {
  }


  auth() {

     if( this.password=== 'user' && this.email=== 'user')  {
       this.router.navigate(['/home']);
     }
     if( this.password=== 'admin' && this.email=== 'admin')  {
       //admin template
      this.router.navigate(['/dashboard']);
    }

  }
}
