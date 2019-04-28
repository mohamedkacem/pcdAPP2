import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
userr =  {
                firstname: '',
                lastname: '', 
                address : '',
                email : '',
                password : '',
                username:'' ,
                BirthDate: ''
}
  constructor(private registerservice: AuthService) { }

  ngOnInit() {

  
  }

  signup() {
    console.log(this.userr);
    this.registerservice.signup(this.userr).subscribe(
      (next) => alert("user is registred")
    )
  }

}
