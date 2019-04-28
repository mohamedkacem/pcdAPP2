import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

//import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
password : string;
name : string ;
  constructor(private authService : AuthService,private router: Router) { }



  ngOnInit() {
  }


  auth() {

     this.authService.login(this.name,this.password).subscribe(data => {
       console.log("userrrrrrrrrrrrr" + data.admin);
       alert(data.admin);
      if(data.admin == true) {
        this.router.navigate(['dashboard']);
      }
      else 
      this.router.navigate(['home']);
      },
    error => console.log(error));

  }
}
