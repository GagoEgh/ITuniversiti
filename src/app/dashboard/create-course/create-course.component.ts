import { Component, EnvironmentInjector, Injectable, OnInit } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs';
import { showMsg } from 'src/app/core/feature/show_swal';
import { createCourseStart } from 'src/app/store/action';
import { CreateCourseInterface } from 'src/app/store/type/createCourse.interface';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit{
  name = new FormControl('',[Validators.required])
  constructor(
    private store:Store,
    private injector :EnvironmentInjector
  ){}

  ngOnInit(): void {

  }

  createCourse(){

    if(this.name.valid){
      const course:CreateCourseInterface|null = {
        name:this.name.value
      }
      this.store.dispatch(createCourseStart(course));
      this.injector.runInContext(()=>{
        showMsg(this.name);
      })
      

    }
  }
}
