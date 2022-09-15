import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup | null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    if (this.form?.invalid){
      return;
    }
    const tokenValue = this.form?.value.email + new Date().getTime();
    localStorage.setItem('token', tokenValue)
    this.router.navigate(['/home']);

  }


  private initForm(){
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      termsAndConditions: [false, Validators.requiredTrue]
    })
  }

}
