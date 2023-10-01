import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFormError } from 'src/app/core/feature/error';
import { createGroupStart, moduleByCourseIdStart } from 'src/app/store/action';
import { courses, modules, teachers } from 'src/app/store/selectors';
import { CourseInterface } from 'src/app/store/type/course.interface';
import { ModuleInterface } from 'src/app/store/type/module.interface';
import { ProfileInterface } from '../type/profile.interface';
import { showMsg } from 'src/app/core/feature/show_swal';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls:['../add.scss']

})
export class GroupComponent implements OnInit{
  newGroup!:FormGroup;
  $teachers!:Observable<ProfileInterface[]|null>;
  $courses!:Observable<CourseInterface[]|null>;
  $modules!:Observable<ModuleInterface[]|null>;

  constructor(
    private fb:FormBuilder,
    private store:Store,
    private injector :EnvironmentInjector
  ){}

  ngOnInit(): void {
    
    this.$courses = this.store.pipe(select(courses));
    this.initForm();
    this.$teachers = this.store.pipe(select(teachers));

  }

  private initForm():void{
    this.newGroup = this.fb.group({
      name:['',[Validators.required]],
      course:['',[Validators.required]],
      module:['',[Validators.required]],
      teacher:['',[Validators.required]]
    })
  }

 
  getcourseId(){
    const id = this.newGroup?.get('course')?.value;
    if(id){
      this.store.dispatch(moduleByCourseIdStart(id));
      this.$modules =  this.store.pipe(select(modules));

    }
   
  }

  getError(form:FormGroup,controlName:string,errorName:string):boolean|undefined{
    return  getFormError(form,controlName,errorName);
  }

  createGroup(){

    if(this.newGroup.valid){
      this.store.dispatch(createGroupStart(this.newGroup.value));

      this.injector.runInContext(()=>{
        showMsg(this.newGroup)
      })
      
      
    }

  }
}
