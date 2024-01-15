import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>',
})
export abstract class BaseFormComponent implements OnInit {
  public formulario!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  public abstract submit(): void;

  public onSubmit(): void {
    if (this.formulario.valid) {
      this.submit();
      return;
    }
    console.log('formulario invalido');
    this.verificaValidacoesForm(this.formulario);
  }

  private verificaValidacoesForm(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls)
      .map((campo) => {
        const controle = formGroup.get(campo);
        controle?.markAsTouched();
        if (controle instanceof FormGroup || controle instanceof FormGroup) {
          this.verificaValidacoesForm(controle);
        }
      });
  }

  public resetar(): void {
    this.formulario.reset();
  }

}
