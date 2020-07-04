import {Component, OnInit} from '@angular/core';
import {Customer} from '../../models/customer';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  title: string;
  name: string;
  customer: Customer;
  isRed: false;
  myStyles = {
    color: 'green',
    'font-weight': 'bold'
  };

  constructor() { }

  ngOnInit(): void {
    this.title = 'Hello World';
    this.name = 'What is your name ? ';
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

  changeColor($event): void {
    console.log($event);
    console.log($event.target.innerText);
  }

}
