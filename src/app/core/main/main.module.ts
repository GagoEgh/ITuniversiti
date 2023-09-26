import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from '../../components/add-user/add-user.component';
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



@NgModule({
  declarations: [
    AddUserComponent,
    MainComponent
  ],
  
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    PasswordInputComponent,
    LoaderComponent,
    StoreModule.forFeature('register',globalReducers),
    EffectsModule.forFeature([RegisterEffect,ProfileEffects,ManagerEffect,StudentsEffect])
  ],

})
export class MainModule { }
