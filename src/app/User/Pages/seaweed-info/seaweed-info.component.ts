import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeadersComponent } from '../../Common/headers/headers.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-seaweed-info',
  templateUrl: './seaweed-info.component.html',
  styleUrls: ['./seaweed-info.component.scss']
})
export class SeaweedInfoComponent {
form!:any
users:any
  constructor(private router:Router,private headers:HeadersComponent,
    private modalService: NgbModal,
    private userService:UserService){}

    ngOnInit(){
      this.form = new FormGroup({
        number : new FormControl(null,[Validators.required])
      })
      this.userService.getId(sessionStorage.getItem("id")).subscribe(
        response => {
          this.users = response
          console.log(this.users)
        }
      )
    }

  mwaniOpen(){
    const token = sessionStorage.getItem("id")
    if(token){
      this.router.navigate(["seaweed"])
    } else { 
      this.headers.openDialog();
    }
  }
  openSm(content:any) {
    const token = sessionStorage.getItem("id")
		if(token){
      this.modalService.open(content, { size: 'sm',centered: true });
    } else {
      this.headers.openDialog()
    }
	}
  onSubmit(){
    if (this.users.leader == this.form.value.number){
      this.router.navigateByUrl("/algae")
    }else {
      Swal.fire({
        title: 'Umekosea Namba ya Uongozi',
        icon: 'error',
        text: 'Angalia Kwenye Sehemu ya Taarifa'
        
      })
    }
  }

}
