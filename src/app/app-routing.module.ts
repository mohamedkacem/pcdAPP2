import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MediaComponent } from 'src/app/media/media.component';
import { UserInComponent } from './user-in/user-in.component';
import { TraducteurComponent } from './traducteur/traducteur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  
  { path: '' , redirectTo: '/media' , pathMatch: 'full'}  ,
    {path : 'register', component : RegisterComponent   },
    {path : 'login', component : LoginComponent },
    {path : 'media' , component : MediaComponent},
    {path : 'dashboard' , component : DashboardComponent},
   
    
 {
   path: 'home' ,
   component: UserInComponent , 
   children: [ 
                  {path: 'traducteur' ,
                                        component: TraducteurComponent}
   ]
   
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
