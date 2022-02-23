import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[scrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.animationElementOnScroll();
  }

  @HostListener('window:scroll')
  animationElementOnScroll() {
    if(this.isVisibleWithMargeHorizontallly(this.element.nativeElement.getBoundingClientRect()) && !this.element.nativeElement.classList.contains('scrolled')) {
      this.element.nativeElement.classList.add('scrolled');
    }
  }

  isVisibleWithMargeHorizontallly(boundingClient: DOMRect): boolean {
    if(boundingClient) {
      return boundingClient.x > 0 && boundingClient.y > -150 && boundingClient.right < window.innerWidth && boundingClient.bottom < window.innerHeight + 50;
    }
    return false;
  }
}
