import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit {

  @Input() mauchu:string = 'red'; //Mau chu mac dinh
  @HostBinding('className') clasName = 'btn btn-success';

  constructor(private element:ElementRef, private render2:Renderer2) {
  }
  // this.element.nativeElement.style.backgroundColor = 'green';
  // this.element.nativeElement.style.color = '#ffff';
  ngOnInit(): void { 
    // this.render2.addClass(this.element.nativeElement, 'btn-success');
    // this.render2.setStyle(this.element.nativeElement, 'color', 'yellow');

    this.element.nativeElement.style.color = this.mauchu;
    

  }

  @HostListener('mouseenter') suKienHover(e) {//Re Chuot vao
    // this.render2.removeClass(this.element.nativeElement, 'btn-success');
    // this.render2.addClass(this.element.nativeElement, 'btn-warning');
    this.clasName = 'btn btn-warning'; //AddClas nay vao
  
  }
  @HostListener('mouseleave') suKienHoverLease(e) {//Re Chuot Ra
    // this.render2.addClass(this.element.nativeElement, 'btn-success');
    // this.render2.removeClass(this.element.nativeElement, 'btn-warning');
    this.clasName = 'btn btn-success'; //ghi de class
  }
}
