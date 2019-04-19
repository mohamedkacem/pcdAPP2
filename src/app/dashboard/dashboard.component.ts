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
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DataService } from '../data/data.service';
import { dictionnaire } from '../dictionnaire';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { MotDialogComponent } from '../mot-dialog/mot-dialog.component';
import { MatDialog, MatTable } from '@angular/material';
import { Word } from '../shared/Word';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('table') table: MatTable<any>;
  constructor(private dataService: DataService, public dialog: MatDialog, private router: Router) {
  }
  dataSource: Array<any>
  displayedColumns = ['frenchWord', 'tunisianWord', 'delete'];

  ngOnInit() {
    this.dataService.getData().subscribe((res) => {
      this.dataSource = res;
      console.log(res);
    }, err => {

    });
    // this.dataSource = new dictionnaireDataSource(this.dataService);
    // console.log(this.dataSource);
  }

  deletemot(word: Word, i: any, dataSource: Array<any>) {
    this.dataService.deleteData(word._id).subscribe(data => {
      this.dataSource.splice(i, 1);
      this.table.renderRows();
      console.log(data);

    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MotDialogComponent, {
      width: '600px',
      data: 'Ajouter mot'
    });
    dialogRef.afterClosed().subscribe(data => {
      let object = {
        frenchWord: data.createdWord.frenchWord,
        tunisianWord: data.createdWord.tunisianWord,
        _id: data.createdWord._id
      }
      // let localArray: Array<any> = this.dataSource;
      // localArray.push(object);
      this.dataSource.push(object);
      this.table.renderRows();
      console.log(this.table.dataSource);
    })
    // dialogRef.componentInstance.event.subscribe((result) => {
    //   console.log(result);
    // });
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
