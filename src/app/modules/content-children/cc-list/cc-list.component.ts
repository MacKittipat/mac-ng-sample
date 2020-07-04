import {AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {CcItemComponent} from '../cc-item/cc-item.component';

@Component({
  selector: 'app-cc-list',
  templateUrl: './cc-list.component.html',
  styleUrls: ['./cc-list.component.css']
})
export class CcListComponent implements AfterContentInit {

  @Input() listName: string;

  @ContentChildren(CcItemComponent) itemList: QueryList<CcItemComponent>;

  constructor() { }

  ngAfterContentInit(): void {
    console.log(this.itemList);
    this.itemList.forEach(item => {
      console.log(item.itemName);
      item.itemName += '.';
    });
  }

}
