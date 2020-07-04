import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-io-parent',
  templateUrl: './io-parent.component.html',
  styleUrls: ['./io-parent.component.css']
})
export class IoParentComponent implements OnInit {

  customerName: string;

  constructor() { }

  ngOnInit(): void {
    this.customerName = 'Mac';
  }

  updateCustomerName($event): void {
    this.customerName = $event;
    console.log(this.customerName);
    console.log($event);
  }

}
