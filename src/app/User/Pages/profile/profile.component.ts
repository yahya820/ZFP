import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { UserService } from 'src/app/Services/user/user.service';
import { VesselService } from 'src/app/Services/vessel/vessel.service';
// import { User } from 'src/app/Services/user/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  fisherman: any
  user:any
  vessel:any

  constructor(private route:ActivatedRoute,
    private userService : UserService, private fishermanService:FishermanService,
    private vesselService:VesselService){} 

  ngOnInit(){
    this.getByUserid(sessionStorage.getItem('id'));
    this.getByuserIdFisherman(sessionStorage.getItem('id'));
    this.getByUserIdVessel(sessionStorage.getItem('id'));

    
  }
  getByUserid(id:any){
    this.userService.getId(id).subscribe(
      respo => {
        this.user =respo;
      }
    )
  }
  getByuserIdFisherman(id:any){
    return this.fishermanService.getByUserId(id).subscribe(respo=>{
      console.log(respo)
      this.fisherman = respo;
    })
  }
  getByUserIdVessel(id:any){
    return this.vesselService.getByUserId(id).subscribe(
      respo => {
        this.vessel = respo;
      }
    )
  }
  // getByUserId(){
  //   this.fishermanService.getByUserId(sessionStorage.getItem('id')).subscribe(
  //     response => {
  //       console.log(response)
  //       this.user = response;
  //     }
  //   )
  // }

}
