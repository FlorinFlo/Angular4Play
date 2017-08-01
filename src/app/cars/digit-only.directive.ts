import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function onlyDigit():ValidatorFn{
    let onlyDig:RegExp=/^\d+$/ ;
 return (control: AbstractControl): {[key: string]: any} => {
    const name = control.value;
   
    
    const no = onlyDig.test(name);
    
    return no ? null:{'onlyDigit': {name}};
  };
}

@Directive({
  selector: '[onlyDigit]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator, OnChanges {
  @Input() onlyDigit: string;
  private valFn = Validators.nullValidator;
 
  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['onlyDigit'];
    if (change) {
      const val: string | RegExp = change.currentValue;
      const re = val instanceof RegExp ? val : new RegExp(val, 'i');
      this.valFn = onlyDigit();
    } else {
      this.valFn = Validators.nullValidator;
    }
  }
 
  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}