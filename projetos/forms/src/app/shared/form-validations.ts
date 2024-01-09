import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidations {
  public static requiredMinCheckbox(min: number = 1): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return (control as FormArray).controls.filter((item) => item.value).length >= min ? null : { required: true };
    }
  }

  public static cepValidator(control: AbstractControl): ValidationErrors | null {
    console.log('teste', control);
    const cep = control.value;
    if (cep) {
      const validaCep = /^[0-9]{8}$/;
      return validaCep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }
}
