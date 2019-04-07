import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { equal } from 'assert';

@Component({
  selector: 'app-traducteur',
  templateUrl: './traducteur.component.html',
  styleUrls: ['./traducteur.component.scss']
})
export class TraducteurComponent implements OnInit {

  motfran : string;
  mottun : string;

  constructor() { }

  ngOnInit() {
  }

    dict= [
    { id: 1, motfr: 'bonjour', mottn: 'aslema'},
    { id: 1, motfr: 'cava', mottn: 'labes'},
    { id: 1, motfr: 'hotel', mottn: 'outiil'},
    { id: 1, motfr: 'restaurant', mottn: 'mateem'},
    { id: 1, motfr: 'maison', mottn: 'dar'},
    { id: 1, motfr: 'bonjour', mottn: 'aslema'}
  ]

  


  
  }
