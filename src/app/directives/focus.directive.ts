import { AfterViewInit, OnInit, ElementRef, Directive } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit{

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.focus()
  }

  ngAfterViewInit(): void {
    
  }

}
