import { Component } from '@angular/core';
import { AlgaeService } from 'src/app/Services/algae/algae.service';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { MessageService } from 'src/app/Services/message/message.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import { UserService } from 'src/app/Services/user/user.service';
import { VesselService } from 'src/app/Services/vessel/vessel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  algae1!:any
  user1!:any
  vessel1!:any
  fisherman1!:any
  paymentfisherman1!:any
  paymentVessel1!:any
  message1!:any

  constructor(private algaeService:AlgaeService,
    private fishermanService:FishermanService,
    private vesselservice:VesselService,
    private messageService: MessageService,
    private paymentService:PaymentService,
    private userService:UserService){}

    ngOnInit(){
      this.algae();
      this.fisherman();
      this.vessel();
      this.message();
      this.paymentFisherman();
      this.paymentVessel();
      this.user();
    }
    algae(){
      this.algaeService.getCount().subscribe(response => {this.algae1 = response})
    }
    fisherman(){
      this.fishermanService.getCount().subscribe(response => {this.fisherman1 = response})
    }
    vessel(){
      this.vesselservice.getCount().subscribe(response => {this.vessel1 = response})
    }
    message(){
      this.messageService.getCount().subscribe(response => {this.message1 = response})
    }
    paymentFisherman(){
      this.paymentService.getFishermanCount().subscribe(response => {this.paymentfisherman1 = response})
    }
    paymentVessel(){
      this.paymentService.getVesselCount().subscribe(response =>{this.paymentVessel1 = response})
    }
    user(){
      this.userService.getCount().subscribe(response =>{this.user1 = response})

    }

}
