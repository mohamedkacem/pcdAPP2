
import {Injectable} from '@angular/core';
import {dictionnaire} from '../dictionnaire';
import {Observable, of} from 'rxjs';

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

  constructor() {
  }

  getData(): Observable<dictionnaire[]> {
    return of<dictionnaire[]>(this.ELEMENT_DATA);
  }

  getCategories() {
    return this.categories;
  }

  adddictionnaire(data) {
    this.ELEMENT_DATA.push(data);
  }

  deletedictionnaire(index) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}
