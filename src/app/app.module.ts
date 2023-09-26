import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule }   from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppInterceptor } from './app.interceptor';
import { AuthGuard } from './core/guards/auth.guard';

import { NotFoundComponent } from './core/not-found/not-found.component';
import { HeaderModule } from './core/header/header.module';
import { StudentsComponent } from './dashboard/students/students.component';
import { TeachersComponent } from './dashboard/teachers/teachers.component';
import { ManagerComponent } from './dashboard/manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    StudentsComponent,
    TeachersComponent,
    ManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
