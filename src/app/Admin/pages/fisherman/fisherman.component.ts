import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';

@Component({
  selector: 'app-fisherman',
  templateUrl: './fisherman.component.html',
  styleUrls: ['./fisherman.component.scss']
})
export class FishermanComponent {
  fisherman:any
  constructor(private router:Router, private fishermanService:FishermanService,
    private paymentService:PaymentService){}

  ngOnInit(){
    this.findAll();
  }

  findAll(){
    this.paymentService.getAllFisherman().subscribe(
      respo => {
        console.log(respo)
        this.fisherman = respo;
      }
    )
  }

  view(id:number){
    this.router.navigate(["/admin/view_fisher",{id}])
  }

}
