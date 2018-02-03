import { Injectable } from '@angular/core';
import {Customer} from '../models/customer';

@Injectable()
export class CustomerDataService {

customerList:Customer[]=[
                  { customerCode: "C10191", customerName: "RAMESH", address: "Hyderabad", phone: "77777", email: "ALURI@GMIAL.COM" },
                  { customerCode: "C10192", customerName: "Raju", address: "Pragatinagar", phone: "8888888", email: "ALURI@GMIAL.COM" },
                  { customerCode: "C10192", customerName: "Alluri", address: "Cyberabad", phone: "999999999", email: "ALURI@GMIAL.COM" }
              ];
  constructor() { }
  getCustomerList(){
      return  this.customerList;
  }
  getCustomer(custcode:String){
    return this.customerList.filter((obj:Customer)=> obj.customerCode === custcode)[0];
  }

}
