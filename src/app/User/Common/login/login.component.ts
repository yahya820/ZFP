import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
hide =true;
form2!:FormGroup;
constructor(private dialogRef: MatDialogRef<LoginComponent>) {}

ngOnInit() : void {
  this.form2 = new FormGroup({
    email : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  })
}

  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.form2.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.form2.hasError('email') ? 'Not a valid email' : '';
  // } 
  close(){
    this.dialogRef.close();
  }
}
