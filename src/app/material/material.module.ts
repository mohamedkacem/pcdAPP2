import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {
 

  MatNativeDateModule,
        MatIconModule,
        MatDialogModule,
        MatSelectModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,MatRadioModule,MatListModule,MatGridListModule} from  '@angular/material';
        
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from  '@angular/material/datepicker';

@NgModule({
  imports: [MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    CommonModule,
    MatSidenavModule,
    MatTableModule,
    MatGridListModule],
    
   
  exports: [MatNativeDateModule,
    FormsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTableModule,

    

    MatRadioModule],
   
  })
   
 

export class MaterialModule { }
