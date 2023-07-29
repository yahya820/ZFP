import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent  {
  form!: FormGroup;

  constructor(private router:Router, private userServices:UserService){}

  ngOnInit(){
    this.form = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      pass : new FormControl( null,[Validators.required])
    })
  }

  Login(){
    const value = this.form.value
   this.userServices.login(value.name, value.pass).subscribe (
      respo => {
        console.log(respo)
       sessionStorage.setItem("name", respo.name);
       sessionStorage.setItem("id", respo.userId);
        if (respo.roles == "USER"){
          // window.location.reload()
          this.router.navigate(["/menu"])
        } else {
          this.router.navigate(["/admin/home"])
        }
      }, error => {
         Swal.fire({
          title : "Umekosea Jina lako au Neno la Siri"
         })
      }
      
    )
    console.log("String")
  }

  

}
