import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getFormError } from 'src/app/core/error';
import * as uuid from 'uuid';
import { Store, select } from '@ngrx/store';
import { registerStart } from 'src/app/store/action';
import { errors, isLoader, isSuccess } from 'src/app/store/selectors';
import { Observable, debounce, debounceTime, map, timeout } from 'rxjs';
import { ErrorsInterface } from 'src/app/store/type/global.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  registerForm!:FormGroup;
  isProfile=true;
  statuses= ['student','admin','teacher','maneger'];
  isLoader$!:Observable<boolean>;
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

  
  errorMsg:string|null = null;
  register():void{
    if(this.registerForm.valid){
      this.store.dispatch(registerStart(this.registerForm.value));
      this.isLoader$ = this.store.pipe(select(isLoader));
      this.showSuccessMsg();
      this.showErrorMsg();
      this.registerForm.reset()
    }
  }

  private showErrorMsg():void{
    this.store.pipe(select(errors))
    .subscribe({
      next:(error:any)=>{
        this.errorMsg = error?.msg
        setTimeout(()=>{
          this.errorMsg = null
      },2000)
      }
    })
  }

  private showSuccessMsg():void{
    this.store.pipe(select(isSuccess))
    .subscribe({
      next:(res:boolean)=>{
        this.success = res;
        setTimeout(()=>{
          this.success = false
        },2000)
      }
    })

    
  }

  password(formGroup: FormGroup):null|object {
    const { value: password1 } = formGroup.get('password1')!;
    const { value: password2} = formGroup.get('password2')!;
    return password1 === password2 ? null : { passwordNotMatch: true };
  }

  getError(form:FormGroup,controlName:string,errorName:string):boolean|undefined{
    return  getFormError(form,controlName,errorName);
  }

  passValue = '';
  createPassword():void{
    this.passValue = uuid.v4();
    this.passValue = this.passValue.substring(0, 10);

    this.registerForm.get('password1')?.setValue(this.passValue);
    this.registerForm.get('password2')?.setValue(this.passValue);

  }

}
