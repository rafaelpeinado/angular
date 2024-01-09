import { AbstractControl, FormArray, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidations {
  public static requiredMinCheckbox(min: number = 1): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // TODO refazer usando a lógica do atributo parent
      return (control as FormArray).controls.filter((item) => item.value).length >= min ? null : { required: true };
    }
  }

  public static cepValidator(control: AbstractControl): ValidationErrors | null {
    console.log('cepValidator', control);
    const cep = control.value;
    if (cep) {
      const validaCep = /^[0-9]{8}$/;
      return validaCep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }

  public static equalsTo(otherField: string): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      if (!otherField) {
        throw new Error('É necessário informar um campo.');
      }

      console.log('FormGroup equalTo', (<FormGroup>control.root));

      if (!control.root || !(<FormGroup>control.root).controls) {
        return null;
      }

      const field = (<FormGroup>control.root).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido');
      }

      if (field.value !== control.value) {
        return { equalsTo: otherField };
      }

      return null;
    }
  }
}
