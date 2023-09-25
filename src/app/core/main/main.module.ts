import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from '../../components/add-user/add-user.component';
import { MainRoutingModule } from './main-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './menu/main.component';
import { PasswordInputComponent } from '../../auth/password-input/password-input.component';



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
