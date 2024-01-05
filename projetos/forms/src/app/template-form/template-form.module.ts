import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TemplateFormComponent,
    CampoControlErroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class TemplateFormModule { }
