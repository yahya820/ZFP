import { Component, OnInit, TemplateRef,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
// import { User } from 'src/app/Services/user/User';
import { UserService } from 'src/app/Services/user/user.service';
import { ApdUserComponent } from '../apd-user/apd-user.component';
import { AdminMessageComponent } from '../admin-message/admin-message.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Model/User';
import { MessageService } from 'src/app/Services/message/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  id!: number
  user: any;
  form!:FormGroup;
  
  constructor(private route:ActivatedRoute,
    private userService: UserService,
    public dialog: MatDialog,
    private modalService: NgbModal,
    private messageService:MessageService){}
    @ViewChild('tempa') tempa!:TemplateRef<any>

  ngOnInit() {
   this.id = this.route.snapshot.params['id'];

  //  this.user = new User();
   this.userService.getId(this.id).subscribe((response) => {
    this.user = response;
   })

   this.form = new FormGroup({
    message : new FormControl (null,[Validators.required])
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
  openBackDropCustomClassMessage(message:any) {
		this.modalService.open(message, { size: 'md', backdropClass: 'light-blue-backdrop' });
	}

  openDialog1() {
    const dialogRef = this.dialog.open(AdminMessageComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  save(){
    this.userService.updateleader(this.id,this.user).subscribe(
      response => {
        console.log(response);
      }
    )
  }
  submitMessage(){
    this.messageService.add(this.id,this.form.value).subscribe(
      response => {
        console.log(response);
      }
    ),Swal.fire({
      title: "Ujumbe Umefika kikamilifu",
      icon : "success"
    })
  }


}
// function viewChild(arg0: string): (target: ViewUserComponent, propertyKey: "tempa") => void {
//   throw new Error('Function not implemented.');
// }

