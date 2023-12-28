import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  constructor(
    private _templateRef: TemplateRef<any>, // any para poder usar em qualquer tag
    private _viewContainerRef: ViewContainerRef,
  ) { }

  // toda vez que o ngElse modificar, o método set é chamado e modifica o valor do template
  @Input() public set ngElse(condition: boolean) {
    if (!condition) {
      // renderizar a view embutida no nosso template
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      // destrói o elemento
      this._viewContainerRef.clear();
    }
  }

}
