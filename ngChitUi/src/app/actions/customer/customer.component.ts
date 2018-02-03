import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerDataService } from '../../services/customer-data.service';
import {Customer} from '../../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

 customerForm: FormGroup;
  customerList : Customer[];

  constructor(private formBuilder: FormBuilder,private customerData : CustomerDataService) {
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
  viewCustomer(data){
     let cdata = this.customerData.getCustomer(data);
      this.customerForm.setValue({
        customerCode:cdata.customerCode,
        customerName:cdata.customerName,
        address:cdata.address,
        phone:cdata.phone,
        email:cdata.email
      })
  }

  ngOnInit() {
    this.customerList=this.customerData.getCustomerList();
  }

}
