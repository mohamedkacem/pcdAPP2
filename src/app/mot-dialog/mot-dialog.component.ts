import { Component, OnInit , EventEmitter, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-mot-dialog',
  templateUrl: './mot-dialog.component.html',
  styleUrls: ['./mot-dialog.component.scss']
})
export class MotDialogComponent implements OnInit {

  blogmot = {
    mot_fr: '',
    mot_tn: '',
    position: 0

  };
  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<MotDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.blogmot.position = this.dataService.dataLength();
    this.event.emit({data: this.blogmot});
    this.dialogRef.close();
  }

  categories = this.dataService.getCategories();
  ngOnInit() {
  }

}