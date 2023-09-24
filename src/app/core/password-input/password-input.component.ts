import { CommonModule } from '@angular/common';
import { Component, Optional, Self, } from '@angular/core';
import { ControlValueAccessor,  NgControl, ReactiveFormsModule, } from '@angular/forms';


@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PasswordInputComponent implements ControlValueAccessor {

  off=true;
  value!: string;

  constructor(@Optional() @Self() public ngControl: NgControl) {
      if (ngControl !== null) {
          ngControl.valueAccessor = this;
      }
  }

  onChange = (value: any) => {};
  onTouched = () => {};

  onFocusOut(): void {
      this.onTouched();
  }

  onInput($event: any): void {
      this.value = $event.currentTarget.value;
      this.onChange(this.value);
  }

  registerOnChange(fn: any) {
      this.onChange = fn;
  }

  registerOnTouched(fn: any) {
      this.onTouched = fn;
  }

  writeValue(obj: any): void {
      this.value = obj;
  }
}
