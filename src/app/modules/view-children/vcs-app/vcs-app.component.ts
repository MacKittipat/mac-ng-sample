import {AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChildren} from '@angular/core';
import {VcsItemComponent} from '../vcs-item/vcs-item.component';

@Component({
  selector: 'app-vcs-app',
  templateUrl: './vcs-app.component.html',
  styleUrls: ['./vcs-app.component.css']
})
export class VcsAppComponent implements AfterViewInit {

  @ViewChildren(VcsItemComponent) itemList: QueryList<VcsItemComponent>;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.itemList);
  }

}
