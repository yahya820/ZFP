import { Component, ViewChild } from '@angular/core';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-fisherman',
  templateUrl: './payment-fisherman.component.html',
  styleUrls: ['./payment-fisherman.component.scss']
})
export class PaymentFishermanComponent {
  form!:FormGroup;
  payment: any;
  displayedColumns: string[] = ['index', 'name', 'acc_name', 'receipt_no', 'date'];
  // payment!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator ;

  constructor(private paymentservice: PaymentService) {}

  ngOnInit() {
    this.form = new FormGroup({
      startDate: new FormControl(""),
      endDate : new FormControl('')
    })
    this.getAllPaymentFisherman();
  }

  getAllPaymentFisherman() {
    this.paymentservice.getAllPaymentFisherman().subscribe(
      (response:any) => {
        this.payment = new MatTableDataSource(response);
        this.payment.paginator = this.paginator;
      }
    );
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

  filter(){
    this.paymentservice.getPaymentFishermanByDate(this.form.value.startDate,this.form.value.endDate).subscribe(
      response => {
        this.payment = response;
      }
    )
  }

}





