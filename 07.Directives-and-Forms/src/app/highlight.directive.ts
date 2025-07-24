import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    //? this.elRef.nativeElement
    //? this.elRef.nativeElement.style.background='orange'

    //? this.renderer.setStyle(this.elRef.nativeElement, 'background', 'purple');

    this.renderer.listen(this.elRef.nativeElement, 'mouseenter', this.mouseEnterHandler.bind(this))

    this.renderer.listen(this.elRef.nativeElement,'mouseleave', this.mouseLeaveHandler.bind(this))
  }

  mouseEnterHandler(e:MouseEvent):void{
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
  }

  mouseLeaveHandler(e:MouseEvent):void{
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'initial');
  }
}
