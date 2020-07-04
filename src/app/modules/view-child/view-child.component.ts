import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements AfterViewInit {

  @ViewChild('myTxt') myTxt: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.myTxt);
  }

}
