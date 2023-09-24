import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { MainRoutingModule } from './main-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { PasswordInputComponent } from '../core/password-input/password-input.component';



@NgModule({
  declarations: [
    ProfileComponent,
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
