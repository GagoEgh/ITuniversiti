import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { loginStart } from '../store/actions';
import { isLoad, request } from '../store/selectors';
import { Observable } from 'rxjs';
import { getFormError } from 'src/app/core/error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  $error!:Observable<any>;
  $loader!:Observable<boolean>
  constructor(
    private fb:FormBuilder,
    private store:Store,
  ){}

  ngOnInit(): void {
    this.initForm();
  }
  
  private initForm():void{
    this.loginForm = this.fb.group({
      username:['',[Validators.required,Validators.minLength(5)]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  getError(form:FormGroup,controlName:string,errorName:string){
   return  getFormError(form,controlName,errorName);

  }


  submit(){

    if(this.loginForm.valid){
      const user = this.loginForm.value;
      this.store.dispatch(loginStart(user));
      this.$error =  this.store.pipe(select(request));
      this.$loader = this.store.pipe(select(isLoad));      
    }

  }

}
