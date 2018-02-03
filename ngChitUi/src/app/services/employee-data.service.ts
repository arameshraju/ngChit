import { Injectable } from '@angular/core';
import {Employee} from '../models/employee';

@Injectable()
export class EmployeeDataService {
employeeList:Employee[]=[
{ employeeCode: "EMP001", employeeName: "ENAME 1", address: "Address 1", phone: "pone 1", email: "email@com.1" },
{ employeeCode: "EMP011", employeeName: "ENAME 2", address: "Address 2", phone: "pone 2", email: "email@com.2" },
{ employeeCode: "EMP021", employeeName: "ENAME 3", address: "Address 3", phone: "pone 3", email: "email@com.3" },
{ employeeCode: "EMP031", employeeName: "ENAME 4", address: "Address 4", phone: "pone 4", email: "email@com.4" }
];

  constructor() { }
  getEmployeeList(){
      return  this.employeeList;
  }
  getEmployee(empcode:String){
    return this.employeeList.filter((obj:Employee)=> obj.employeeCode === empcode)[0];
  }

}
