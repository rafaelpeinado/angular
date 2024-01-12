import { VerificaEmailService } from './services/verifica-email.service';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { DropdownService } from './../shared/services/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { EstadoBr } from '../shared/models/estado-br';
import { Observable, empty } from 'rxjs';
import { FormValidations } from '../shared/form-validations';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  public formulario!: FormGroup;
  // public estados: EstadoBr[] = [];
  public estados!: Observable<EstadoBr[]>;
  public cargos: any[] = [];
  public tecnologias: any[] = [];
  public newsletterOp: any[] = [];

  public frameworks: string[] = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private consultaCepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService,
  ) { }

  ngOnInit(): void {
    // this.verificaEmailService.verificarEmail('email@email.com')
    //   .subscribe((dados) => console.log('dados', dados));
    // this.dropdownService.getEstadosBr()
    //   .subscribe((estados: EstadoBr[]) => this.estados = estados);

    this.estados = this.dropdownService.getEstadosBr();
    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOp = this.dropdownService.getNewsletter();

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    //   endereco: new FormGroup({
    //     cep: new FormControl(null),
    //     numero: new FormControl(null),
    //     complemento: new FormControl(null),
    //     rua: new FormControl(null),
    //     bairro: new FormControl(null),
    //     cidade: new FormControl(null),
    //     estado: new FormControl(null),
    //   }),
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      // o terceiro parâmetro são as validações assíncronas
      // email: [null, [Validators.required, Validators.email], this.validarEmail],
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: [null, [FormValidations.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),

      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'], // para ficar como padrão
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks(),
    });

    // this.formulario.get('endereco.cep')?.valueChanges
    //   .subscribe((value) => console.log('valor CEP: ', value));

    // this.formulario.get('endereco.cep')?.statusChanges
    //   .pipe(
    //     distinctUntilChanged(),
    //     tap((value) => console.log('status CEP: ', value)),
    //   )
    //   .subscribe((status) => {
    //     if (status === 'VALID') {
    //       this.consultaCepService.consultaCEP(this.formulario.get('endereco.cep')?.value)
    //         .subscribe((dados) => this.populaDadosForm(dados));
    //     }
    //   });

    this.formulario.get('endereco.cep')?.statusChanges
      .pipe(
        distinctUntilChanged(),
        tap((value) => console.log('status CEP: ', value)),
        switchMap((status) => status === 'VALID' ?
          this.consultaCepService.consultaCEP(this.formulario.get('endereco.cep')?.value) : empty()),
      )
      .subscribe((dados) => dados ? this.populaDadosForm(dados) : {});
  }

  public buildFrameworks(): FormArray {
    const values = this.frameworks.map(() => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
  }

  public onSubmit(): void {
    console.log(this.formulario);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: (valueSubmit.frameworks as any[])
        .map((v, i) => v ? this.frameworks[i] : null)
        .filter((v) => v !== null),
    });

    console.log('valueSubmit', valueSubmit);

    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', valueSubmit)
        .subscribe((dados) => {
          console.log(dados);
          // reseta o form
          this.resetar();
        },
          (error: any) => alert('erro'));
      return;
    }
    console.log('formulario invalido');
    this.verificaValidacoesForm(this.formulario);
    // Object.keys(this.formulario.controls)
    //   .map((campo) => {
    //     console.log(campo);
    //     const controle = this.formulario.get(campo);
    //     // controle?.markAsDirty();
    //     controle?.markAsTouched();
    //   });
  }

  public resetar(): void {
    this.formulario.reset();
  }

  public consultaCEP(): void {
    let cep: string = this.formulario.get('endereco.cep')?.value?.replace(/\D/g, '');
    if (cep) {
      this.consultaCepService.consultaCEP(cep)
        .subscribe((dados) => this.populaDadosForm(dados));
    }
  }

  public setarCargo(): void {
    // foi intencional não pegar do combobox, pois a ideia era pegar de endereços de memória diferentes
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo')?.setValue(cargo);
  }

  public compararCargos(obj1: any, obj2: any): any {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 && obj2;
  }

  public setarTecnologias(): any {
    this.formulario.get('tecnologias')?.setValue(['java', 'javascript', 'php'])
  }

  public validarEmail(formControl: FormControl): ValidationErrors | null {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(
        map((emailExiste) => emailExiste ? { emailInvalido: true } : null),
      );
  }

  // a nossa função de validação vai receber o min como valor
  // e o Angular vai passar o FormArray
  // no caso tive que refatorar por causa da versão do Angular
  // e o Angular vai passar o AbstractControl que é o FormArray
  public requiredMinCheckbox(min: number = 1): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return (control as FormArray).controls.filter((item) => item.value).length >= min ? null : { required: true };
      // const totalChecked = (control as FormArray).controls
      //   .map((v: AbstractControl) => v.value)
      //   .reduce((total, current) => current ? total + current : total, 0);
      // console.log('totalChecked', totalChecked);
      // return totalChecked >= min ? null : { required: true };
      // const totalChecked = (control as FormArray).controls.filter((item) => item.value).length;
      // return totalChecked >= min ? null : { required: true };
    }
  }

  private verificaValidacoesForm(formGroup: FormGroup): void {
    Object.keys(formGroup.controls)
      .map((campo) => {
        const controle = formGroup.get(campo);
        controle?.markAsTouched();
        if (controle instanceof FormGroup) {
          this.verificaValidacoesForm(controle);
        }
      });
  }

  private resetaDadosForm(): void {
    this.formulario.patchValue({
      endereco: {
        cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }

  private populaDadosForm(dados: any): void {
    // this.formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     numero: formulario.value.endereco.numero,
    //     complemento: dados.complemento,
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf,
    //   },
    // });

    this.formulario.patchValue({
      endereco: {
        // cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });

    // para atualizar um campo em específico
    // this.formulario.get('nome')?.setValue('Rafael');
  }
}
