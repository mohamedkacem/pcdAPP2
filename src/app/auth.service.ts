import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { baseURL } from './shared/BaseURL';
import { User } from './shared/User';
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  token;
 
  constructor(private http: HttpClient,private router: Router) { }
  
  login(username: string, password: string): Observable<any> {
   
     const headers = new HttpHeaders({
       'ContentType' : 'application/json'
     });

   return  this.http.post<any>(baseURL + 'users/login', 
            {username: username,password: password}, {headers: headers});
    };
      

 signup(user: any): Observable<User> {
   
      const headers = new HttpHeaders({
        'ContentType' : 'application/json'
      });
 
    return  this.http.post<User>(baseURL + 'users/signup', 
            user, {headers: headers});
     };
       
    }
  

