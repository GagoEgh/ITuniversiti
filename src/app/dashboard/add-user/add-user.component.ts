import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getFormError } from 'src/app/core/feature/error';
import * as uuid from 'uuid';
import { Store } from '@ngrx/store';
import { registerStart } from 'src/app/store/action';
import { showMsg } from 'src/app/core/feature/show_swal';

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
    private store:Store,
    private injector:EnvironmentInjector
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
      this.injector.runInContext(()=>{
        showMsg(this.registerForm);
      })
    }
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
