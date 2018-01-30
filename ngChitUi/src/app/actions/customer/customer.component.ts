import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

 customerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
      this.customerForm = formBuilder.group({
        customerCode: [null,Validators.required],
        customerName: [null,Validators.required],
        address: [null,Validators.required],
        phone: [null,Validators.required],
        email: [null]
      });
    }
  submitHandler(formData) {
    console.log(formData);
  }

  ngOnInit() {
  }

}
