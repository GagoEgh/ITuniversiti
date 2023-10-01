import { FormGroup } from "@angular/forms";

export function getFormError(form:FormGroup,controlName:string,errorName:string):boolean|undefined{
   return form.get(controlName)?.hasError(errorName)
}

