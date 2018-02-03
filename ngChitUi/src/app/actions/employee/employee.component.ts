import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeDataService } from '../../services/employee-data.service';
import {Employee} from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 employeeForm: FormGroup;
  employeeList : Employee[];

  constructor(private formBuilder: FormBuilder,private employeeData : EmployeeDataService) {
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

  viewEmployee(data){
     let cdata = this.employeeData.getEmployee(data);
      this.employeeForm.setValue({
        employeeCode:cdata.employeeCode,
        employeeName:cdata.employeeName,
        address:cdata.address,
        phone:cdata.phone,
        email:cdata.email
      })
  }

  ngOnInit() {
    this.employeeList=this.employeeData.getEmployeeList();

  }

}
