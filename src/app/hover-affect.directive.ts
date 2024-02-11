import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @Input() hoverStyle: string = '';

  constructor(private elm: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.addOnMouseEffect();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeOnMouseEffect();
  }
  private addOnMouseEffect() {
    this.elm.nativeElement.style[this.hoverStyle] = this.hoverStyle === 'textDecoration' ? 'underline' : 'bold';
  }

  private removeOnMouseEffect() {
    this.elm.nativeElement.style[this.hoverStyle] = this.hoverStyle === 'textDecoration' ? 'none' : 'normal';
  }

}
