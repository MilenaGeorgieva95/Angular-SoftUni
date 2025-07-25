import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MaxCountDirective, multi: true },
  ],
})
export class MaxCountDirective implements Validator {
  @Input() appMaxCount: number | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.appMaxCount || control.value?.length <= this.appMaxCount) {
      return null;
    }

    return { appMaxCount: this.appMaxCount };
  }
}
