import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentVessel } from 'src/app/Model/PaymentVessel';
import { PaymentService } from 'src/app/Services/payment/payment.service';

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
    private modalService: NgbModal){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    this.getAllPaymentByUSerId();

    
  }
  getAllPaymentByUSerId(){
    this.paymentService.getAllPaymentByUSerId(this.id).subscribe(
      response => {
        console.log(response)
        this.vesselpayment = response;
      }
    )
  }

 

  openBackDropCustomClass(tempa: any) {
    this.modalService.open(tempa, { scrollable: true, backdropClass: 'light-blue-backdrop' });
  }

payment_submit(){
const id = this.vesselpayment[0].vessel_id;
  this.paymentService.postPaymentByVesseId(id,this.vesselpayment).subscribe(
    response => {
      console.log("payment =>",response)
      this.getAllPaymentByUSerId();
    }
  )
}
}
