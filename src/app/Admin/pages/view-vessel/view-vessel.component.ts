import { Component } from '@angular/core';
import { ApdVesselComponent } from '../apd-vessel/apd-vessel.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(public dialog: MatDialog,private router:Router,
    private route:ActivatedRoute,private paymentService:PaymentService,
    private modalService: NgbModal,) { }
  vessel1:any
  id!:number;

  ngOnInit(){
    this.id = this.route.snapshot.params["id"]
    this.paymentService.getAllPaymentByUSerId(this.id).subscribe(
      response => {
        console.log(response)
        this.vessel1 = response;

      }
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(ApdVesselComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  view(){
    this.router.navigate(["/admin/card_vessel"]);
  }
  openDialog1(chombo:any) {
    // if(this.auth.canActivate()){
      this.modalService.open(chombo, { scrollable: true, backdropClass: 'light-blue-backdrop' });
    // }else{
    //   // this.openDialog();
    // }
  }
  onSubmitVessel(){
    
  }

}
