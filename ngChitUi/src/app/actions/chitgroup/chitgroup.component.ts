import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-chitgroup',
  templateUrl: './chitgroup.component.html',
  styleUrls: ['./chitgroup.component.css']
})
export class ChitgroupComponent implements OnInit {

 chitgroupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
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
  ngOnInit() {

  }

}
