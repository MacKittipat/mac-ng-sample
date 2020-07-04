import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cc-item',
  templateUrl: './cc-item.component.html',
  styleUrls: ['./cc-item.component.css']
})
export class CcItemComponent implements OnInit {

  @Input() itemName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
