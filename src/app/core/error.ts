import { FormGroup } from "@angular/forms";

export function getFormError(form:FormGroup,controlName:string,errorName:string){
   // return this.loginForm.get(controlName)?.hasError(errorName)
   return form.get(controlName)?.hasError(errorName)
  }

