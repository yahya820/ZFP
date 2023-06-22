import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent  {
  form!: FormGroup;

  constructor(private router:Router){}

  ngOnInit(){
    this.form = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      pass : new FormControl( null,[Validators.required])
    })
  }

  Login(){}

  

}
