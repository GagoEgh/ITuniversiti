import { Store, select } from "@ngrx/store"
import { inject } from "@angular/core";
import { errors, isSuccess } from "src/app/store/selectors";
import Swal from 'sweetalert2'
import { map } from "rxjs";
import { FormControl, FormGroup } from "@angular/forms";

export function showErrorMsg():void{
    let store  = inject(Store)
    store.pipe(select(errors))
    .subscribe({
      next:(error:any)=>{
        console.log('errr--',error)
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

export function showMsg(form:FormGroup|FormControl):void{
    let store  = inject(Store)
    store.pipe(
      select(isSuccess),
      map((res:boolean|null)=>{
        if(res){

          form.reset();
          return Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            color:'black',
            timer: 1500
          })
          
        }else if(res===false){
         return showErrorMsg()
        }

        return
      })).subscribe()    
  }