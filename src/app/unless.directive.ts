import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(private tempRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {

  }


  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.tempRef)

    }
    else {
      this.viewContainerRef.clear

    }

  }



}
