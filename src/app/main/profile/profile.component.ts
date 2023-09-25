import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getFormError } from 'src/app/core/error';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  registerForm!:FormGroup;
  statuses= ['student','admin','teacher','maneger']

  constructor(
    private fb:FormBuilder,
    private registerService:RegisterService
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

  register(){
    if(this.registerForm.valid){

    }
    this.registerService.postrRegister(this.registerForm.value)
    .subscribe({
      next:(res)=>{
        console.log(res)
      }
    })
    console.log(this.registerForm.value)
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
    const random = ''+Math.random();
    const password = random.slice(2,10);
    this.registerForm.get('password1')?.setValue(password);
    this.registerForm.get('password2')?.setValue(password);
  }

}
