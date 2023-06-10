import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { User } from 'src/app/Services/user/User';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: any[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [4, 8, 12, 16];

  constructor( private router:Router,
    public userService: UserService){}
  ngOnInit(): void {
    this.retrieveAll();
  }

// get user by id
  view(id: number){
    this.router.navigate(['/admin/view_user',{id}]);
  }
  views(){
    this.router.navigate(["/admin/view_user"])
  }

  //Delete by id 
  delete(id:number){
   this.userService.delete(id).subscribe((response)=> {
      // this.users = response;
      this.retrieveAll();
    })
  }

  //get All User
  retrieveAll(): void {
    this.userService.get().subscribe((response) => {
      this.users=response;
      console.log("the message is  ", this.users);
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.retrieveAll();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.retrieveAll();
  }

}
