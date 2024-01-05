import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { DropdownService } from './../shared/services/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadoBr } from '../shared/models/estado-br';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  public formulario!: FormGroup;
  // public estados: EstadoBr[] = [];
  public estados!: Observable<EstadoBr[]>;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private consultaCepService: ConsultaCepService,
  ) { }

  ngOnInit(): void {
    // this.dropdownService.getEstadosBr()
    //   .subscribe((estados: EstadoBr[]) => this.estados = estados);

    this.estados = this.dropdownService.getEstadosBr();

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
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
    });
  }

  public onSubmit(): void {
    console.log(this.formulario);
    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', this.formulario.value)
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
        cep: dados.cep,
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
