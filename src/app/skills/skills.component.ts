import { Component, OnInit, HostListener,ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @ViewChild('bar') bar!: ElementRef;
  @ViewChild('angular') angular!: ElementRef;
  @ViewChild('c') c!: ElementRef;
  @ViewChild('javascript') javascript!: ElementRef;
  @ViewChild('typescript') typescript!: ElementRef;
  @ViewChild('dsa') dsa!: ElementRef;




  

  @HostListener('document:scroll',['$event'])
  public onViewScroll(){
    const windowHeight = window.innerHeight;
    const boundingRectbar = this.bar.nativeElement.getBoundingClientRect();
    if (
      boundingRectbar.top >= 0
      && 
      boundingRectbar.bottom <= windowHeight) {
      console.log("skills in view");
      this.angular.nativeElement.classList.add("progress-line") 
      this.typescript.nativeElement.classList.add("progress-line") 
      this.javascript.nativeElement.classList.add("progress-line") 
      this.c.nativeElement.classList.add("progress-line") 
      this.dsa.nativeElement.classList.add("progress-line")
    } 
    else{
      console.log("skills out of view")
    }
  }

  


  


} 
