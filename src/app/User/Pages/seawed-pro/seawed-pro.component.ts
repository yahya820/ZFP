import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlgaeComponent } from '../algae/algae.component';
import { User } from 'src/app/Services/user/User';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-seawed-pro',
  templateUrl: './seawed-pro.component.html',
  styleUrls: ['./seawed-pro.component.scss']
})
export class SeawedProComponent {
  form!:FormGroup;
  users : User = new User();
  constructor(public dialog: MatDialog,
    private Router: Router,
    private userService:UserService) {}

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
  onSubmit(){
    if (this.users.leader == this.form.value.number){
      this.Router.navigateByUrl("/algae")
    }else {
      Swal.fire({
        title: 'Umekosea Namba ya Uongozi',
        // text: 'You have been registered as an admin',
        // Error: 'success'
      })
    }
  }

}
