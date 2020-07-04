import {Component, OnInit} from '@angular/core';
import {Customer} from '../../models/customer';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  title: string;
  customer: Customer;
  isRed: false;
  myStyles = {
    color: 'green',
    'font-weight': 'bold'
  };

  constructor() { }

  ngOnInit(): void {
    this.title = 'Hello World';
    this.customer = {
      id: 1,
      name: 'Mac'
    };
  }

  myClasses(): object {
    return {
      red: true,
      blue: true
    };
  }

}
