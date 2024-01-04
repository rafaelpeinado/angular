import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  public usuario: any = {
    nome: null,
    email: null
  };

  // public usuario: any = {
  //   nome: 'Rafael Peinado da Silva',
  //   email: 'rafael@email.com'
  // };

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }


  public onSubmit(form: NgForm): void {
    console.log(form);
  }

  public consultaCEP(eventTarget: any, form: NgForm): void {
    console.log(eventTarget.value);

    let cep: string = (eventTarget.value as string).replace(/\D/g, '');
    if (cep) {
      const validaCep: RegExp = /^[0-9]{8}$/;
      if (validaCep.test(cep)) {
        this.resetaDadosForm(form);
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe((dados) => this.populaDadosForm(dados, form));
      }
    }
  }

  private populaDadosForm(dados: any, formulario: NgForm): void {
    // formulario.setValue({
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

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
  }

  private resetaDadosForm(formulario: NgForm): void {
    formulario.form.patchValue({
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
}
