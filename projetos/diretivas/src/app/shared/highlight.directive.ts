import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  private backgroundColor!: string;
  @Input() public defaultColor: string = 'white';
  // @Input() public highlightColor: string = 'yellow';
  @Input('highlight') public highlightColor: string = 'yellow';

  constructor(
  ) { }

  public ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') public get setColor(): string {
    return this.backgroundColor;
  };

  @HostListener('mouseenter')
  public onMouseOver(): void {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.backgroundColor = this.defaultColor;
  }
}
