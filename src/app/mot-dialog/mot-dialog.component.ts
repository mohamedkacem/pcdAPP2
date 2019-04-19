import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DataService } from '../data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mot-dialog',
  templateUrl: './mot-dialog.component.html',
  styleUrls: ['./mot-dialog.component.scss']
})
export class MotDialogComponent implements OnInit {


  mot_fr: string;
  mot_tn: string;



  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<MotDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService,
    private router: Router) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addWord(): void {
    this.dataService.AddWord(this.mot_fr, this.mot_tn).subscribe(data => {
      // console.log(data);
      this.dialogRef.close(data);
    },
      error => console.log(error));
  }


  ngOnInit() {
  }

}