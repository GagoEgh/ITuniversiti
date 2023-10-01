import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFormError } from 'src/app/core/feature/error';
import { allCourseStart, createModuleStart } from 'src/app/store/action';
import { courses } from 'src/app/store/selectors';
import { CourseInterface } from 'src/app/store/type/course.interface';
import { DashboardService } from '../dashboard.services';
import { showMsg } from 'src/app/core/feature/show_swal';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['../add.scss']
})
export class CreateModuleComponent implements OnInit{

  newModule!:FormGroup;
  $courses!:Observable<CourseInterface[]|null>;

  constructor(
    private fb:FormBuilder,
    private store:Store,
    private injector :EnvironmentInjector
  ){}

  ngOnInit(): void {
    this.initForm();
    this.store.dispatch(allCourseStart());
    this.$courses = this.store.pipe(select(courses));
  }

  private initForm(){
    this.newModule = this.fb.group({
      name:['',[Validators.required]],
      course:['',[Validators.required]],
      count:['',[Validators.required]]
    })
  }

  getError(form:FormGroup,controlName:string,errorName:string):boolean|undefined{
    return  getFormError(form,controlName,errorName);
  }

  createModule(){

    if(this.newModule.valid){
      this.store.dispatch(createModuleStart(this.newModule.value));
      this.injector.runInContext(()=>{
        showMsg(this.newModule);
      })
     
    }
    // this.dashboardServiece.createModule(this.newModule.value)
    // .subscribe({
    //   next:(res)=>{
    //     console.log(res)
    //   }
    // })

  }
}
