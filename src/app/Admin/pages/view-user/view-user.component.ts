import { Component, OnInit, TemplateRef,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
// import { User } from 'src/app/Services/user/User';
import { UserService } from 'src/app/Services/user/user.service';
import { ApdUserComponent } from '../apd-user/apd-user.component';
import { AdminMessageComponent } from '../admin-message/admin-message.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Services/user/User';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  id!: number
  user:  User = new User();
  form!: FormGroup;
  
  constructor(private route:ActivatedRoute,
    private userService: UserService,
    public dialog: MatDialog,
    private modalService: NgbModal){}
    @ViewChild('tempa') tempa!:TemplateRef<any>

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];

  //  this.user = new User();
   this.userService.getId(this.id).subscribe((response) => {
    this.user = response;
   })

   this.form = new FormGroup({
    leader : new FormControl (null,[Validators.required])
   }) 
  }

  openDialog(id:number) {
    const dialogRef = this.dialog.open(ApdUserComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openBackDropCustomClass(data: any) {
		this.modalService.open(this.tempa, { size: 'md', backdropClass: 'light-blue-backdrop' });
    this.user = data;
    console.log(this.user);

	}

  openDialog1() {
    const dialogRef = this.dialog.open(AdminMessageComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  save(){
    var value = this.form.value;
    this.userService.update(this.id, this.form.value).subscribe(responser => {
      console.log("the update is => ", responser)
    })
  }


}
// function viewChild(arg0: string): (target: ViewUserComponent, propertyKey: "tempa") => void {
//   throw new Error('Function not implemented.');
// }

