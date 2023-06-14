import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';
// import { User } from 'src/app/Services/user/User';
export interface User {
  name: string;
  username: string;
  email: string;
  profilePicture: string;
  bio: string;
  location: string;
  website: string;
  phone_no : string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  // user!:any

  id = sessionStorage.getItem("name");
  // user : User = new User()

  user: User = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location: 'New York, NY',
    website: 'https://example.com',
    phone_no: '0776955066',
  };

  constructor(private route:ActivatedRoute,
    private userService : UserService){} 

  ngOnInit(){
    this.userService.getId(sessionStorage.getItem("id")).subscribe(
      Response => {
        this.user = Response;
        console.log(this.user);
      }
    )
    
  }

}
