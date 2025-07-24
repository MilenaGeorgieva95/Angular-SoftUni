import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';

type MyVoid = () => void;


@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit, OnDestroy {

@HostListener('mouseover', ['$event']) 
mouseOverHandler(e:MouseEvent){
  console.log('mouseOver ');
}

  unsubFromEventsArr : MyVoid[]=[];

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    //? this.elRef.nativeElement
    //? this.elRef.nativeElement.style.background='orange'

    //? this.renderer.setStyle(this.elRef.nativeElement, 'background', 'purple');

  const mouseEEv = this.renderer.listen(this.elRef.nativeElement, 'mouseenter', this.mouseEnterHandler.bind(this));
  this.unsubFromEventsArr.push(mouseEEv);

  const mouseLEv = this.renderer.listen(this.elRef.nativeElement,'mouseleave', this.mouseLeaveHandler.bind(this));
  this.unsubFromEventsArr.push(mouseLEv);
  }

  mouseEnterHandler(e:MouseEvent):void{
        //? this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
      this.renderer.addClass(this.elRef.nativeElement, 'highlight-el');
  }

  mouseLeaveHandler(e:MouseEvent):void{
      this.renderer.removeClass(this.elRef.nativeElement, 'highlight-el');
  }

  ngOnDestroy(): void {
    this.unsubFromEventsArr.forEach(fn=>fn());
  }
}
