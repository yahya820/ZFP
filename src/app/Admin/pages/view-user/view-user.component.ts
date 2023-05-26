import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Services/user/User';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  id!: number
  user! : User
  
  constructor(private route:ActivatedRoute,
    private userService: UserService){}
  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];

   this.user = new User();
   this.userService.getId(this.id).subscribe((response) => {
    this.user = response;
   })
  }


}
