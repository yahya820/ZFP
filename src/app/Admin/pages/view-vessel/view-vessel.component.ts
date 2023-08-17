import { Component } from '@angular/core';
import { ApdVesselComponent } from '../apd-vessel/apd-vessel.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VesselService } from 'src/app/Services/vessel/vessel.service';
import Swal from 'sweetalert2'
import { ImageService } from 'src/app/Services/images/image.service';
import { DomSanitizer } from '@angular/platform-browser';
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
    private modalService: NgbModal,
    private vesselService:VesselService,
    private imageService:ImageService,
    private sanitizer:DomSanitizer) { }
  vessel1:any
  id!:number;
  imageSource!:any

  ngOnInit(){
    this.id = this.route.snapshot.params["id"]
    this.vesselService.getByVessel(this.id).subscribe(
      response => {
        console.log(response)
        this.vessel1 = response;

        this.imageService.getReceipts(this.vessel1.user.userId).subscribe(
          response => {
            this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${response.image}`);
          }
         )

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
      this.modalService.open(chombo, { backdropClass: 'light-blue-backdrop' });
    // }else{
    //   // this.openDialog();
    // }
  }
  onSubmitVessel(){
    this.vesselService.updateVessel(this.id,this.vessel1).subscribe(
      response => {
        console.log(response)
      }
    ),Swal.fire({
      title: "Taarifa zimebadilika kikamilifu",
      icon: "success"
    })
  }

}
