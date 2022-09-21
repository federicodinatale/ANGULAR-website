import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    //
  }

  @Input() appHighlight = "";

  //quando il mouse è sopra l'elemento, il background è giallo
  @HostListener('mouseenter') onMouseEnter() {
    this.cambiaColor(this.appHighlight)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cambiaColor("transparent")
  }

  cambiaColor(colore: string) {
    this.element.nativeElement.style.backgroundColor = colore;
  }
}
