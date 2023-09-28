import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getFormError } from 'src/app/core/error';
import * as uuid from 'uuid';
import { Store, select } from '@ngrx/store';
import { registerStart } from 'src/app/store/action';
import { errors,  isSuccess } from 'src/app/store/selectors';
import {map,} from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls:['../add.scss']

})
export class AddUserComponent implements OnInit {
  
  registerForm!:FormGroup;
  isProfile=true;
  statuses= ['student','admin','teacher','maneger'];
  success = false;

  constructor(
    private fb:FormBuilder,
    private store:Store
  ){}
  
  ngOnInit(): void {
    this.initForm();
  }

  private initForm():void{
    this.registerForm = this.fb.group({
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      username:['',[Validators.required]],
      password1:['',[Validators.required,Validators.minLength(8)]],
      password2:['',[Validators.required,Validators.minLength(8)]],
      status:['',[Validators.required]],
    },{
      validators: this.password.bind(this)
    })
  }

  register():void{
    if(this.registerForm.valid){
      this.store.dispatch(registerStart(this.registerForm.value));
      this.showMsg();
    }
  }

  private showErrorMsg():void{
    this.store.pipe(select(errors))
    .subscribe({
      next:(error:any)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        color:'black',
        text:   `${error?.msg }`,
        timer: 1500
      })
      }
    })
  }

  private showMsg():void{
    this.store.pipe(
      select(isSuccess),
      map((res:boolean|null)=>{
        
        if(res){
          this.registerForm.reset();
          return Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            color:'black',
            timer: 1500
          })
          
        }else if(res===false){
         return this.showErrorMsg()
        }

        return
      })).subscribe()    
  }

  password(formGroup: FormGroup):null|object {
    const { value: password1 } = formGroup.get('password1')!;
    const { value: password2} = formGroup.get('password2')!;
    return password1 === password2 ? null : { passwordNotMatch: true };
  }

  getError(form:FormGroup,controlName:string,errorName:string):boolean|undefined{
    return  getFormError(form,controlName,errorName);
  }

 
  createPassword():void{
    let passValue = '';
    passValue = uuid.v4();
    passValue = passValue.substring(0, 10);

    this.registerForm.get('password1')?.setValue(passValue);
    this.registerForm.get('password2')?.setValue(passValue);
  }

}
