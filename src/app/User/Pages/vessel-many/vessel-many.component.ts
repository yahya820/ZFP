import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentVessel } from 'src/app/Model/PaymentVessel';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import { VesselService } from 'src/app/Services/vessel/vessel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vessel-many',
  templateUrl: './vessel-many.component.html',
  styleUrls: ['./vessel-many.component.scss']
})
export class VesselManyComponent {
  id!:number
  vesselpayment:any
  payment_model : PaymentVessel = new PaymentVessel();
  constructor(private route:ActivatedRoute,
    private paymentService:PaymentService,
    private modalService: NgbModal,
    private vesselService :VesselService){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    this.getAllPaymentByUSerId();
    this.getVesselandPayment();
    
  }

  getVesselandPayment(){
    this.vesselService.getByVessel(this.id).subscribe(
      response => {
        console.log(response)
        this.vesselpayment = response;
      }
    )
  }
  getAllPaymentByUSerId(){
    this.paymentService.getAllPaymentByUSerId(this.id).subscribe(
      response => {
        console.log(response)
        
        
      }
    )
  }

 

  openBackDropCustomClass(tempa: any) {
    this.modalService.open(tempa, { scrollable: true, backdropClass: 'light-blue-backdrop' });
  }

payment_submit(){
  this.paymentService.postPaymentByVesseId(this.id,this.payment_model).subscribe(
    response => {
      console.log("payment =>",response)
      this.ngOnInit();
    }
  ),Swal.fire({
    title: "Malipo yamekamilika",
    icon: "success"
  })
}
}
