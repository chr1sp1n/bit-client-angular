import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cat($event) {
    let $el = $($event.target);
    let $ul = $el.next('ul');
    if($ul.hasClass('active')){
      $ul.removeClass('active');
    }else{

      let $ulCat = $('#filter>ul'); 
      let catRel = Math.abs($el.offset().left - $ulCat.offset().left);
      let l = (( $('#filter>ul').outerWidth() /2 ) + catRel) * -1;
      $('#filter>ul').find('ul').removeClass('active');
      $ul.css({'left': l});
      $ul.addClass('active');
    }

  }
}
