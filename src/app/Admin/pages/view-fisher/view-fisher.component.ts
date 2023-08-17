import { Component } from '@angular/core';
import { ApdFishermanComponent } from '../apd-fisherman/apd-fisherman.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'
import { CardFisherComponent } from '../card-fisher/card-fisher.component';
import { ImageService } from 'src/app/Services/images/image.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-fisher',
  templateUrl: './view-fisher.component.html',
  styleUrls: ['./view-fisher.component.scss']
})
export class ViewFisherComponent {
  fisherman1:any
  fisherman2:any
  fisherman3:any
  id!:number
  imageSource!:any

  constructor(public dialog: MatDialog,private router:Router,private paymentService:PaymentService,
  private route:ActivatedRoute,private fishermanService:FishermanService,
  private modalService: NgbModal,
  private imageService:ImageService,
  private sanitizer:DomSanitizer) { }

    ngOnInit(){
      this.fetchAll();
  
      this.id = this.route.snapshot.params['id']

      this.fishermanService.getByFishermanId(this.id).subscribe(
        response => {
          console.log(response);
          this.fisherman1 = response;

          this.imageService.getReceipts(this.fisherman1?.user.userId).subscribe(
            response => {
              this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${response.image}`);
            }
           )
          
        }
        
      )
      
    }
  
    fetchAll(){
      this.fishermanService.getAll().subscribe(
        response => {
          console.log(response);
          this.fisherman2 = response

        }
      )
    }


  // openDialog() {
  //   const dialogRef = this.dialog.open(ApdFishermanComponent);

  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  view(){
    this.router.navigate(["/admin/card_fisher"]);
  }

  openBackDropCustomClass(tempa: any) {
        this.modalService.open(tempa, { scrollable: true, backdropClass: 'light-blue-backdrop' });
  }
  onSubmit_fisherman(){
    this.fishermanService.update(this.id,this.fisherman1).subscribe(
      response => {
        console.log(response);
      }
    ),Swal.fire({
      title: "Taarifa zimebadilika kikamilifu",
      icon: "success"
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(CardFisherComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
