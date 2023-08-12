import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentService } from 'src/app/Services/payment/payment.service';

@Component({
  selector: 'app-payment-vessel',
  templateUrl: './payment-vessel.component.html',
  styleUrls: ['./payment-vessel.component.scss']
})
export class PaymentVesselComponent {
  payment:any
  form!:FormGroup;
  constructor(private paymentService:PaymentService){}

  ngOnInit(){
    this.getAllPayment();

    this.form = new FormGroup({
      startDate : new FormControl(""),
      endDate : new FormControl("")
    })


  }
  getAllPayment(){
    this.paymentService.getAllPaymentInVessel().subscribe(
      response => {
        console.log(response)
        this.payment = response;
      }
    )
  }

  filter(){
    this.paymentService.getPaymentVesselByDate(this.form.value.startDate,this.form.value.endDate).subscribe(
      response => {
        this.payment = response;
      }
    )
  }
}
