import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './auth-sign-in.component.html',
  styleUrls: ['./auth-sign-in.component.scss']
})
export class AuthSignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

}
