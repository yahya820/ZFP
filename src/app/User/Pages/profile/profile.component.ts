import { identifierName } from '@angular/compiler';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentFisherman } from 'src/app/Model/PaymentFisherman';
import { User } from 'src/app/Model/User';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { ImageService } from 'src/app/Services/images/image.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import { UserService } from 'src/app/Services/user/user.service';
import { VesselService } from 'src/app/Services/vessel/vessel.service';
import Swal  from "sweetalert2"
// import { User } from 'src/app/Services/user/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user_model : User = new User();
  fisherman: any
  user:any
  vessel:any
  payment:any
  vesselProfile:any
  payment_model : PaymentFisherman = new PaymentFisherman();
  id = sessionStorage.getItem("id")
  public isCollapsed = true;
  imageSource!:any

  constructor(private route:ActivatedRoute,
    private userService : UserService,
    private fishermanService:FishermanService,
    private vesselService:VesselService,
    private paymentService:PaymentService,
    private modalService: NgbModal,
    private router:Router,
    private imageService:ImageService,
    private sanitizer:DomSanitizer){}
    @ViewChild('edit') edit!:TemplateRef<any> 

  ngOnInit(){
    console.log(sessionStorage.getItem("fishermanId"))

    this.imageService.getReceipts(this.id).subscribe(
      response => {
        this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${response.image}`);
      }
    )

      this.getAllPayment();
      this.getUserIdandFishermanId(); 
      this.getUserIdOnly()
      this.getAllVesselInProfile();  
  }
  getUserIdOnly(){
    this.userService.getId(sessionStorage.getItem("id")).subscribe(
      response => {
        console.log(response);
        this.fisherman = response;
      }
    )
  }
//method of update
  save(){
    this.userService.update(this.id,this.fisherman).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  getUserIdandFishermanId(){
    this.fishermanService.getByUserId(sessionStorage.getItem("id")).subscribe(
      respo => {
        console.log(respo)
        this.user =respo;
      }
    )
  }

  getAllPayment(){
    this.paymentService.getByFishermanId(sessionStorage.getItem("id")).subscribe(
      response => {
      console.log(response);
      this.payment = response;
      }
    )
  }

  profile(data: any) {
		this.modalService.open(this.edit, { size: 'md', backdropClass: 'light-blue-backdrop' });
    this.fisherman = data;
    console.log(this.fisherman);

	}
  
  openBackDropCustomClass(tempa: any) {
     this.modalService.open(tempa, { scrollable: true, backdropClass: 'light-blue-backdrop' });
 }

 payment_submit(){
  this.payment_model.fishermanId = this.user.fisherman_id
  this.paymentService.addFisherman(this.payment_model).subscribe(
    response => {
      console.log(response);
      this.getAllPayment();
    }
 ),Swal.fire({
  title: "Malipo yamekamilka",
  icon : "success"
})
 }

//  close(){
//   this.dialogRef.close();
// }
getAllVesselInProfile(){
  this.vesselService.getAllVesselInProfile(sessionStorage.getItem("id")).subscribe(
    response => {
      console.log(response)
      this.vesselProfile = response;
    }
  )
}
view(id:number){
  this.router.navigate(["vessel_payment",{id}])
}
print(){
  window.print()
}

}
