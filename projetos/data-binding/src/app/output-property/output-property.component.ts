import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  // outputs: ['mudouValor'],
})
export class OutputPropertyComponent implements OnInit {

  @Input() public valor: number = 0;
  @Output() mudouValor = new EventEmitter();
  // se usar a property outputs, devemos usar assim
  // mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public incrementa(): void {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  public decrementa(): void {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
