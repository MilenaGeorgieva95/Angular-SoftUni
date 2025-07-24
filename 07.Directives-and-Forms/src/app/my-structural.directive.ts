import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  exportAs: 'appMyStructural',
})
export class MyStructuralDirective implements OnChanges{
@Input () appMyStructural : boolean = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef:ViewContainerRef) {}

    ngOnChanges(): void {
    console.log(this.appMyStructural);
      if(this.appMyStructural){
        this.viewContainerRef.createEmbeddedView(this.templateRef, {myCustomValue:'abc123', myCustomNum: 34});
      }else{
        this.viewContainerRef.clear();
    }
  }
}
