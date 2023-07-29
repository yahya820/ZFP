import { Component } from '@angular/core';
import { ApdFishermanComponent } from '../apd-fisherman/apd-fisherman.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';

@Component({
  selector: 'app-view-fisher',
  templateUrl: './view-fisher.component.html',
  styleUrls: ['./view-fisher.component.scss']
})
export class ViewFisherComponent {
  fisherman:any
  id!:number

  name!:"yahya";
  constructor(public dialog: MatDialog,private router:Router,private paymentService:PaymentService,
    private route:ActivatedRoute) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id']

    this.paymentService.getByFishermanId(this.id).subscribe(
      response => {
        console.log(response)
        this.fisherman = response;
        console.log(this.fisherman.acc_name)
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

}
