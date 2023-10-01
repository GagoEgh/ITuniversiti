import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Optional, Renderer2, Self, ViewChild, } from '@angular/core';
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
export class PasswordInputComponent implements ControlValueAccessor, OnInit{

  off=true;
  value!: string;

  constructor(
    private _renderer: Renderer2,
    @Optional() @Self() public ngControl: NgControl) {
      if (ngControl !== null) {
          ngControl.valueAccessor = this;
      }
  }

  @ViewChild('input', {static: true, read: ElementRef}) 
  inputElementRef!: ElementRef;

    
  ngOnInit(): void {}

 
  onChange = (value: any) => {};
  onTouched = () => {};

  @Input()touched!:boolean|undefined;
  @Input()length!:any;
  @Input()isProfile!:boolean;

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
    this._renderer.setProperty(this.inputElementRef.nativeElement, 'value', obj);
      this.value = obj;
  }


}
