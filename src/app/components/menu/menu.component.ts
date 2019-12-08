import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor( private element: ElementRef ) { }

  menu: any;

  ngOnInit() {
    this.menu = this.element.nativeElement.querySelector('#menu');
    this.menu.classList.add('closed');
  }

  open($event){
    if(this.menu.classList.contains('opened')){
      this.menu.classList.remove('opened');
      this.menu.classList.add('closed');
    }else{
      this.menu.classList.remove('closed');
      this.menu.classList.add('opened');
    }
  }

}
