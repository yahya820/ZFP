import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentVessel } from 'src/app/Model/PaymentVessel';
import { Vessel } from 'src/app/Model/Vessel';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import { VesselService } from 'src/app/Services/vessel/vessel.service';
import { ModelGuard } from 'src/app/common/model_guard/model.guard';

@Component({
  selector: 'app-tab-vess',
  templateUrl: './tab-vess.component.html',
  styleUrls: ['./tab-vess.component.scss']
})
export class TabVessComponent implements OnInit {
  vessel_model : Vessel =  new Vessel();
  payment_vessel_model : PaymentVessel = new PaymentVessel();
  form1!:FormGroup;
  imageSrc! : String;
  imageRisiti! : String;

  constructor(private router:Router,
  private paymentService: PaymentService,
  private vesslService : VesselService,
  private modalService: NgbModal,
  private auth:ModelGuard,
  ){}

  @ViewChild(MatTabGroup)
  tabGroup!: MatTabGroup;

  // Profile Picture
  displayImage(event : any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.imageSrc = reader.result as String;
    };
  }

  // Risiti picture
  displayRisiti(event : any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.imageRisiti = reader.result as String;
    };
  }

  // Form Validation
  ngOnInit(): void {
    this.form1 = new FormGroup({
      // chombo
      name_vessel : new FormControl(null,[Validators.required]),
      type_vessel : new FormControl(null,[Validators.required]),
      no_people : new FormControl(null,[Validators.required]),
      meter : new FormControl(null,[Validators.required]),
      no_vessel : new FormControl(null,[Validators.required]),
      ways : new FormControl(null,[Validators.required]),

    //})

    // this.form1 = new FormGroup({
      acc_name : new FormControl(null,[Validators.required]),
      acc_no : new FormControl(null,[Validators.required]),
      receipt_no : new FormControl(null,[Validators.required]),
      date : new FormControl(null,[Validators.required]),
      // receipt_image : new FormControl(null,[Validators.required])
     })
  }
  onSubmitVessel(){

  }
  openDialog1(chombo:any) {
    // if(this.auth.canActivate()){
      this.modalService.open(chombo, { scrollable: true, backdropClass: 'light-blue-backdrop' });
    // }else{
    //   // this.openDialog();
    // }
  }
    

  

  onSubmit(){
    // var values = this.form1.value
    // this.vesslService.add(values).subscribe ( response => {
    //   console.log(response);

    //   this.paymentService.add(values).subscribe( response => {
    //     console.log(response);
    //   })
    // })
  }


}
