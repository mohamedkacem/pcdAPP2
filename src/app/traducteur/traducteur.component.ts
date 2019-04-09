import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { equal } from 'assert';
import { Word } from '../shared/Word'
import { TraducteurService } from '../traducteur.service'
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-traducteur',
  templateUrl: './traducteur.component.html',
  styleUrls: ['./traducteur.component.scss']
})
export class TraducteurComponent implements OnInit {

  motfran : string;
  mottun : String;
  //word : Word[];
  tunisianWord: String  ;

 

  constructor(private traducteurService : TraducteurService) {
   }
  
  ngOnInit() {}

  getWord(): void {
    this.traducteurService.getWord(this.motfran).subscribe(data=>{
      this.tunisianWord=data.tunisianWord;
      console.log(data);
      
    });
  }
}