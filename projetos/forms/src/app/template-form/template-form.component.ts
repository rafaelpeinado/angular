import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }


  public onSubmit(form: NgForm): void {
    console.log(form);
  }

}
