import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor="transparent"
  @Input('appBetterHighlight') highLightColor="blue"
  @HostBinding('style.backgroundColor') backGroundColor:string

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
    this.backGroundColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backGroundColor=this.highLightColor
  }

 @HostListener('mouseleave') mouseLeave(eventData:Event){
   // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
   this.backGroundColor=this.defaultColor
  }


}
