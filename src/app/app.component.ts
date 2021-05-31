import { Component, ElementRef, VERSION } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
let $: any;
export interface Slide {
  name: string;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iconCat: string;
  iconCat2: string;
  iconArray: string[];
  iconArray2: string[];
  icon: string = 'brand-bell';
  icon2: string = 'brand-question-border';
  transform?: string = 'scale(1.25)';
  fill?: string = '#BFBFBF';
  iconClass: string[];
  iconClass2: string[];
  overflow: string;
  moveIndic;
  last_known_scroll_position = 0;
  ticking = false;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    nextArrow: `<div  class='next-slide'><mat-icon >navigate-next</mat-icon></div>`,
    prevArrow: `<div class='next-slide'>chevron-left<mat-icon ></mat-icon></div>`
  };
  slide: Slide;
  slides: Slide[] = [
    {
      name: 'News'
    },
    {
      name: 'Properties'
    },
    {
      name: 'Leasing'
    },
    {
      name: 'Sales'
    },
    {
      name: 'Tenants'
    },
    {
      name: 'Professionals'
    }
  ];
  constructor() {
    this.iconClass = [`icon-${this.icon}`, `icon-${this.icon}-dims`];
    if (this.icon !== null || this.icon !== undefined) {
      this.iconArray = this.icon.split('-');
      this.iconCat = this.iconArray[0];
      this.iconClass2 = [`icon-${this.icon2}`, `icon-${this.icon2}-dims`];
    }
    if (this.icon2 !== null || this.icon2 !== undefined) {
      this.iconArray2 = this.icon2.split('-');
      this.iconCat2 = this.iconArray2[0];
    }
  }
  ngOnInit() {
    $('body').addClass('df');
  }
  slickInit(e) {
    console.log('slick initialized');
  }
  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
