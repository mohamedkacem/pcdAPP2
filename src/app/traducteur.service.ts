import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseURL } from '../app/shared/BaseURL';

import { map } from 'rxjs/operators';
import { Word } from './shared/Word';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraducteurService {

  getWord(french: string): Observable<Word> {
    return this.http.get<Word>(baseURL + 'dict/'  + french).pipe(
      map(mots => mots[0])
    );
  }
  constructor(private http: HttpClient) { }

  
}
