import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from '../../../components/add-user/add-user.component';
import { MainComponent } from '../main.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'main'
  },

  {
    path:'main',
    component:MainComponent,
    children:[
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path:'profile',
        component:AddUserComponent
      }
    ]
  },
  
 

  // {
  //     path:'profile',
  //     component:ProfileComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }