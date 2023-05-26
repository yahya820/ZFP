import { Component } from '@angular/core';
import { ApdVesselComponent } from '../apd-vessel/apd-vessel.component';
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
  selector: 'app-view-vessel',
  templateUrl: './view-vessel.component.html',
  styleUrls: ['./view-vessel.component.scss']
})
export class ViewVesselComponent {
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

  openDialog() {
    const dialogRef = this.dialog.open(ApdVesselComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
