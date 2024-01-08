import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidations {
  public static requiredMinCheckbox(min: number = 1): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return (control as FormArray).controls.filter((item) => item.value).length >= min ? null : { required: true };
    }
  }
}
