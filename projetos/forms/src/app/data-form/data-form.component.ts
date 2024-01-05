import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  public formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //     nome: new FormControl(null),
    //     email: new FormControl(null),
    // });

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
    });
  }

  public onSubmit(): void {
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', this.formulario.value)
      .subscribe((dados) => {
        console.log(dados);
        // reseta o form
        this.resetar();
      },
      (error: any) => alert('erro'));
  }

  public resetar(): void {
    this.formulario.reset();
  }

}
