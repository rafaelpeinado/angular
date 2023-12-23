import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {

  @Input() public valorInicial: number = 10;

  constructor() {
    this.log('construtor');
  }

  ngOnChanges(): void {
    this.log('ngOnChanges');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
