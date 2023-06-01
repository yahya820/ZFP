import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Services/user/User';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-apd-user',
  templateUrl: './apd-user.component.html',
  styleUrls: ['./apd-user.component.scss']
})
export class ApdUserComponent {
  id!: number;
  users: User = new User;
  form!:FormGroup;

  constructor(private userService: UserService,
    private route: ActivatedRoute){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']

    this.form = new FormGroup({
      diko_usage : new FormControl(null,[Validators.required])
    })
  }

  save(){
    this.userService.update(this.id, this.users).subscribe ((response)=> {
      console.log("SuccessFull");
    })
  }

}
