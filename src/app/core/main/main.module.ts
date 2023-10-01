import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from '../../dashboard/add-user/add-user.component';
import { MainRoutingModule } from './main-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './menu/main.component';
import { PasswordInputComponent } from '../../auth/password-input/password-input.component';
import { StoreModule } from '@ngrx/store';
import {  globalReducers } from 'src/app/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from 'src/app/store/effects/register.effect';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { ProfileEffects } from 'src/app/store/effects/profile.effect';
import { ManagerEffect } from 'src/app/store/effects/manager.effect';
import { StudentsEffect } from 'src/app/store/effects/students.effect';
import { TeachersEffect } from 'src/app/store/effects/teachers.effect';
import { StudentsComponent } from 'src/app/dashboard/students/students.component';
import { TeachersComponent } from 'src/app/dashboard/teachers/teachers.component';
import { ManagerComponent } from 'src/app/dashboard/manager/manager.component';
import { GroupComponent } from 'src/app/dashboard/group/group.component';
import { UserComponent } from 'src/app/dashboard/user/user.component';
import { CreateCourseComponent } from 'src/app/dashboard/create-course/create-course.component';
import { CoursesEffect } from 'src/app/store/effects/courses.effect';
import { ModuleEffect } from 'src/app/store/effects/module.effect';
import { CreateCoursesEffect } from 'src/app/store/effects/createCurse.effect';
import { CreateGroupEffect } from 'src/app/store/effects/createGroup.effect';
import { CreateModuleComponent } from 'src/app/dashboard/create-module/create-module.component';
import { CreateModuleEffect } from 'src/app/store/effects/createModule.effect';
import { AllCourseComponent } from 'src/app/dashboard/all-course/all-course.component';
import { UpdateCoursesEffect } from 'src/app/store/effects/updateCourse.effect';
import { AllGroupComponent } from 'src/app/dashboard/all-group/all-group.component';
import { GroupsEffect } from 'src/app/store/effects/groups.effect';
import { UpdateModuleNameAndCountEffect } from 'src/app/store/effects/updateModuleNameAndCount.effect';

@NgModule({
  declarations: [
    AddUserComponent,
    MainComponent,
    StudentsComponent,
    TeachersComponent,
    ManagerComponent,
    GroupComponent,
    UserComponent,
    CreateCourseComponent,
    CreateModuleComponent,
    AllCourseComponent,
    AllGroupComponent,
  ],
  
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    PasswordInputComponent,
    LoaderComponent,
    StoreModule.forFeature('register',globalReducers),
    EffectsModule.forFeature(
      [
        RegisterEffect,
        ProfileEffects,
        ManagerEffect,
        StudentsEffect,
        TeachersEffect,
        CoursesEffect,
        ModuleEffect,
        CreateCoursesEffect,
        CreateGroupEffect,
        CreateModuleEffect,
        UpdateCoursesEffect,
        GroupsEffect,
        UpdateModuleNameAndCountEffect
      ])
  ],

})
export class MainModule { }
