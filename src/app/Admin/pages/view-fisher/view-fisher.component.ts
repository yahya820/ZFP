import { Component } from '@angular/core';
import { ApdFishermanComponent } from '../apd-fisherman/apd-fisherman.component';
import { MatDialog } from '@angular/material/dialog';

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
  selector: 'app-view-fisher',
  templateUrl: './view-fisher.component.html',
  styleUrls: ['./view-fisher.component.scss']
})
export class ViewFisherComponent {

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

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ApdFishermanComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
