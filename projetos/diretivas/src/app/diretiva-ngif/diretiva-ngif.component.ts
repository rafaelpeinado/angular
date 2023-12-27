import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  public cursos: string[] = ['Angular'];
  public mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onMostrarCursos(): void {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
