import { Component } from '@angular/core';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-payment-fisherman',
  templateUrl: './payment-fisherman.component.html',
  styleUrls: ['./payment-fisherman.component.scss']
})
export class PaymentFishermanComponent {
  payment:any;
  constructor(private paymentservice:PaymentService){}
  ngOnInit(){
    this.getAllPaymentFisherman();
  }
  getAllPaymentFisherman(){
    this.paymentservice.getAllPaymentFisherman().subscribe(
      response => {
        console.log(response)
        this.payment = response;
      }
    )
  }
  printTable() {
    let DATA: any = document.getElementById('htmlData');
      html2canvas(DATA).then((canvas) => {
        let fileWidth = 208;
        let fileHeight = (canvas.height * fileWidth) / canvas.width;
        const FILEURI = canvas.toDataURL('image/png');

      

        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.text("thi is my time", 14 , 20);
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        PDF.save('angular-demo.pdf');
      });
  }
  

}
