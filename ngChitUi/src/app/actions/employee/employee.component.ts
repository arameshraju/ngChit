import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 employeeForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
      this.employeeForm = formBuilder.group({
        employeeCode: [null,Validators.required],
        employeeName: [null,Validators.required],
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
