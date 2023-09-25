import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from '../../components/add-user/add-user.component';
import { MainRoutingModule } from './menu/main-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { PasswordInputComponent } from '../password-input/password-input.component';



@NgModule({
  declarations: [
    AddUserComponent,
    MainComponent
  ],
  
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    PasswordInputComponent
  ],

})
export class MainModule { }
