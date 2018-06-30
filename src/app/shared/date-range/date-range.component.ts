import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {

  @Input() start: string;
  @Input() end: string;
  @Input() company: string;
  
  constructor() { }

  ngOnInit() {
  }

  isSameYear(){
    if( this.start && this.end){
      const start = new Date(this.start);
      const end = new Date(this.end);
      if( start.getFullYear() === end.getFullYear() ){
        return true;
      }
    }
    return false;
  }

}
