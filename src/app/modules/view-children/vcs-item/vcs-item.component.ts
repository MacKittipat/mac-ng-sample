import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vcs-item',
  templateUrl: './vcs-item.component.html',
  styleUrls: ['./vcs-item.component.css']
})
export class VcsItemComponent implements OnInit {

  @Input() msg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
