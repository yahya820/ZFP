import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { User } from 'src/app/Services/user/User';
import { UserService } from 'src/app/Services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // user: User = new User();
  selectedFile!:File;
  message!: String;
  imageSrc! : String;
  form1!:FormGroup;
   // Profile Picture
   displayImage(event : any){
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (e) => {
      this.imageSrc = reader.result as String;
    };
  }

  constructor(private router:Router,private userService: UserService){}

    // Form Validation
    ngOnInit(): void {
      this.form1 = new FormGroup({
  
        // BInafsi
        //image : new FormControl(null,[Validators.required]),
        name : new FormControl(null,[Validators.required]),
        work : new FormControl(null,[Validators.required]),
        address : new FormControl(null,[Validators.required]),
        phone : new FormControl(null,[Validators.required]),
        identity : new FormControl(null,[Validators.required]),
        nationality : new FormControl(null,[Validators.required]),
        sex : new FormControl(null,[Validators.required]),
        age : new FormControl(null,[Validators.required]),
        pass : new FormControl(null,[Validators.required]),
        email : new FormControl(null,[Validators.required]),
        username : new FormControl(null,[Validators.required]),
        roles : new FormControl("USER"),
        leader : new FormControl(null)
  
      })
    }
    onSubmit(){
      
    }
    Submit(){
      const values = this.form1.value;
      if (this.userService.add(values).subscribe((response)=>{
        console.log(response);
      })){
        Swal.fire({
          title: 'Registration Successful',
          // text: 'You have been registered as an admin',
          icon: 'success'
        }).then (()=> {
          this.router.navigate(['/menu'])
        });
      }
      
      
    }

}
