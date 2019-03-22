import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {DataService} from './data/data.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './nav/nav.component';
import { MediaComponent } from './media/media.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserInComponent } from './user-in/user-in.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatGridListModule } from '@angular/material';
import { TraducteurComponent } from './traducteur/traducteur.component';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MotDialogComponent } from './mot-dialog/mot-dialog.component';
import { SidenavComponent } from './sidenav/sidenav.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    MediaComponent,
    AboutComponent,
    ContactComponent,
    UserInComponent,
    TraducteurComponent,
    ChatComponent,
    DashboardComponent,
    MotDialogComponent,
    SidenavComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule ,
    FormsModule,
    MDBBootstrapModule,
    MatGridListModule
    
    ],
    

    providers: [DataService],
    entryComponents: [
      MotDialogComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
