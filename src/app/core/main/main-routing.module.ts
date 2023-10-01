import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from '../../dashboard/add-user/add-user.component';
import { MainComponent } from './menu/main.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard/dashboard.component';
import { StudentsComponent } from 'src/app/dashboard/students/students.component';
import { TeachersComponent } from 'src/app/dashboard/teachers/teachers.component';
import { ManagerComponent } from 'src/app/dashboard/manager/manager.component';
import { GroupComponent } from 'src/app/dashboard/group/group.component';
import { CreateCourseComponent } from 'src/app/dashboard/create-course/create-course.component';
import { CreateModuleComponent } from 'src/app/dashboard/create-module/create-module.component';
import { AllCourseComponent } from 'src/app/dashboard/all-course/all-course.component';
import { AllGroupComponent } from 'src/app/dashboard/all-group/all-group.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/'
  },

  {
    path:'',
    component:MainComponent,
    children:[
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      
      {
        path:'dashboard/:role',
        component:DashboardComponent
      },

      {
        path:'students',
        component:StudentsComponent
      },
      
      {
        path:'teachers',
        component:TeachersComponent
      },
      {
        path:'maneger',
        component:ManagerComponent
      },
      {
        path:'add',
        component:AddUserComponent
      },
      {
        path:'group',
        component:GroupComponent
      },
      {
        path:'create-course',
        component:CreateCourseComponent
      },
      {
        path:'create-module',
        component:CreateModuleComponent
      },
      {
        path:'course',
        component:AllCourseComponent
      },
      {
        path:'all-group',
        component:AllGroupComponent
      }

    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }