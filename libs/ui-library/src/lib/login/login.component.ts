import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'mines-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  login() {
    if (this.form.invalid) return;
    this.router.navigate(['/metals']);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      username: ['', Validators.required],
    });
  }
}
