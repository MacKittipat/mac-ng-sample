import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  nameForm: FormControl = new FormControl('');

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('Default name'),
    lastName: new FormControl('')
  });

  customerForm = this.fb.group({
    id: [''],
    name: ['Default name']
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmitUser(): void {
    console.log(this.userForm.value);
  }

  onSubmitCustomer(customerForm): void {
    console.log(customerForm);
  }

}
