import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appContainRef]'
})
export class ContainRefDirective {

  constructor(public tempRef: TemplateRef<unknown>) {}

}
