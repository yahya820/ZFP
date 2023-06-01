import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Services/user/User';
import { UserService } from 'src/app/Services/user/user.service';
import { ApdUserComponent } from '../apd-user/apd-user.component';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  id!: number
  user! : User
  
  constructor(private route:ActivatedRoute,
    private userService: UserService,
    public dialog: MatDialog){}

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];

   this.user = new User();
   this.userService.getId(this.id).subscribe((response) => {
    this.user = response;
   })
  }
  openDialog() {
    const dialogRef = this.dialog.open(ApdUserComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
