import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from './store/effects';
import { AuthRoutingModule } from './auth-routing.module';
import { LoaderComponent } from '../shared/loader/loader.component';
import { PasswordInputComponent } from '../core/password-input/password-input.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    LoaderComponent,
    PasswordInputComponent,
    StoreModule.forFeature('auth',loginReducer),
    EffectsModule.forFeature(LoginEffect)
  ],
  exports:[LoginComponent]
})
export class AuthModule { }
