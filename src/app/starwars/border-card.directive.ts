import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[starwBorderCard]'
})

export class BorderCardDirective{

  private initialColor: string = '#D3D3D3'
  private defaultColor: string = '#D3D3D3'
  private defaultHeight: number = 180



  constructor(private el: ElementRef) { 
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }
  
  @Input(`starwBorderCard`) borderColor: string;

  @HostListener ('mouseenter') mouseenter() {
    this.setBorder(this.borderColor || this.defaultColor);
  } 
  @HostListener('mouseleave') mouseover() {
    this.setBorder(this.initialColor);
  } 

  
  private setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  private setBorder(color: string){
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
  }

}

