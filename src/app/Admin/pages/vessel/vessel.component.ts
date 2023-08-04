import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VesselService } from 'src/app/Services/vessel/vessel.service';

@Component({
  selector: 'app-vessel',
  templateUrl: './vessel.component.html',
  styleUrls: ['./vessel.component.scss']
})
export class VesselComponent {
  vessel:any

  constructor(private router:Router,private vesselService:VesselService){}
  
  ngOnInit(){
    this.getAllVessel();
  }

  view(id:number){
    this.router.navigate(['admin/view_vessel',{id}]);
  }
  getAllVessel(){
    this.vesselService.getAllVessel().subscribe(
      response => {
        console.log(response)
        this.vessel = response;
      }
    )
  }

}
