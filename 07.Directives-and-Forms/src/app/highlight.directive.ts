import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit{
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    console.log(this.elRef.nativeElement);
    this.elRef.nativeElement.style.background='orange'
  }
}
