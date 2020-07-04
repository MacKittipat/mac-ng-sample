import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-io-child',
  templateUrl: './io-child.component.html',
  styleUrls: ['./io-child.component.css']
})
export class IoChildComponent implements OnInit {

  @Input() customerName: string;
  @Output() onClickSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.onClickSubmit.emit('Hello ' + this.customerName);
  }

}
