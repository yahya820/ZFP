import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
hide =true;
form!:FormGroup;
constructor(private dialogRef: MatDialogRef<LoginComponent>,
  private userServices:UserService,
  private router:Router) {}

ngOnInit(){
  this.form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    pass : new FormControl(null,[Validators.required])
  });
}

register(){
  this.router.navigate(["/register"])
}


Login(){
  const value = this.form.value
  return this.userServices.login(value.name, value.pass).subscribe (
    respo => {
      console.log(respo)
     sessionStorage.setItem("name", respo.name);
     sessionStorage.setItem("id", respo.userId);
      if (respo.roles == "USER"){
        window.location.reload()
        this.router.navigate(["/menu"])
      } else {
        this.router.navigate(["/admin/home"])
        location.reload()
      }
    }, error => {
       Swal.fire({
        title : "Umekosea Jina lako au Neno la Siri"
       })
    }
    
  )
  console.log("String")
}

  close(){
    this.dialogRef.close();
  }
}
