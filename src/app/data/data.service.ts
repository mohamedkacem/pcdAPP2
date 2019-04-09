
import {Injectable} from '@angular/core';
import {dictionnaire} from '../dictionnaire';
import {Observable, of, from} from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/BaseURL';
import { Word } from '../shared/Word';
import { Identifiers } from '@angular/compiler';



@Injectable()
export class DataService {

  ELEMENT_DATA: dictionnaire[] = [
    {position :0,mot_fr: 'manger', mot_tn: 'yekel'},
    {position :1,mot_fr: 'eaux', mot_tn: 'mé'},
    {position :2,mot_fr: 'table', mot_tn: 'tawla'},
    
  ];
  categories = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Android Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'}
  ];

  constructor(private http: HttpClient,private router: Router) {}

  AddWord(french: string, tunisian: string): Observable<Word> {
   
    const headers = new HttpHeaders({
      'ContentType' : 'application/json'
    });

  return  this.http.post<Word>(baseURL + 'dict/Add', 
           {frenchWord:french ,tunisianWord: tunisian}, {headers: headers});
   
      
  }
  getData(): Observable<dictionnaire[]> {
    // return of<dictionnaire[]>(this.ELEMENT_DATA);

    return this.http.get<dictionnaire[]>(baseURL + 'dict/All');
  }

  deleteData(id: string){
    return this.http.delete(baseURL + 'dict/' + id);
  }
}


  

  

  

