import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VesselService } from 'src/app/Services/vessel/vessel.service';

@Component({
  selector: 'app-vessel',
  templateUrl: './vessel.component.html',
  styleUrls: ['./vessel.component.scss']
})
export class VesselComponent {
  vessel:any

  constructor(private router:Router,private vesselService:VesselService,
    private modalService: NgbModal,){}
  
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

  openBackDropCustomClass(tempa: any) {
    this.modalService.open(tempa, { size: 'xl', scrollable: true, backdropClass: 'light-blue-backdrop' });
  }

}
