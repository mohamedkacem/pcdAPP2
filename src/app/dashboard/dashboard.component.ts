/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
import { Component, OnInit } from '@angular/core';
import {DataService} from '../data/data.service';
import {dictionnaire} from '../dictionnaire';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import {MotDialogComponent} from '../mot-dialog/mot-dialog.component';
import {MatDialog} from '@angular/material';
import { Word } from '../shared/Word';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private dataService: DataService,public dialog: MatDialog) {
  }

  displayedColumns = ['frenchWord', 'tunisianWord', 'delete'];
  dataSource = new dictionnaireDataSource(this.dataService);

  deletemot(word: Word) {
    
    
      this.dataService.deleteData(word._id).subscribe(data=>{
        console.log(data);
        
      });
   }
  openDialog(): void {
    let dialogRef = this.dialog.open(MotDialogComponent, {
      width: '600px',
      data: 'Ajouter mot'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      //this.dataService.adddictionnaire(result.data);
      this.dataSource = new dictionnaireDataSource(this.dataService);
    });
  }
}

export class dictionnaireDataSource extends DataSource<any> {

  constructor(private dataService: DataService) {
    super();
  }
//dataSource = new dictionnaireDataSource(this.dataService);
  connect(): Observable<dictionnaire[]> {
   return this.dataService.getData();
}

  disconnect() {
  }
  
}
