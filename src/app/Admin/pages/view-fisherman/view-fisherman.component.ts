import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';

@Component({
  selector: 'app-view-fisherman',
  templateUrl: './view-fisherman.component.html',
  styleUrls: ['./view-fisherman.component.scss']
})
export class ViewFishermanComponent {
  fisherman1:any
  fisherman2:any
  id!:number
  constructor(private route:ActivatedRoute,private fishermanService:FishermanService){}
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

}
