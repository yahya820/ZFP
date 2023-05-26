import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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
  
      })
    }
    onSubmit(){
      
    }
    Submit(){
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    // const uploadImageData = new FormData();
    // uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

      const values = this.form1.value
      this.userService.add(values).subscribe(response => {
        console.log(response);
      })
      
    }

}
