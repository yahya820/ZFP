import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import { NgbAccordionModule, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { LocationService } from 'src/app/Services/location/location.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ImageService } from 'src/app/Services/images/image.service';
import { DomSanitizer } from '@angular/platform-browser';

interface DistrictsMap {
  [region: string]: string[];
}

@Component({
  selector: 'app-view-fisherman',
  templateUrl: './view-fisherman.component.html',
  styleUrls: ['./view-fisherman.component.scss']
})
export class ViewFishermanComponent {
  booking_id:any;
  imageSource1!:any
  Selectfile1: File = null!;
  dialog: any;
  onImageUpload(event:any){
    this.Selectfile1 = event.target.files[0];
  }
  constructor(private imageService:ImageService ,
    private sanitizer: DomSanitizer,){}

   saveReceipt(){
  //   const form1 = new FormData();
  //   form1.append('imageFile', this.Selectfile1,this.Selectfile1.name);
  //   this.imageService.uploadReceipts(form1).subscribe((resp:any)=>{
  //     console.log(resp)
  //     // this.booking_id = resp
  //   })
  // }
  // ngOnInit(){
  //   this.imageService.getReceipts(202).subscribe(
  //     respo => {
  //       console.log(respo)
  //       this.booking_id = respo;
  //       this.imageSource1 = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${respo.image}`);

  //     }
  //   )
  }
}