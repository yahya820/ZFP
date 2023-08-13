import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/Services/images/image.service';
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
  public formData = new FormData();
  selectedFile!:File;
  message!: String;
  imageSrc! : String;
  form1!:FormGroup;
   // Profile Picture
   displayImage(event : any){
    this.selectedFile = event.target.files[0] as File;
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (e) => {
      this.imageSrc = reader.result as String;
    };
  }

  constructor(private router:Router,private userService: UserService,private imageService: ImageService,
    private fb:FormBuilder){}

    // Form Validation
    ngOnInit(): void {
      this.form1 = this.fb.group({
  
        // BInafsi
        //image : new FormControl(null,[Validators.required]),
        name : [null,[Validators.required]],
        work : [null,[Validators.required]],
        address : [null,[Validators.required]],
        phone : [null,[Validators.required,Validators.minLength(10)]],
        identity : [null,[Validators.required,Validators.minLength(10)]],
        nationality : [null,[Validators.required]],
        sex : [null,[Validators.required]],
        age : [null,[Validators.required]],
        pass : [null,[Validators.required]],
        email : [null,[Validators.required,Validators.email]],
        roles : ["USER"],
        leader : [null]
  
      })
    }
    onSubmit(){
      
    }
    Submit(){

  //     //For Images
  //     this.formData.set('file', this.selectedFile, this.selectedFile.name);
  //     this.imageService.uploadImage(this.formData).subscribe(
  //             res => {
  //             this.imageSrc = res;
  //   }
  // );

      const values = this.form1.value;
      this.userService.add(values).subscribe(
        response => {
          console.log(response)
          Swal.fire({
            title: "Usajili Umekamilika",
            icon:"success"
          })
          this.router.navigate(['menu'])
        },error => {
          console.log(error);
          Swal.fire({
            title: "Akaunti ishasajiliwa",
            icon: "error"
          })
          this.ngOnInit();
        }
      )
    }

}
