import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  formValid: boolean = true;
  usernameValid: boolean = true;
  username: string = '';
  passwordValid: boolean = true;
  password: string = '';

  ngOnInit(): void {}

  onSubmit(): void {
    this.usernameValid =
      !!this.username && /^[a-zA-Z0-9]+$/.test(this.username);
    this.passwordValid =
      !!this.password && /^[a-zA-Z0-9]+$/.test(this.password);

    this.formValid = this.usernameValid && this.passwordValid;

    if (this.formValid) this.router.navigate(['/contactUs']);
  }
}
