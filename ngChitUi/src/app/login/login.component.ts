import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
      this.loginForm = formBuilder.group({
        user: [null,Validators.required],
        password: [null,Validators.compose([Validators.minLength(2), Validators.required])],
        privacyAndPolicy: [false]
      });
    }
submitHandler(formData) {
    console.log(formData);
  }
  ngOnInit() {
  }

}
