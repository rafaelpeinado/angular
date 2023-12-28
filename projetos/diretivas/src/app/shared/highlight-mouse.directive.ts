import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  // se precisar de alguma manipulação usar o exemplo usando getters e setters
  // @HostBinding('style.backgroundColor') public backgroundColor!: string;
  private backgroundColor!: string;

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2,
  ) { }

  @HostBinding('style.backgroundColor')  public get setColor(): string {
    // código extra
    return this.backgroundColor;
  };

  @HostListener('mouseenter')
  public onMouseOver(): void {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }
}
