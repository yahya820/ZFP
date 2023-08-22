import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { User } from 'src/app/Services/user/User';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: any;
  form!:FormGroup;

  constructor( private router:Router,
    public userService: UserService,
    private modalService: NgbModal,){}

  ngOnInit(): void {
    this.retrieveAll();

    this.form = new FormGroup({
      name :new FormControl("",[Validators.required])
    })
  }

  filter(){
    this.userService.getNameByName(this.form.value.name).subscribe(
      response => {
        this.users = response
      }
    )
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
  retrieveAll(){
    this.userService.get().subscribe((response) => {
      this.users=response;
      console.log("the message is  ", this.users);
    })
  }

  // onTableDataChange(event: any) {
  //   this.page = event;
  //   this.retrieveAll();
  // }
  // onTableSizeChange(event: any): void {
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.retrieveAll();
  // }

  openBackDropCustomClass(tempa: any) {
    this.modalService.open(tempa, { size: 'xl', scrollable: true, backdropClass: 'light-blue-backdrop' });
  }

}
