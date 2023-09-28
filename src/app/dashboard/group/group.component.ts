import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFormError } from 'src/app/core/error';
import { teachers } from 'src/app/store/selectors';
import { ProfileInterface } from '../type/profile.interface';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls:['../add.scss']

})
export class GroupComponent implements OnInit{
  newGroup!:FormGroup;
  $teachers!:Observable<ProfileInterface[]|null>;
  constructor(
    private fb:FormBuilder,
    private store:Store
  ){}

  ngOnInit(): void {
    this.initForm();
   this.$teachers = this.store.pipe(select(teachers))

  }

  private initForm():void{
    this.newGroup = this.fb.group({
      name:['',[Validators.required]],
      course:['',[Validators.required]],
      module:['',[Validators.required]],
      teacher:['',[Validators.required]]
    })
  }

  getError(form:FormGroup,controlName:string,errorName:string):boolean|undefined{
    return  getFormError(form,controlName,errorName);
  }
  createGroup(){

  }
}
