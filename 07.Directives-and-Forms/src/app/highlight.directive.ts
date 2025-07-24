import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    //? this.elRef.nativeElement
    //? this.elRef.nativeElement.style.background='orange'

    this.renderer.setStyle(this.elRef.nativeElement, 'background', 'purple');
  }
}
