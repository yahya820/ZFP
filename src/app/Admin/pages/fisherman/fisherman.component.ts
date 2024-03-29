import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    private paymentService:PaymentService,
    private modalService: NgbModal,){}

  ngOnInit(){
    this.findAll();
  }

  findAll(){
    this.fishermanService.getAllFisherman().subscribe(
      response => {
        console.log(response)
        this.fisherman = response;
      }
    )
  }

  view(id:number){
    this.router.navigate(["/admin/view_fisher",{id}])
  }
  openBackDropCustomClass(tempa: any) {
    this.modalService.open(tempa, { size: 'xl', scrollable: true, backdropClass: 'light-blue-backdrop' });
  }
}
