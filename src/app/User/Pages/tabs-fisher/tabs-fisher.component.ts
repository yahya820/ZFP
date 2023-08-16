import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelGuard } from 'src/app/common/model_guard/model.guard';
import Swal from 'sweetalert2';
import { HeadersComponent } from '../../Common/headers/headers.component';
import { PaymentFisherman } from 'src/app/Model/PaymentFisherman';
import { fisherman } from 'src/app/Model/Fisherman';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';

@Component({
  selector: 'app-tabs-fisher',
  templateUrl: './tabs-fisher.component.html',
  styleUrls: ['./tabs-fisher.component.scss']
})
export class TabsFisherComponent {
  currentDate = new Date().toISOString().split('T')[0];
  payment_fisherman_model : PaymentFisherman = new PaymentFisherman();
  fisherman_model : fisherman = new fisherman();
  fihserman2 : any
  imageSrc! : String;
  imageRisiti! : String;
  form1!:FormGroup;

  @ViewChild(MatTabGroup)
  tabGroup!: MatTabGroup;

  constructor(private auth:ModelGuard,
    private modalService: NgbModal,
    private headers: HeadersComponent,
    private fishermanService:FishermanService,
    private paymentService: PaymentService  ){}

  // Profile Picture
  // displayImage(event : any){
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = (e) => {
  //     this.imageSrc = reader.result as String;
  //   };
  // }

  // // Risiti picture
  // displayRisiti(event : any){
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = (e) => {
  //     this.imageRisiti = reader.result as String;
  //   };
  // }

  onSubmit(){

  }

  // Form Validation
  ngOnInit(): void {
    this.form1 = new FormGroup({

      // BInafsi
      // image : new FormControl(null,[Validators.required]),
      diko_usage : new FormControl(null,[Validators.required]),
      ways : new FormControl(null,[Validators.required]),
      meter : new FormControl(null,[Validators.required]),
      type : new FormControl(null,[Validators.required]),


      // malipo
      acc : new FormControl(null,[Validators.required]),
      // no_ac : new FormControl(null,[Validators.required]),
      no_risiti : new FormControl(null,[Validators.required]),
      date : new FormControl(null,[Validators.required]),
      // risiti : new FormControl(null,[Validators.required])

    })
  }

  openBackDropCustomClass(tempa: any) {
    const token = sessionStorage.getItem("fishermanId")
     if(this.auth.canActivate()){
      if(!token){
        this.modalService.open(tempa, { scrollable: true, backdropClass: 'light-blue-backdrop' });
      } else {
        Swal.fire({
          title: "Tayari Umeshafikisha Taarifa zako za Leseni ya Uvuvi",
          icon : "error"
        })
      }
      
     } else {
      this.headers.openDialog();
     }
	}

  onSubmit_fisherman() {
    // const value = this.form1.value;
    const value = this.fisherman_model;
    value.userId = sessionStorage.getItem('id');
    
    this.fishermanService.add(value).subscribe(
      fishresponse => {
        console.log(fishresponse);
        this.fihserman2 = fishresponse;
        sessionStorage.setItem("fishermanId", this.fihserman2.fishermanId)
  
        const value_payment = this.payment_fisherman_model;
        value_payment.fishermanId = sessionStorage.getItem("fishermanId")  // Set the fishermanId from the saved Fisherman object
        // value_payment.vessel_id = null
        this.paymentService.addFisherman(value_payment).subscribe(
          response => {
            console.log(response);
          }
        );
      },error => {
        Swal.fire({
          title: "Tayari Umesajiliwa",
          icon : "error",
          text : "Angalia kwenye Akaunti yako"
        })
      }
    );
  }

}
