import { Component } from '@angular/core';
import { ApdFishermanComponent } from '../apd-fisherman/apd-fisherman.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(public dialog: MatDialog,private router:Router,private paymentService:PaymentService,
  private route:ActivatedRoute,private fishermanService:FishermanService,
  private modalService: NgbModal,) { }

    ngOnInit(){
      this.fetchAll();
  
      this.id = this.route.snapshot.params['id']
      this.fishermanService.getByUserId(this.id).subscribe(
        response => {
          console.log(response);
          this.fisherman1 = response;
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


  openDialog() {
    const dialogRef = this.dialog.open(ApdFishermanComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  view(){
    this.router.navigate(["/admin/card_fisher"]);
  }

  openBackDropCustomClass(tempa: any) {
        this.modalService.open(tempa, { scrollable: true, backdropClass: 'light-blue-backdrop' });
  }
onSubmit_fisherman(){
  const fisher_id = this.fisherman1.fisherman_id
  this.fishermanService.update(fisher_id,this.fisherman1).subscribe(
    response => {
      console.log(response);
    }
  )
}
}
