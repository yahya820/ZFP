import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.scss']
})
export class AdminMessageComponent {
  form!: FormGroup;
  
  constructor(private router:Router,
    private dialogRef: MatDialogRef<AdminMessageComponent>,){}

  ngOnInti(){
    this.form = new FormGroup({
      message : new FormControl (null, [Validators.required])
    })
  }
  submit(){

  }
  close(){
    this.dialogRef.close();
  }

}
