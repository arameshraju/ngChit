import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChitgroupDataService } from '../../services/chitgroup-data.service';
import {ChitGroup} from '../../models/chit-group';

@Component({
  selector: 'app-chitgroup',
  templateUrl: './chitgroup.component.html',
  styleUrls: ['./chitgroup.component.css']
})
export class ChitgroupComponent implements OnInit {

 chitgroupForm: FormGroup;
  chitgorupList:object[];
  constructor(private formBuilder: FormBuilder,private chitgroupData : ChitgroupDataService ) {
      this.chitgroupForm = formBuilder.group({
        groupcode: [null,Validators.required],
        groupName: [null,Validators.required],
        chitValue: [null,Validators.required],
        months: [null,Validators.required],
        subscription: [null,Validators.required]
      });
    }
  submitHandler(formData) {

    console.log(formData);
  }
  viewGroup(data){
     let cdata = this.chitgroupData.getChitGroup(this.chitgorupList,data);
      this.chitgroupForm.setValue({
        groupcode:cdata.groupcode,
        groupName:cdata.groupName,
        chitValue:cdata.chitValue,
        months:cdata.months,
        subscription:cdata.subscription
      })
  }
  ngOnInit() {
      this.chitgroupData.getChitGroupList().subscribe(data =>  { this.chitgorupList =data['listdata']});
  }

}
