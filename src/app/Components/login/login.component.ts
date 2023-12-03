import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/app/Models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: Credentials;
  email!: FormControl;
  password!: FormControl;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.credentials = new Credentials();
  }

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', Validators.required);

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  checkLogin(): void {
    console.log(
      'Email: ' + this.email.value + ' Password ' + this.password.value
    );
  }

  getErrorMessage(): string {
      return this.password.hasError('required') ? 'You must enter a password' : '';
  }
}
